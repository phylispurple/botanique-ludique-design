/**
 * Google Analytics 4 tracker for a React SPA.
 *
 * Sends a `page_view` event on every route change, and enriches it
 * with UTM / referrer context so GA4 can properly bucket traffic
 * into channels: Organic Search, Direct, Email, Referral, etc.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* ------------------------------------------------------------------ */
/* 1.  UTM persistence helper                                         */
/* ------------------------------------------------------------------ */

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const UTM_STORAGE_KEY = "bl_utm";

/** Persist first-set UTM params in sessionStorage for the session. */
function persistUtm(search: string) {
  const params = new URLSearchParams(search);
  const utm: Record<string, string> = {};
  let hasAny = false;
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) {
      utm[key] = val;
      hasAny = true;
    }
  }
  if (hasAny) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    } catch {
      /* ignore */
    }
  }
}

/** Return persisted UTM params if present. */
function getPersistedUtm(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/* ------------------------------------------------------------------ */
/* 2.  Referrer helpers                                               */
/* ------------------------------------------------------------------ */

/** Detect whether a referrer smells like an email client. */
function isEmailReferrer(ref: string): boolean {
  const lower = ref.toLowerCase();
  const emailClients = [
    "mail.google.com",
    "mail.yahoo.com",
    "outlook.live.com",
    "outlook.office.com",
    "mail.aol.com",
    "webmail.free.fr",
    "mail.orange.fr",
    "laposte.net",
    "sfr.fr",
    "mail.ru",
    "proton.me",
  ];
  return emailClients.some((host) => lower.includes(host));
}

/** Return a readable referrer source for custom events. */
function referrerSource(ref: string): string {
  if (!ref) return "direct";
  if (isEmailReferrer(ref)) return "email_client";
  try {
    const url = new URL(ref);
    const host = url.hostname.replace(/^www\./, "");
    if (/google\./.test(host)) return "google";
    if (/bing\./.test(host)) return "bing";
    if (/yahoo\./.test(host)) return "yahoo";
    if (/duckduckgo\./.test(host)) return "duckduckgo";
    if (/ecosia\./.test(host)) return "ecosia";
    if (/qwant\./.test(host)) return "qwant";
    if (/facebook\./.test(host)) return "facebook";
    if (/instagram\./.test(host)) return "instagram";
    if (/linkedin\./.test(host)) return "linkedin";
    return host;
  } catch {
    return "unknown";
  }
}

/* ------------------------------------------------------------------ */
/* 3.  GA4 send helper                                                */
/* ------------------------------------------------------------------ */

function sendPageView(path: string) {
  if (typeof window === "undefined" || !window.gtag) return;

  const utm = getPersistedUtm();
  const ref = document.referrer || "";
  const source = referrerSource(ref);

  const eventParams: Record<string, string | number | undefined> = {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
    ...utm,
  };

  // If GA4 already has UTM in the URL it will use them for session attribution.
  // We also push a custom event param so you can build an Exploration
  // that looks at `first_referrer_source` or `traffic_type`.
  if (ref) {
    eventParams.referrer_source = source;
  }
  if (isEmailReferrer(ref)) {
    eventParams.traffic_type = "email";
  }

  window.gtag("event", "page_view", eventParams);

  // Debug log in dev builds
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[GA4] page_view", eventParams);
  }
}

/* ------------------------------------------------------------------ */
/* 4.  React component                                                */
/* ------------------------------------------------------------------ */

export default function GATracker() {
  const location = useLocation();

  useEffect(() => {
    persistUtm(location.search);
  }, [location.search]);

  useEffect(() => {
    // Give the router a tick to finish so title is updated.
    const timer = setTimeout(() => {
      sendPageView(location.pathname + location.search);
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return null;
}

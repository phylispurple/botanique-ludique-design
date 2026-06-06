/**
 * Vendor-agnostic analytics layer.
 *
 * Pushes events to whatever is installed at runtime:
 *  - Plausible (window.plausible)
 *  - Google Analytics 4 / gtag (window.gtag)
 *  - Google Tag Manager (window.dataLayer)
 *
 * If nothing is installed yet, events still go to localStorage
 * (last 50, namespace `bl_events`) so we can inspect them now
 * and hook up Plausible/GA4 later without touching call sites.
 *
 * Blog attribution: when a reader clicks a CTA inside a blog
 * article, we stash the article slug in sessionStorage for 30min.
 * Any form submission within that window is tagged with
 * `blog_source = <slug>` — that's how we measure which articles
 * actually drive leads.
 */

type EventProps = Record<string, string | number | boolean | undefined>;

const ATTRIBUTION_KEY = "bl_blog_attribution";
const ATTRIBUTION_TTL_MS = 30 * 60 * 1000; // 30 min
const DEBUG_KEY = "bl_events";
const DEBUG_MAX = 50;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: EventProps }) => void;
    gtag?: (command: string, eventName: string, params?: EventProps) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function safeSession(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function safeLocal(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function setBlogAttribution(slug: string) {
  const s = safeSession();
  if (!s) return;
  try {
    s.setItem(ATTRIBUTION_KEY, JSON.stringify({ slug, ts: Date.now() }));
  } catch {
    /* ignore */
  }
}

export function getBlogAttribution(): string | undefined {
  const s = safeSession();
  if (!s) return undefined;
  try {
    const raw = s.getItem(ATTRIBUTION_KEY);
    if (!raw) return undefined;
    const { slug, ts } = JSON.parse(raw) as { slug: string; ts: number };
    if (Date.now() - ts > ATTRIBUTION_TTL_MS) {
      s.removeItem(ATTRIBUTION_KEY);
      return undefined;
    }
    return slug;
  } catch {
    return undefined;
  }
}

function pushDebug(name: string, props: EventProps) {
  const s = safeLocal();
  if (!s) return;
  try {
    const list = JSON.parse(s.getItem(DEBUG_KEY) || "[]") as unknown[];
    list.push({ name, props, ts: new Date().toISOString() });
    if (list.length > DEBUG_MAX) list.splice(0, list.length - DEBUG_MAX);
    s.setItem(DEBUG_KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
}

export function trackEvent(name: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  // Auto-attach blog attribution if present and not already set.
  const blogSource = getBlogAttribution();
  const enriched: EventProps = {
    ...props,
    ...(blogSource && !props.blog_source ? { blog_source: blogSource } : {}),
  };

  try {
    window.plausible?.(name, { props: enriched });
  } catch {
    /* ignore */
  }
  try {
    window.gtag?.("event", name, enriched);
  } catch {
    /* ignore */
  }
  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...enriched });
    }
  } catch {
    /* ignore */
  }

  pushDebug(name, enriched);

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", name, enriched);
  }
}

/** Helper for form-submission events. */
export function trackFormSubmit(formName: string, extra: EventProps = {}) {
  trackEvent("form_submit", { form: formName, ...extra });
}

/** Helper for blog CTA clicks. Also writes attribution. */
export function trackBlogCtaClick(articleSlug: string, target: string, label?: string) {
  setBlogAttribution(articleSlug);
  trackEvent("blog_cta_click", {
    article: articleSlug,
    target,
    ...(label ? { label } : {}),
  });
}

/**
 * Build a URL with UTM parameters for email / campaign links.
 *
 * Usage in your prospecting emails:
 *   https://botaniqueludique.com/pro?${buildUtmUrl("email", "prospection_juin_2026")}
 *
 * GA4 will then bucket this traffic as "Email" instead of "Direct".
 */
export function buildUtmUrl(
  medium: "email" | "social" | "referral" | "cpc" | "banner",
  campaign: string,
  source?: string,
  extra?: Record<string, string>
): string {
  const params = new URLSearchParams({
    utm_medium: medium,
    utm_campaign: campaign,
    ...(source ? { utm_source: source } : medium === "email" ? { utm_source: "email" } : {}),
    ...extra,
  });
  return params.toString();
}

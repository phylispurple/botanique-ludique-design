import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Row, Column, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Botanique Ludique'

interface Props {
  firstName?: string
  name?: string
  userMessage?: string
  jarSize?: string
  participantCount?: number
  totalPrice?: number
}

const WardianCaseJuinRegistrationEmail = ({ firstName, name, userMessage, jarSize, participantCount, totalPrice }: Props) => {
  const greetName = firstName || name || ''
  const size = jarSize || '3 litres'
  const unitPrice = size.includes('5') ? 20 : 12
  const count = participantCount && participantCount > 0 ? participantCount : 1
  const total = typeof totalPrice === 'number' ? totalPrice : unitPrice * count
  return (
    <Html lang="fr" dir="ltr">
      <Head />
      <Preview>Ton inscription à l'atelier Wardian Case du 6 juin est confirmée</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Top header band */}
          <Section style={topHeader}>
            <Row>
              <Column style={{ width: '60px', verticalAlign: 'middle' }}>
                <div style={logoCircle}>BL</div>
              </Column>
              <Column style={{ verticalAlign: 'middle' }} />
              <Column style={{ textAlign: 'right' as const, verticalAlign: 'middle' }}>
                <Text style={brandSmall}>ATELIERS VÉGÉTAUX</Text>
                <Text style={brandBold}>BOTANIQUE LUDIQUE</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={blackRule} />

          {/* Hero title */}
          <Section style={heroSection}>
            <Heading style={heroTitle}>
              {greetName ? `${greetName.toUpperCase()}, TON INSCRIPTION EST CONFIRMÉE !` : 'TON INSCRIPTION EST CONFIRMÉE !'}
            </Heading>
            <Text style={heroSubtitle}>
              MERCI POUR TA CONFIANCE.<br />
              HÂTE DE CRÉER ET D'EXPLORER AVEC TOI.
            </Text>
          </Section>

          {/* Workshop block */}
          <Section style={sageBlock}>
            <Text style={sageLabel}>ATELIER</Text>
            <Heading style={sageTitle}>WARDIAN CASE,<br />6 JUIN</Heading>
            <Text style={sageDesc}>
              Plonge dans l'histoire fascinante du terrarium, de la Wardian Case victorienne aux enjeux coloniaux, puis fabrique ton propre terrarium dans un bocal de {size}.
            </Text>
          </Section>

          {/* 2x2 info grid */}
          <Section style={infoGrid}>
            <Row>
              <Column style={infoCell}>
                <Text style={infoLabel}>📅 DATE</Text>
                <Text style={infoValue}>SAMEDI 6 JUIN 2026</Text>
              </Column>
              <Column style={infoCell}>
                <Text style={infoLabel}>🕒 HORAIRE</Text>
                <Text style={infoValue}>16H00</Text>
              </Column>
            </Row>
            <Row>
              <Column style={infoCell}>
                <Text style={infoLabel}>📍 LIEU</Text>
                <Text style={infoValue}>LA ROCHEFOUCAULD,<br />PARIS 14E</Text>
              </Column>
              <Column style={infoCell}>
                <Text style={infoLabel}>👥 PUBLIC</Text>
                <Text style={infoValue}>12 PARTICIPANT·ES MAX</Text>
              </Column>
            </Row>
          </Section>

          {/* Tarif & matériel */}
          <Section style={twoColWrap}>
            <Row>
              <Column style={tarifCol}>
                <Text style={sectionHeader}>TARIF & MATÉRIEL</Text>
                <Text style={listItem}>· {unitPrice}€ par personne</Text>
                <Text style={listItem}>· Bocal de {size}, boutures, terre et matériel fournis</Text>
                <Text style={listItem}>· Atelier maintenu à partir de 6 inscriptions</Text>
                <Text style={listItem}>· Paiement sur place le jour de l'atelier, en espèces</Text>
              </Column>
              <Column style={attendCol}>
                <Text style={sectionHeaderDark}>CE QUI T'ATTEND POUR CET ATELIER :</Text>
                <Text style={attendTitle}>🌿 Découverte de l'histoire de la Wardian Case</Text>
                <Text style={attendDesc}>Un voyage captivant entre botanique, exploration et enjeux coloniaux.</Text>
                <Hr style={dottedRule} />
                <Text style={attendTitle}>🌿 Création de ton terrarium</Text>
                <Text style={attendDesc}>Tu réaliseras ton propre écosystème dans un bocal de {size}.</Text>
                <Hr style={dottedRule} />
                <Text style={attendTitle}>🌿 Tout le matériel fourni</Text>
                <Text style={attendDesc}>Boutures, terre, matériaux et outils : tu n'as rien à préparer, juste à profiter.</Text>
                <Hr style={dottedRule} />
                <Text style={attendTitle}>🌿 Repars avec ta création</Text>
                <Text style={attendDesc}>Un terrarium unique à emporter chez toi et à voir évoluer dans le temps.</Text>
              </Column>
            </Row>
          </Section>

          {/* Yellow tag + question */}
          <Section style={bottomBand}>
            <Row>
              <Column style={yellowTag}>
                <Text style={yellowText}>🌿 Un atelier entre histoire, nature et gestes créatifs.</Text>
              </Column>
              <Column style={questionBox}>
                <Text style={questionTitle}>UNE QUESTION ?</Text>
                <Text style={questionDesc}>Écris-moi : contact@botaniqueludique.com</Text>
              </Column>
            </Row>
          </Section>

          {userMessage ? (
            <Section style={userMsgSection}>
              <Text style={userMsgLabel}>TON MESSAGE :</Text>
              <Text style={userMsgContent}>« {userMessage} »</Text>
              <Text style={userMsgReply}>Je te réponds au plus vite !</Text>
            </Section>
          ) : null}

          {/* Infos pratiques */}
          <Section style={practicalSection}>
            <Text style={sectionHeader}>INFOS PRATIQUES</Text>
            <Text style={practicalItem}>
              <span style={practicalLabel}>ANNULATION. </span>
              Si tu dois finalement annuler, préviens-moi au plus tard la veille de l'atelier. Cela me permettra de proposer ta place à une personne en attente.
            </Text>
            <Hr style={dottedRule} />
            <Text style={practicalItem}>
              <span style={practicalLabel}>PAIEMENT EN ESPÈCES. </span>
              Merci de prévoir l'appoint le jour de l'atelier, je n'ai pas toujours la monnaie sur place. Montant à régler : {total}€ ({count} × {unitPrice}€).
            </Text>
            <Hr style={dottedRule} />
            <Text style={practicalItem}>
              <span style={practicalLabel}>PONCTUALITÉ. </span>
              Arrive quelques minutes en avance pour qu'on puisse démarrer ensemble à 16h.
            </Text>
            <Hr style={dottedRule} />
            <Text style={practicalItem}>
              <span style={practicalLabel}>ACCÈS AU LIEU. </span>
              La Rochefoucauld, Paris 14e. Métro Denfert-Rochereau ou Mouton-Duvernet. Je t'enverrai l'adresse précise et le code d'entrée quelques jours avant l'atelier.
            </Text>
            <Hr style={dottedRule} />
            <Text style={practicalItem}>
              <span style={practicalLabel}>TENUE. </span>
              Prévois des vêtements dans lesquels tu peux te salir, on manipule de la terre et des plantes.
            </Text>
            <Hr style={dottedRule} />
            <Text style={practicalItem}>
              <span style={practicalLabel}>TRANSPORT DU TERRARIUM. </span>
              Pense à venir avec un cabas ou un sac solide pour ramener ton bocal en toute sécurité.
            </Text>
            <Hr style={dottedRule} />
            <Text style={practicalItem}>
              <span style={practicalLabel}>BESOINS SPÉCIFIQUES. </span>
              Allergies, mobilité réduite, accompagnement particulier : signale-le moi en répondant à ce mail, je m'adapte avec plaisir.
            </Text>
          </Section>

          <Hr style={blackRule} />

          {/* Signature */}
          <Section style={signatureBand}>
            <Row>
              <Column>
                <Text style={signatureLeft}>À TRÈS BIENTÔT !</Text>
              </Column>
              <Column style={{ textAlign: 'right' as const }}>
                <Text style={signatureName}>VANESSA</Text>
                <Text style={signatureSub}>BOTANIQUE LUDIQUE</Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: WardianCaseJuinRegistrationEmail,
  subject: 'Ton inscription est confirmée — Atelier Wardian Case, 6 juin 2026',
  displayName: 'Confirmation inscription Wardian Case 6 juin',
  previewData: {
    firstName: 'Marie',
    userMessage: 'Est-ce adapté pour débuter ?',
    jarSize: '5 litres',
    participantCount: 2,
    totalPrice: 36,
  },
} satisfies TemplateEntry

// ── Styles ──
const cream = '#f5f0e8'
const sage = '#a3b18a'
const sageDark = '#8a9974'
const ink = '#1a1a1a'
const yellow = '#e8b948'

const main = { backgroundColor: '#ffffff', fontFamily: "'Helvetica Neue', Arial, sans-serif" }
const container = {
  maxWidth: '640px',
  margin: '0 auto',
  backgroundColor: cream,
  padding: '24px',
}

const topHeader = { padding: '0 0 16px' }
const logoCircle = {
  width: '52px',
  height: '52px',
  borderRadius: '50%',
  backgroundColor: sage,
  color: ink,
  fontWeight: 900 as const,
  fontSize: '18px',
  letterSpacing: '1px',
  textAlign: 'center' as const,
  lineHeight: '52px',
  fontFamily: 'Georgia, serif',
}
const brandSmall = { color: ink, fontSize: '11px', letterSpacing: '2px', margin: '0', textAlign: 'right' as const }
const brandBold = { color: ink, fontSize: '12px', letterSpacing: '2px', fontWeight: 800 as const, margin: '2px 0 0', textAlign: 'right' as const }

const blackRule = { borderColor: ink, borderTopWidth: '2px', margin: '0' }

const heroSection = { padding: '36px 0 28px' }
const heroTitle = {
  color: ink,
  fontSize: '40px',
  lineHeight: '1.05',
  fontWeight: 900 as const,
  letterSpacing: '-1px',
  margin: '0 0 20px',
  textTransform: 'uppercase' as const,
}
const heroSubtitle = {
  color: ink,
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '1.8',
  margin: '0',
  fontWeight: 600 as const,
}

const sageBlock = {
  backgroundColor: sage,
  border: `2px solid ${ink}`,
  padding: '24px 28px',
}
const sageLabel = { color: ink, fontSize: '11px', letterSpacing: '3px', margin: '0 0 8px', fontWeight: 600 as const }
const sageTitle = {
  color: ink,
  fontSize: '34px',
  lineHeight: '1.05',
  fontWeight: 900 as const,
  letterSpacing: '0',
  margin: '0 0 16px',
  textTransform: 'uppercase' as const,
}
const sageDesc = { color: ink, fontSize: '14px', lineHeight: '1.6', margin: '0', fontFamily: "'Courier New', monospace" }

const infoGrid = {
  border: `2px solid ${ink}`,
  borderTop: 'none',
  backgroundColor: cream,
}
const infoCell = {
  padding: '18px 20px',
  border: `1px solid ${ink}`,
  width: '50%',
  verticalAlign: 'top' as const,
}
const infoLabel = { color: ink, fontSize: '10px', letterSpacing: '2px', margin: '0 0 6px', fontWeight: 600 as const }
const infoValue = { color: ink, fontSize: '14px', fontWeight: 800 as const, margin: '0', letterSpacing: '1px' }

const twoColWrap = { marginTop: '16px' }
const tarifCol = {
  width: '38%',
  padding: '18px 18px',
  border: `2px solid ${ink}`,
  verticalAlign: 'top' as const,
  backgroundColor: cream,
}
const attendCol = {
  width: '62%',
  padding: '18px 20px',
  border: `2px solid ${ink}`,
  borderLeft: 'none',
  verticalAlign: 'top' as const,
  backgroundColor: cream,
}
const sectionHeader = {
  color: ink,
  fontSize: '11px',
  letterSpacing: '2px',
  margin: '0 0 14px',
  fontWeight: 800 as const,
  backgroundColor: sage,
  padding: '6px 8px',
  display: 'inline-block',
}
const sectionHeaderDark = { color: ink, fontSize: '12px', letterSpacing: '2px', margin: '0 0 14px', fontWeight: 800 as const }
const listItem = { color: ink, fontSize: '13px', lineHeight: '1.7', margin: '0 0 8px' }
const attendTitle = { color: ink, fontSize: '13px', fontWeight: 700 as const, margin: '0 0 4px' }
const attendDesc = { color: '#3a3a3a', fontSize: '12px', lineHeight: '1.5', margin: '0 0 10px', fontFamily: "'Courier New', monospace" }
const dottedRule = { borderColor: '#bbb', borderTopWidth: '1px', borderStyle: 'dotted' as const, margin: '8px 0' }

const bottomBand = { marginTop: '16px' }
const yellowTag = {
  backgroundColor: yellow,
  border: `2px solid ${ink}`,
  padding: '16px',
  width: '40%',
  verticalAlign: 'middle' as const,
}
const yellowText = { color: ink, fontSize: '12px', fontWeight: 600 as const, margin: '0', lineHeight: '1.4' }
const questionBox = {
  border: `2px solid ${ink}`,
  borderLeft: 'none',
  padding: '16px 18px',
  width: '60%',
  verticalAlign: 'middle' as const,
  backgroundColor: cream,
}
const questionTitle = { color: ink, fontSize: '12px', fontWeight: 800 as const, letterSpacing: '2px', margin: '0 0 4px' }
const questionDesc = { color: ink, fontSize: '12px', margin: '0', fontFamily: "'Courier New', monospace" }

const userMsgSection = { marginTop: '16px', padding: '14px 16px', border: `2px solid ${ink}`, backgroundColor: cream }
const userMsgLabel = { color: ink, fontSize: '11px', letterSpacing: '2px', fontWeight: 800 as const, margin: '0 0 6px' }
const userMsgContent = { color: ink, fontSize: '13px', fontStyle: 'italic' as const, margin: '0 0 6px' }
const userMsgReply = { color: sageDark, fontSize: '12px', margin: '0', fontWeight: 600 as const }

const signatureBand = { padding: '16px 0 0' }
const signatureLeft = { color: ink, fontSize: '16px', fontWeight: 900 as const, letterSpacing: '1px', margin: '0' }
const signatureName = { color: ink, fontSize: '13px', fontWeight: 800 as const, letterSpacing: '2px', margin: '0' }
const signatureSub = { color: ink, fontSize: '11px', letterSpacing: '2px', margin: '2px 0 0' }

const practicalSection = { marginTop: '16px', padding: '20px 22px', border: `2px solid ${ink}`, backgroundColor: cream }
const practicalItem = { color: ink, fontSize: '13px', lineHeight: '1.6', margin: '10px 0', fontFamily: "'Courier New', monospace" }
const practicalLabel = { color: ink, fontSize: '12px', fontWeight: 800 as const, letterSpacing: '1.5px', fontFamily: "'Helvetica Neue', Arial, sans-serif" }

import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Botanique Ludique"

interface WardianCaseRegistrationProps {
  firstName?: string
  name?: string
  subject?: string
  userMessage?: string
}

const WardianCaseRegistrationEmail = ({ firstName, name, userMessage }: WardianCaseRegistrationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Confirmation de ton inscription, Atelier Wardian Case</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={topBand} />

        <Section style={header}>
          <Text style={headerLabel}>ATELIER WARDIAN CASE</Text>
          <Heading style={headerTitle}>BOTANIQUE{'\n'}LUDIQUE</Heading>
        </Section>

        <Section style={pinkDivider} />

        <Section style={content}>
          <Heading style={greeting}>
            Bonjour {firstName || name || ''} !
          </Heading>

          <Hr style={thinRule} />

          <Text style={text}>
            Merci pour ton inscription à l'atelier Wardian Case, j'ai hâte de t'y retrouver !
          </Text>

          <Text style={text}>
            On va passer un super moment ensemble à plonger dans l'histoire fascinante des Wardian Cases victoriens, et tu repartiras avec ton propre mini terrarium.
          </Text>

          <Text style={textBold}>Rendez-vous :</Text>
          <Text style={text}>
            Mercredi 22 avril 2026, 16h00 – 17h30{'\n'}
            La Rochefoucauld, Paris 14e (Denfert-Rochereau)
          </Text>

          <Text style={textBold}>Règlement :</Text>
          <Text style={text}>
            Le règlement se fait en espèces sur place, 10 à 15 minutes avant le début de l'atelier.
          </Text>

          <Text style={text}>
            N'hésite pas à en parler autour de toi, si des amis sont intéressés par le sujet, ils sont les bienvenus !
          </Text>

          {userMessage ? (
            <>
              <Text style={textBold}>Ton message :</Text>
              <Text style={messageContent}>
                « {userMessage} »
              </Text>
              <Text style={messageReply}>
                Je te réponds au plus vite !
              </Text>
            </>
          ) : null}

          <Text style={text}>
            Si tu as la moindre question d'ici là, réponds simplement à cet email.
          </Text>

          <Text style={closingText}>
            À très bientôt !
          </Text>
        </Section>

        <Section style={signatureBand}>
          <Text style={signatureName}>VANESSA</Text>
          <Text style={signatureSub}>{SITE_NAME} 🍀</Text>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            {SITE_NAME} · Ateliers botaniques · Île-de-France
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: WardianCaseRegistrationEmail,
  subject: (data: Record<string, any>) =>
    `Confirmation de ton inscription, ${data.subject || 'Atelier Wardian Case'}`,
  displayName: 'Confirmation inscription Wardian Case',
  previewData: {
    firstName: 'Marie',
    subject: 'Wardian Case, 22 avril',
    userMessage: 'Est-ce adapté aux enfants ?',
  },
} satisfies TemplateEntry

// ── Styles ──
const darkGreen = '#2e4a3e'
const cream = '#f5f0e8'
const coral = '#e0917e'
const olive = '#7a8a3e'

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif" }
const container = { maxWidth: '600px', margin: '0 auto', border: `4px solid ${darkGreen}` }

const topBand = { backgroundColor: darkGreen, height: '8px' }

const header = {
  backgroundColor: darkGreen,
  padding: '35px 30px 30px',
  textAlign: 'center' as const,
}
const headerLabel = {
  color: coral,
  fontSize: '11px',
  letterSpacing: '4px',
  margin: '0 0 12px',
  fontWeight: '500' as const,
  textTransform: 'uppercase' as const,
}
const headerTitle = {
  color: cream,
  fontSize: '32px',
  margin: '0',
  fontWeight: '900' as const,
  letterSpacing: '3px',
  lineHeight: '1.1',
  textTransform: 'uppercase' as const,
}

const pinkDivider = { backgroundColor: coral, height: '5px' }

const content = { padding: '32px 30px 20px', backgroundColor: cream }

const greeting = {
  color: darkGreen,
  fontSize: '20px',
  fontWeight: '800' as const,
  margin: '0 0 8px',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
}
const thinRule = { borderColor: olive, borderWidth: '1px', margin: '12px 0 20px' }

const text = { color: '#2a2a2a', fontSize: '15px', lineHeight: '1.75', margin: '0 0 16px' }

const textBold = { color: darkGreen, fontSize: '15px', lineHeight: '1.75', margin: '16px 0 4px', fontWeight: '700' as const }
const messageContent = {
  color: '#2a2a2a',
  fontSize: '14px',
  fontStyle: 'italic' as const,
  lineHeight: '1.7',
  margin: '0 0 8px',
}
const messageReply = { color: olive, fontSize: '14px', margin: '0', fontWeight: '500' as const }

const closingText = { color: '#2a2a2a', fontSize: '15px', lineHeight: '1.75', margin: '10px 0 0' }

const signatureBand = {
  backgroundColor: coral,
  padding: '18px 30px',
  textAlign: 'right' as const,
}
const signatureName = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '900' as const,
  letterSpacing: '2px',
  margin: '0',
  textTransform: 'uppercase' as const,
}
const signatureSub = {
  color: darkGreen,
  fontSize: '12px',
  margin: '4px 0 0',
  fontWeight: '500' as const,
}

const footer = { padding: '16px 30px', textAlign: 'center' as const, backgroundColor: darkGreen }
const footerText = { color: cream, fontSize: '11px', margin: '0', letterSpacing: '1px' }

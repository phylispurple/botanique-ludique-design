import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Img, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Botanique Ludique"
const ILLUSTRATION_URL = "https://botaniqueludique.com/email-assets/validation-teintures-vegetales.png"

interface TeinturesRegistrationProps {
  firstName?: string
  name?: string
  subject?: string
  userMessage?: string
}

const TeinturesRegistrationEmail = ({ firstName, name, userMessage }: TeinturesRegistrationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Ton inscription à l'atelier Teintures végétales est confirmée</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={imageSection}>
          <Img
            src={ILLUSTRATION_URL}
            alt="Confirmation d'inscription à l'atelier Teintures végétales, Botanique Ludique, mercredi 27 mai 2026 à 17h, La Rochefoucauld Paris 14e, 8€ matériel fourni"
            width="600"
            style={image}
          />
        </Section>

        <Section style={content}>
          <Heading style={greeting}>
            Bonjour {firstName || name || ''},
          </Heading>

          <Text style={text}>
            Ton inscription est bien enregistrée, j'ai hâte de t'y retrouver.
          </Text>

          {userMessage ? (
            <>
              <Hr style={thinRule} />
              <Text style={textBold}>Ton message :</Text>
              <Text style={messageContent}>« {userMessage} »</Text>
              <Text style={messageReply}>Je te réponds au plus vite.</Text>
            </>
          ) : null}

          <Hr style={thinRule} />

          <Text style={text}>
            Si tu as la moindre question d'ici là, réponds simplement à cet email.
          </Text>
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
  component: TeinturesRegistrationEmail,
  subject: (data: Record<string, any>) =>
    `Confirmation de ton inscription, ${data.subject || 'Atelier Teintures végétales'}`,
  displayName: 'Confirmation inscription Teintures végétales',
  previewData: {
    firstName: 'Marie',
    subject: 'Teintures végétales, 27 mai',
    userMessage: 'Faut-il prévoir des vêtements particuliers ?',
  },
} satisfies TemplateEntry

// ── Styles ──
const darkGreen = '#2e4a3e'
const cream = '#f5f0e8'
const olive = '#7a8a3e'

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif" }
const container = { maxWidth: '600px', margin: '0 auto' }

const imageSection = { padding: '0', margin: '0' }
const image = {
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  display: 'block',
  border: '0',
}

const content = { padding: '28px 30px 20px', backgroundColor: cream }
const greeting = { color: darkGreen, fontSize: '18px', fontWeight: '700' as const, margin: '0 0 12px' }
const thinRule = { borderColor: olive, borderWidth: '1px', margin: '18px 0' }
const text = { color: '#2a2a2a', fontSize: '15px', lineHeight: '1.7', margin: '0 0 12px' }
const textBold = { color: darkGreen, fontSize: '14px', margin: '0 0 6px', fontWeight: '700' as const }
const messageContent = {
  color: '#2a2a2a',
  fontSize: '14px',
  fontStyle: 'italic' as const,
  lineHeight: '1.7',
  margin: '0 0 8px',
}
const messageReply = { color: olive, fontSize: '14px', margin: '0', fontWeight: '500' as const }

const footer = { padding: '16px 30px', textAlign: 'center' as const, backgroundColor: darkGreen }
const footerText = { color: cream, fontSize: '11px', margin: '0', letterSpacing: '1px' }

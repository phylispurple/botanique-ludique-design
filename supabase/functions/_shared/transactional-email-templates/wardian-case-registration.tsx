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

const WardianCaseRegistrationEmail = ({ firstName, name, subject, userMessage }: WardianCaseRegistrationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Confirmation de ton inscription – {subject || 'Atelier Wardian Case'} 🌿</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={headerTitle}>🌿 {SITE_NAME}</Heading>
        </Section>

        <Section style={content}>
          <Heading style={h1}>
            Bonjour {firstName || name || ''} !
          </Heading>

          <Text style={text}>
            Merci beaucoup pour ton inscription 🌿
          </Text>

          <Text style={text}>
            Je te promets que l'on passera un bon moment à parler de l'histoire des terrariums, et que la création te plaira.
          </Text>

          <Section style={infoBox}>
            <Text style={infoText}>
              <strong>🪴 Atelier :</strong> {subject || 'Inscription'}
            </Text>
            <Text style={infoText}>
              Il te suffira de me régler directement en liquide le jour de l'atelier, ou via PayPal avant.
            </Text>
          </Section>

          <Text style={text}>
            N'hésite pas à proposer l'atelier à d'autres amis qui pourraient être intéressés par ce sujet.
          </Text>

          {userMessage ? (
            <Section style={messageBox}>
              <Text style={messageText}>
                Ton message : « {userMessage} »
              </Text>
              <Text style={messageReply}>
                Merci beaucoup pour ton message, je te réponds au plus vite !
              </Text>
            </Section>
          ) : null}

          <Text style={text}>
            Si tu as des questions, n'hésite pas à me répondre directement à ce mail.
          </Text>

          <Text style={text}>
            À très bientôt,
          </Text>
          <Text style={signature}>
            Vanessa — {SITE_NAME} 🍀
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={footer}>
          <Text style={footerText}>
            {SITE_NAME} · Ateliers botaniques en Île-de-France
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: WardianCaseRegistrationEmail,
  subject: (data: Record<string, any>) =>
    `Confirmation de ton inscription – ${data.subject || 'Atelier Wardian Case'} 🌿`,
  displayName: 'Confirmation inscription Wardian Case',
  previewData: {
    firstName: 'Marie',
    subject: 'Wardian Case – 22 avril',
    userMessage: 'Est-ce adapté aux enfants ?',
  },
} satisfies TemplateEntry

// Styles — Brutaliste Botanical palette from Botanique Ludique
const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', 'Arial', sans-serif" }
const container = { maxWidth: '600px', margin: '0 auto', border: '3px solid #1a1a1a' }
const header = {
  backgroundColor: '#2e7a5e',
  padding: '30px 20px',
  textAlign: 'center' as const,
}
const headerTitle = {
  color: '#f3efe6',
  fontSize: '26px',
  margin: '0',
  fontWeight: '700' as const,
  letterSpacing: '1px',
}
const content = { padding: '30px 25px', backgroundColor: '#f3efe6' }
const h1 = {
  color: '#1a1a1a',
  fontSize: '22px',
  fontWeight: '700' as const,
  margin: '0 0 20px',
  borderBottom: '3px solid #7a8a3e',
  paddingBottom: '10px',
}
const text = { color: '#1a1a1a', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' }
const infoBox = {
  backgroundColor: '#ffffff',
  padding: '18px 20px',
  margin: '25px 0',
  border: '2px solid #7a8a3e',
  borderLeft: '6px solid #2e7a5e',
}
const infoText = { color: '#1a1a1a', fontSize: '14px', lineHeight: '1.6', margin: '0 0 10px' }
const messageBox = {
  backgroundColor: '#ffffff',
  padding: '18px 20px',
  margin: '25px 0',
  border: '2px solid #e06a3a',
  borderLeft: '6px solid #e06a3a',
}
const messageText = { color: '#1a1a1a', fontSize: '14px', fontStyle: 'italic' as const, margin: '0 0 8px' }
const messageReply = { color: '#555555', fontSize: '14px', margin: '0' }
const signature = {
  color: '#2e7a5e',
  fontSize: '16px',
  fontWeight: 'bold' as const,
  margin: '0 0 16px',
}
const hr = { borderColor: '#7a8a3e', margin: '0', borderWidth: '2px' }
const footer = { padding: '15px 20px', textAlign: 'center' as const, backgroundColor: '#1a1a1a' }
const footerText = { color: '#f3efe6', fontSize: '12px', margin: '0' }

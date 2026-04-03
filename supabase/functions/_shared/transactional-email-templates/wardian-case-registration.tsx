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
              <strong>Atelier :</strong> {subject || 'Inscription'}
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
            Vanessa — {SITE_NAME}
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

// Styles — brand colors from Botanique Ludique
const main = { backgroundColor: '#ffffff', fontFamily: "'Arial', sans-serif" }
const container = { maxWidth: '600px', margin: '0 auto' }
const header = { backgroundColor: '#F7F7EB', padding: '30px 20px', textAlign: 'center' as const }
const headerTitle = { color: '#3D3D2E', fontSize: '24px', margin: '0', fontWeight: '400' as const }
const content = { padding: '30px 20px' }
const h1 = { color: '#3D3D2E', fontSize: '20px', fontWeight: '400' as const, margin: '0 0 20px' }
const text = { color: '#555555', fontSize: '15px', lineHeight: '1.6', margin: '0 0 16px' }
const infoBox = {
  backgroundColor: '#F7F7EB',
  padding: '15px 20px',
  margin: '25px 0',
  borderLeft: '4px solid #A7B795',
}
const infoText = { color: '#3D3D2E', fontSize: '14px', lineHeight: '1.6', margin: '0 0 10px' }
const messageBox = {
  backgroundColor: '#fff8e1',
  padding: '15px 20px',
  margin: '25px 0',
  borderLeft: '4px solid #f0c040',
}
const messageText = { color: '#3D3D2E', fontSize: '14px', fontStyle: 'italic' as const, margin: '0 0 8px' }
const messageReply = { color: '#555555', fontSize: '14px', margin: '0' }
const signature = { color: '#3D3D2E', fontSize: '15px', fontWeight: 'bold' as const, margin: '0 0 16px' }
const hr = { borderColor: '#C9D2B5', margin: '30px 0' }
const footer = { padding: '0 20px 20px', textAlign: 'center' as const }
const footerText = { color: '#888888', fontSize: '12px', margin: '0' }

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
    <Preview>Confirmation de ton inscription – Atelier Wardian Case 🌿</Preview>
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
            Merci beaucoup pour ton inscription à l'atelier Wardian Case ! 🌿
          </Text>

          <Text style={text}>
            Je te promets qu'on passera un super moment à parler de l'histoire fascinante des terrariums, et que la création de ton mini terrarium te plaira.
          </Text>

          <Text style={text}>
            N'hésite pas à en parler autour de toi — si des amis seraient intéressés par le sujet, ils sont les bienvenus !
          </Text>

          {userMessage ? (
            <Text style={text}>
              Tu m'as laissé ce message : « {userMessage} » — je te réponds au plus vite !
            </Text>
          ) : null}

          <Text style={text}>
            Si tu as la moindre question d'ici là, réponds simplement à cet email.
          </Text>

          <Text style={text}>
            À très bientôt !
          </Text>
          <Text style={signature}>
            Vanessa de {SITE_NAME} 🍀
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
const signature = {
  color: '#2e7a5e',
  fontSize: '16px',
  fontWeight: 'bold' as const,
  margin: '0 0 16px',
}
const hr = { borderColor: '#7a8a3e', margin: '0', borderWidth: '2px' }
const footer = { padding: '15px 20px', textAlign: 'center' as const, backgroundColor: '#1a1a1a' }
const footerText = { color: '#f3efe6', fontSize: '12px', margin: '0' }

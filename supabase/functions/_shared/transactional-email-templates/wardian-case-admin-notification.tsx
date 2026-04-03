import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface AdminNotificationProps {
  fullName?: string
  email?: string
  phone?: string
  participants?: string
  aurore?: string
  bocal?: string
  price?: string
  message?: string
}

const AdminNotificationEmail = ({
  fullName, email, phone, participants, aurore, bocal, price, message,
}: AdminNotificationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouvelle inscription Wardian Case – {fullName || 'Participant'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={headerTitle}>📋 Nouvelle inscription</Heading>
        </Section>

        <Section style={content}>
          <Heading style={h1}>Atelier Wardian Case</Heading>

          <Section style={infoBox}>
            <Text style={infoText}><strong>Nom :</strong> {fullName || 'Non renseigné'}</Text>
            <Text style={infoText}><strong>Email :</strong> {email || 'Non renseigné'}</Text>
            <Text style={infoText}><strong>Téléphone :</strong> {phone || 'Non renseigné'}</Text>
            <Text style={infoText}><strong>Nombre de personnes :</strong> {participants || '1'}</Text>
            <Text style={infoText}><strong>Bénéficiaire Aurore :</strong> {aurore || 'Non'}</Text>
            <Text style={infoText}><strong>Bocal :</strong> {bocal || 'Non renseigné'}</Text>
            <Text style={infoText}><strong>Tarif estimé :</strong> {price || 'Non calculé'}</Text>
          </Section>

          {message ? (
            <Section style={messageBox}>
              <Text style={messageLabel}>💬 Message :</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          ) : null}
        </Section>

        <Hr style={hr} />
        <Section style={footer}>
          <Text style={footerText}>
            Pour répondre : répondez simplement à cet email.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AdminNotificationEmail,
  subject: (data: Record<string, any>) =>
    `[Botanique Ludique] Inscription Wardian Case – ${data.fullName || 'Nouveau participant'}`,
  displayName: 'Notification admin inscription',
  to: 'botaniqueludique@gmail.com',
  previewData: {
    fullName: 'Marie Dupont',
    email: 'marie@example.com',
    phone: '06 12 34 56 78',
    participants: '2',
    aurore: 'Non',
    bocal: 'Ramène son bocal',
    price: '14€ pour 2 personnes',
    message: 'Est-ce adapté aux enfants ?',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', 'Arial', sans-serif" }
const container = { maxWidth: '600px', margin: '0 auto', border: '3px solid #1a1a1a' }
const header = {
  backgroundColor: '#1a1a1a',
  padding: '20px',
  textAlign: 'center' as const,
}
const headerTitle = {
  color: '#f3efe6',
  fontSize: '20px',
  fontWeight: '700' as const,
  margin: '0',
}
const content = { padding: '25px', backgroundColor: '#f3efe6' }
const h1 = {
  color: '#2e7a5e',
  fontSize: '20px',
  fontWeight: 'bold' as const,
  margin: '0 0 20px',
  borderBottom: '3px solid #7a8a3e',
  paddingBottom: '8px',
}
const infoBox = {
  backgroundColor: '#ffffff',
  padding: '20px',
  border: '2px solid #7a8a3e',
  margin: '20px 0',
}
const infoText = { color: '#1a1a1a', fontSize: '14px', margin: '8px 0' }
const messageBox = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderLeft: '6px solid #e06a3a',
  border: '2px solid #e06a3a',
  margin: '20px 0',
}
const messageLabel = { color: '#1a1a1a', fontSize: '14px', fontWeight: 'bold' as const, margin: '0 0 8px' }
const messageText = { color: '#1a1a1a', fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const, margin: '0' }
const hr = { borderColor: '#7a8a3e', margin: '0', borderWidth: '2px' }
const footer = { padding: '15px 20px', textAlign: 'center' as const, backgroundColor: '#1a1a1a' }
const footerText = { color: '#f3efe6', fontSize: '13px', margin: '0' }

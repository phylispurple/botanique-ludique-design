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
        <Heading style={h1}>Nouvelle inscription – Atelier Wardian Case</Heading>

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
            <Text style={messageLabel}>Message :</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>
          Pour répondre : répondez simplement à cet email.
        </Text>
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

const main = { backgroundColor: '#ffffff', fontFamily: "'Arial', sans-serif" }
const container = { maxWidth: '600px', margin: '0 auto', padding: '20px' }
const h1 = { color: '#A7B795', fontSize: '22px', fontWeight: 'bold' as const, margin: '0 0 20px' }
const infoBox = {
  backgroundColor: '#F7F7EB',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px 0',
}
const infoText = { color: '#3D3D2E', fontSize: '14px', margin: '10px 0' }
const messageBox = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderLeft: '4px solid #A7B795',
  margin: '20px 0',
}
const messageLabel = { color: '#3D3D2E', fontSize: '14px', fontWeight: 'bold' as const, margin: '0 0 8px' }
const messageText = { color: '#3D3D2E', fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const, margin: '0' }
const hr = { borderColor: '#C9D2B5', margin: '30px 0' }
const footer = { color: '#5D653A', fontSize: '14px' }

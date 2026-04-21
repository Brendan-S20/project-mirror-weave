import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const ACCENT = '#3b82f6'
const DARK = '#0b1220'

interface Props {
  name?: string
  email?: string
  focus?: string
  note?: string
  slot?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Section style={row}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
  ) : null

const InternalStrategyNotification = ({ name, email, focus, note, slot }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New strategy call request from {name || 'a prospect'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={hero}>
          <Text style={brandMark}>THE NORTH — INTERNAL</Text>
          <Heading style={h1}>New strategy call request</Heading>
          <Text style={lead}>{name || 'A prospect'} just requested a strategy call.</Text>
        </Section>

        <Section style={body}>
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          <Row label="Requested slot" value={slot} />
          <Row label="Focus" value={focus} />
          <Row label="Note" value={note} />
        </Section>

        <Hr style={hr} />
        <Text style={footer}>Reply directly to {email || 'the lead'} to confirm a time.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: InternalStrategyNotification,
  subject: (d: Record<string, any>) => `New strategy call — ${d?.name || 'Unknown'}`,
  displayName: 'Internal — Strategy call',
  previewData: { name: 'Alex Kim', email: 'alex@startup.io', focus: 'Lead generation, Automation', note: 'Want to scale outbound.', slot: 'Tomorrow — 10:00 AM' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '600px', margin: '0 auto', padding: '0' }
const hero = { backgroundColor: DARK, padding: '32px', backgroundImage: 'linear-gradient(135deg, #0b1220 0%, #1e3a5f 100%)' }
const brandMark = { color: ACCENT, fontSize: '10px', letterSpacing: '3px', fontWeight: 700, margin: '0 0 12px' }
const h1 = { color: '#ffffff', fontSize: '24px', fontWeight: 700, margin: '0 0 8px' }
const lead = { color: '#cbd5e1', fontSize: '14px', margin: 0 }
const body = { padding: '24px 32px 8px' }
const row = { margin: '0 0 16px' }
const rowLabel = { color: '#64748b', fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', fontWeight: 600, margin: '0 0 4px' }
const rowValue = { color: DARK, fontSize: '14px', lineHeight: 1.5, margin: 0, whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#e2e8f0', margin: '16px 32px' }
const footer = { color: '#475569', fontSize: '12px', padding: '0 32px 32px', margin: 0 }
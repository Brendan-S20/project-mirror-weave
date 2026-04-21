import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const ACCENT = '#10b981'
const DARK = '#0b1220'

interface Props {
  name?: string
  email?: string
  company?: string
  types?: string
  description?: string
  timeline?: string
  budget?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Section style={row}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
  ) : null

const InternalProjectNotification = ({ name, email, company, types, description, timeline, budget }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New project request from {name || 'a prospect'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={hero}>
          <Text style={brandMark}>THE NORTH — INTERNAL</Text>
          <Heading style={h1}>New project request</Heading>
          <Text style={lead}>{name || 'A prospect'} just submitted the Start a Project form.</Text>
        </Section>

        <Section style={body}>
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          <Row label="Company" value={company} />
          <Row label="Project types" value={types} />
          <Row label="Timeline" value={timeline} />
          <Row label="Budget" value={budget} />
          <Row label="Description" value={description} />
        </Section>

        <Hr style={hr} />
        <Text style={footer}>Reply directly to {email || 'the lead'} to follow up.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: InternalProjectNotification,
  subject: (d: Record<string, any>) => `New project request — ${d?.name || 'Unknown'}${d?.company ? ` (${d.company})` : ''}`,
  displayName: 'Internal — Project request',
  previewData: { name: 'Jane Doe', email: 'jane@acme.com', company: 'Acme', types: 'Growth Infrastructure, Automation', timeline: '1–3 months', budget: '$10k–$25k', description: 'Need to overhaul our lead-gen funnel.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '600px', margin: '0 auto', padding: '0' }
const hero = { backgroundColor: DARK, padding: '32px', backgroundImage: 'linear-gradient(135deg, #0b1220 0%, #0f2940 100%)' }
const brandMark = { color: ACCENT, fontSize: '10px', letterSpacing: '3px', fontWeight: 700, margin: '0 0 12px' }
const h1 = { color: '#ffffff', fontSize: '24px', fontWeight: 700, margin: '0 0 8px' }
const lead = { color: '#cbd5e1', fontSize: '14px', margin: 0 }
const body = { padding: '24px 32px 8px' }
const row = { margin: '0 0 16px' }
const rowLabel = { color: '#64748b', fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', fontWeight: 600, margin: '0 0 4px' }
const rowValue = { color: DARK, fontSize: '14px', lineHeight: 1.5, margin: 0, whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#e2e8f0', margin: '16px 32px' }
const footer = { color: '#475569', fontSize: '12px', padding: '0 32px 32px', margin: 0 }
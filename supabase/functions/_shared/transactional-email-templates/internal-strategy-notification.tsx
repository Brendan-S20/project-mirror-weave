import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Img, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const ACCENT = '#3b82f6'
const DARK = '#0b1220'
const SITE_NAME = 'The North'
const LOGO_URL = 'https://kyywxwymlhztmbhnmjva.supabase.co/storage/v1/object/public/email-assets/logo-thenorth-light-v2.png'

const responsiveCss = `
  @media only screen and (max-width: 480px) {
    .tn-container { width: 100% !important; max-width: 100% !important; }
    .tn-hero { padding: 28px 24px !important; }
    .tn-body { padding: 20px 24px 4px !important; }
    .tn-h1 { font-size: 20px !important; }
    .tn-hr { margin: 12px 24px !important; }
    .tn-footer { padding: 0 24px 24px !important; }
    .tn-logo { width: 130px !important; height: auto !important; }
  }
`

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
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="color-scheme" content="light only" />
      <meta name="supported-color-schemes" content="light" />
      <style>{responsiveCss}</style>
    </Head>
    <Preview>New strategy call request from {name || 'a prospect'}</Preview>
    <Body style={main}>
      <Container style={container} className="tn-container">
        <Section style={hero} className="tn-hero">
          <Img src={LOGO_URL} alt={SITE_NAME} width={160} height={41} style={logo} className="tn-logo" />
          <Text style={brandMark}>THE NORTH — INTERNAL</Text>
          <Heading style={h1} className="tn-h1">New strategy call request</Heading>
          <Text style={lead}>{name || 'A prospect'} just requested a strategy call.</Text>
        </Section>

        <Section style={body} className="tn-body">
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          <Row label="Requested slot" value={slot} />
          <Row label="Focus" value={focus} />
          <Row label="Note" value={note} />
        </Section>

        <Hr style={hr} className="tn-hr" />
        <Text style={footer} className="tn-footer">Reply directly to {email || 'the lead'} to confirm a time.</Text>
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

const main = { backgroundColor: '#f1f5f9', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', margin: 0, padding: '24px 12px', WebkitFontSmoothing: 'antialiased' as const }
const container = { width: '100%', maxWidth: '600px', margin: '0 auto', padding: 0, backgroundColor: '#ffffff', borderRadius: '14px', overflow: 'hidden' as const, boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)' }
const hero = { backgroundColor: DARK, padding: '32px', backgroundImage: `linear-gradient(135deg, ${DARK} 0%, #1e3a5f 60%, #312e81 100%)`, borderBottom: `3px solid ${ACCENT}` }
const logo = { display: 'block', margin: '0 0 18px', width: '160px', height: 'auto' as const, maxWidth: '160px' }
const brandMark = { color: '#60a5fa', fontSize: '10px', letterSpacing: '3px', fontWeight: 700, margin: '0 0 10px', textTransform: 'uppercase' as const }
const h1 = { color: '#ffffff', fontSize: '24px', fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.01em' }
const lead = { color: '#e2e8f0', fontSize: '14px', margin: 0, lineHeight: 1.5 }
const body = { padding: '28px 32px 8px', backgroundColor: '#ffffff' }
const row = { margin: '0 0 18px' }
const rowLabel = { color: '#475569', fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', fontWeight: 600, margin: '0 0 4px' }
const rowValue = { color: DARK, fontSize: '14px', lineHeight: 1.5, margin: 0, whiteSpace: 'pre-wrap' as const, wordBreak: 'break-word' as const }
const hr = { borderColor: '#e2e8f0', borderWidth: '0 0 1px 0', margin: '20px 32px' }
const footer = { color: '#334155', fontSize: '12px', padding: '0 32px 32px', margin: 0, lineHeight: 1.6 }
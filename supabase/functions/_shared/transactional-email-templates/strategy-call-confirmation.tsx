import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Img, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'The North'
const ACCENT = '#3b82f6'
const DARK = '#0b1220'
const LOGO_URL = 'https://kyywxwymlhztmbhnmjva.supabase.co/storage/v1/object/public/email-assets/logo-horizontal-light.png'

const responsiveCss = `
  @media only screen and (max-width: 480px) {
    .tn-container { width: 100% !important; max-width: 100% !important; }
    .tn-hero { padding: 32px 24px !important; }
    .tn-card { padding: 24px 24px 4px !important; }
    .tn-h1 { font-size: 24px !important; line-height: 1.25 !important; }
    .tn-lead { font-size: 14px !important; }
    .tn-slot { margin: 20px 24px 0 !important; padding: 14px 16px !important; }
    .tn-hr { margin: 20px 24px !important; }
    .tn-footer { padding: 0 24px 28px !important; }
    .tn-logo { width: 140px !important; height: auto !important; }
  }
  @media (prefers-color-scheme: dark) {
    body, .tn-bg { background-color: #0b1220 !important; }
    .tn-card-bg { background-color: #0f172a !important; }
    .tn-item { color: #cbd5e1 !important; }
    .tn-card-title { color: #e2e8f0 !important; }
    .tn-footer-text { color: #94a3b8 !important; }
    .tn-slot-bg { background-color: #0f172a !important; }
    .tn-slot-value { color: #f8fafc !important; }
  }
`

interface Props {
  name?: string
  slot?: string
}

const StrategyCallConfirmation = ({ name, slot }: Props) => (
  <Html lang="en" dir="ltr">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <style>{responsiveCss}</style>
    </Head>
    <Preview>Strategy call request received — {SITE_NAME}</Preview>
    <Body style={main} className="tn-bg">
      <Container style={container} className="tn-container">
        <Section style={hero} className="tn-hero">
          <Img src={LOGO_URL} alt={SITE_NAME} width={160} height={43} style={logo} className="tn-logo" />
          <Text style={brandMark}>STRATEGY CALL</Text>
          <Heading style={h1} className="tn-h1">
            {name ? `You're booked in, ${name}.` : `You're booked in.`}
          </Heading>
          <Text style={lead} className="tn-lead">
            Your strategy call request has been received. We'll confirm the time and send a calendar invite within one business day.
          </Text>
        </Section>

        {slot && (
          <Section style={slotBox} className="tn-slot tn-slot-bg">
            <Text style={slotLabel}>Requested window</Text>
            <Text style={slotValue} className="tn-slot-value">{slot}</Text>
          </Section>
        )}

        <Section style={card} className="tn-card">
          <Text style={cardTitle} className="tn-card-title">What to expect</Text>
          <Text style={item} className="tn-item"><span style={bullet}>—</span> A focused 30-minute conversation. No pitch.</Text>
          <Text style={item} className="tn-item"><span style={bullet}>—</span> We'll map your current bottlenecks and surface the highest-leverage moves.</Text>
          <Text style={item} className="tn-item"><span style={bullet}>—</span> You'll leave with a clear point of view, whether or not we work together.</Text>
        </Section>

        <Hr style={hr} className="tn-hr" />
        <Text style={footer} className="tn-footer-text">{SITE_NAME} — Strategic operators for high-growth teams.</Text>
        <Text style={footerSmall} className="tn-footer">You requested a strategy call at thenorth.consulting.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: StrategyCallConfirmation,
  subject: 'Your strategy call request — The North',
  displayName: 'Strategy call confirmation',
  previewData: { name: 'Alex', slot: 'Tomorrow — 10:00 AM' },
} satisfies TemplateEntry

const main = { backgroundColor: '#f1f5f9', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', margin: 0, padding: '24px 12px', WebkitFontSmoothing: 'antialiased' as const }
const container = { width: '100%', maxWidth: '560px', margin: '0 auto', padding: 0, backgroundColor: '#ffffff', borderRadius: '14px', overflow: 'hidden' as const, boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)' }
const hero = { backgroundColor: DARK, padding: '40px 32px', backgroundImage: `linear-gradient(135deg, ${DARK} 0%, #1e3a5f 60%, #312e81 100%)`, borderBottom: `3px solid ${ACCENT}` }
const logo = { display: 'block', margin: '0 0 24px', width: '160px', height: 'auto' as const, maxWidth: '160px' }
const brandMark = { color: ACCENT, fontSize: '11px', letterSpacing: '3px', fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase' as const }
const h1 = { color: '#ffffff', fontSize: '28px', fontWeight: 700, margin: '0 0 12px', lineHeight: 1.2, letterSpacing: '-0.02em' }
const lead = { color: '#cbd5e1', fontSize: '15px', lineHeight: 1.6, margin: 0 }
const slotBox = { margin: '28px 32px 0', padding: '18px 22px', backgroundColor: '#f8fafc', borderRadius: '10px', borderLeft: `3px solid ${ACCENT}` }
const slotLabel = { color: '#64748b', fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', fontWeight: 600, margin: '0 0 6px' }
const slotValue = { color: DARK, fontSize: '15px', fontWeight: 600, margin: 0 }
const card = { padding: '32px 32px 12px' }
const cardTitle = { color: DARK, fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '2px', margin: '0 0 18px' }
const item = { color: '#334155', fontSize: '14px', lineHeight: 1.7, margin: '0 0 12px' }
const bullet = { color: ACCENT, fontWeight: 700, marginRight: '10px' }
const hr = { borderColor: '#e2e8f0', borderWidth: '0 0 1px 0', margin: '28px 32px' }
const footer = { color: '#475569', fontSize: '12px', textAlign: 'center' as const, padding: '0 32px', margin: '0 0 6px', lineHeight: 1.6 }
const footerSmall = { color: '#94a3b8', fontSize: '11px', textAlign: 'center' as const, padding: '0 32px 32px', margin: 0, lineHeight: 1.6 }
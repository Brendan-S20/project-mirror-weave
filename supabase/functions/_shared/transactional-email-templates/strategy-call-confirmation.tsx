import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'The North'
const ACCENT = '#3b82f6'
const DARK = '#0b1220'

interface Props {
  name?: string
  slot?: string
}

const StrategyCallConfirmation = ({ name, slot }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Strategy call request received — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={hero}>
          <Text style={brandMark}>THE NORTH</Text>
          <Heading style={h1}>
            {name ? `You're booked in, ${name}.` : `You're booked in.`}
          </Heading>
          <Text style={lead}>
            Your strategy call request has been received. We'll confirm the time and send a calendar invite within one business day.
          </Text>
        </Section>

        {slot && (
          <Section style={slotBox}>
            <Text style={slotLabel}>Requested window</Text>
            <Text style={slotValue}>{slot}</Text>
          </Section>
        )}

        <Section style={card}>
          <Text style={cardTitle}>What to expect</Text>
          <Text style={item}>A focused 30-minute conversation. No pitch.</Text>
          <Text style={item}>We'll map your current bottlenecks and surface the highest-leverage moves.</Text>
          <Text style={item}>You'll leave with a clear point of view, whether or not we work together.</Text>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>{SITE_NAME} — Strategic operators for high-growth teams.</Text>
        <Text style={footerSmall}>You requested a strategy call at thenorth.consulting.</Text>
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

const main = { backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '560px', margin: '0 auto', padding: '0' }
const hero = { backgroundColor: DARK, padding: '40px 32px', borderRadius: '0 0 12px 12px', backgroundImage: 'linear-gradient(135deg, #0b1220 0%, #1e3a5f 100%)' }
const brandMark = { color: ACCENT, fontSize: '11px', letterSpacing: '3px', fontWeight: 700, margin: '0 0 16px' }
const h1 = { color: '#ffffff', fontSize: '28px', fontWeight: 700, margin: '0 0 12px', lineHeight: 1.2 }
const lead = { color: '#cbd5e1', fontSize: '15px', lineHeight: 1.6, margin: 0 }
const slotBox = { margin: '24px 32px 0', padding: '16px 20px', backgroundColor: '#f1f5f9', borderRadius: '8px', borderLeft: `3px solid ${ACCENT}` }
const slotLabel = { color: '#64748b', fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', fontWeight: 600, margin: '0 0 4px' }
const slotValue = { color: DARK, fontSize: '15px', fontWeight: 600, margin: 0 }
const card = { padding: '28px 32px 8px' }
const cardTitle = { color: DARK, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px', margin: '0 0 16px' }
const item = { color: '#334155', fontSize: '14px', lineHeight: 1.7, margin: '0 0 10px' }
const hr = { borderColor: '#e2e8f0', margin: '24px 32px' }
const footer = { color: '#475569', fontSize: '12px', textAlign: 'center' as const, padding: '0 32px', margin: '0 0 6px' }
const footerSmall = { color: '#94a3b8', fontSize: '11px', textAlign: 'center' as const, padding: '0 32px 32px', margin: 0 }
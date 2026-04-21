import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'The North'
const ACCENT = '#10b981'
const DARK = '#0b1220'

interface Props {
  name?: string
}

const ProjectIntakeConfirmation = ({ name }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your project request has been received — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={hero}>
          <Text style={brandMark}>THE NORTH</Text>
          <Heading style={h1}>
            {name ? `Thanks, ${name}.` : 'Thanks for reaching out.'}
          </Heading>
          <Text style={lead}>
            Your project request has been received. A senior strategist will review the details and follow up within one business day.
          </Text>
        </Section>

        <Section style={card}>
          <Text style={cardTitle}>What happens next</Text>
          <Text style={item}><span style={dot}>1.</span> We review your project scope and goals.</Text>
          <Text style={item}><span style={dot}>2.</span> We reply with a tailored response and recommended next steps.</Text>
          <Text style={item}><span style={dot}>3.</span> If aligned, we book a 30-minute scoping call.</Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          {SITE_NAME} — Growth infrastructure, automation, creative & technology services.
        </Text>
        <Text style={footerSmall}>
          You're receiving this because you submitted a project request at thenorth.consulting.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ProjectIntakeConfirmation,
  subject: 'Your project request — The North',
  displayName: 'Project intake confirmation',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '560px', margin: '0 auto', padding: '0' }
const hero = { backgroundColor: DARK, padding: '40px 32px', borderRadius: '0 0 12px 12px', backgroundImage: 'linear-gradient(135deg, #0b1220 0%, #0f2940 100%)' }
const brandMark = { color: ACCENT, fontSize: '11px', letterSpacing: '3px', fontWeight: 700, margin: '0 0 16px' }
const h1 = { color: '#ffffff', fontSize: '28px', fontWeight: 700, margin: '0 0 12px', lineHeight: 1.2 }
const lead = { color: '#cbd5e1', fontSize: '15px', lineHeight: 1.6, margin: 0 }
const card = { padding: '28px 32px 8px' }
const cardTitle = { color: DARK, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px', margin: '0 0 16px' }
const item = { color: '#334155', fontSize: '14px', lineHeight: 1.7, margin: '0 0 10px' }
const dot = { color: ACCENT, fontWeight: 700, marginRight: '8px' }
const hr = { borderColor: '#e2e8f0', margin: '24px 32px' }
const footer = { color: '#475569', fontSize: '12px', textAlign: 'center' as const, padding: '0 32px', margin: '0 0 6px' }
const footerSmall = { color: '#94a3b8', fontSize: '11px', textAlign: 'center' as const, padding: '0 32px 32px', margin: 0 }
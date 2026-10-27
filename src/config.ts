// One place for the links and contact details used across the site.
// Anything marked TODO must be filled in before the site goes live on leadschilly.com.

export const SITE = {
  name: 'Leadschilly',
  legalName: 'Leadschilly Technologies Pvt. Ltd.',
  url: 'https://leadschilly.com',
  tagline: 'The AI sales team for real estate firms',
  description:
    'Leadschilly answers every property lead on WhatsApp in seconds, qualifies buyers and books site visits for brokers, channel partners and developers.',
  address: 'WorkFlo, Ranka Junction, Vijinapura Village, KR Puram Hobli, Bengaluru 560016',
  addressParts: {
    streetAddress: 'WorkFlo, Ranka Junction, Vijinapura Village, KR Puram Hobli',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560016',
    addressCountry: 'IN',
  },
  cin: 'U62011KA2024PTC196250',
  gstin: '29AAGCL0812J1ZI',
  email: 'admin@leadschilly.com',
  whatsappDisplay: '080 6217 8859',
  phoneIntl: '+91-80-6217-8859',
  sameAs: [
    'https://www.linkedin.com/company/leadschilly-com',
    'https://www.facebook.com/leadschilly/',
    'https://x.com/leadschilly',
  ],
}

// Google Analytics 4 Measurement ID (starts with G-). Analytics stays off while this is empty.
// Stream "leadschilly.com - GA4" in property 340446040 (sent by Deepanshu, 27 Oct 2026).
export const GA_ID = 'G-DS81JJZWY7'

// Is our own WhatsApp number (080 6217 8859) answered by the Leadschilly AI?
// false (27 Oct 2026): the number is still on the WhatsApp Business phone app and a person replies, so the site
// must not promise an AI reply. Set to true the day the number is connected in my.leadschilly.com with the AI on.
export const AI_ON_OUR_NUMBER = false

export const LINKS = {
  whatsappHi: 'https://wa.me/918062178859?text=Hi',
  whatsapp: 'https://wa.me/918062178859',
  login: 'https://my.leadschilly.com',
  // Free 30-day pilot (decided 25 Oct 2026): sales-led, so it opens a WhatsApp chat with our own AI, not a sign-up.
  pilot: 'https://wa.me/918062178859?text=' + encodeURIComponent("Hi, I'd like the free 30-day pilot"),
  // TODO: replace with Leadschilly's own public booking page from the app (Calendar → booking link, /b/<link>).
  demo: '/#demo',
}

export const NAV = [
  { href: '/#how', label: 'How it works' },
  { href: '/#discipline', label: 'For owners' },
  { href: '/#who', label: "Who it's for" },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/blog/', label: 'Blog' },
]

export const LEGAL = [
  { href: '/terms/', label: 'Terms (India)' },
  // { href: '/terms-international/', label: 'Terms (International)' }, // on hold until the LLC is confirmed
  { href: '/privacy-policy/', label: 'Privacy policy' },
  { href: '/refund-policy/', label: 'Refund policy' },
  { href: '/data-protection/', label: 'Data protection (DPDP Act, India)' },
  { href: '/gdpr/', label: 'GDPR (EU users)' },
]

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
  email: 'admin@leadschilly.com',
  whatsappDisplay: '080 6217 8859',
  phoneIntl: '+91-80-6217-8859',
  sameAs: [
    'https://www.linkedin.com/company/leadschilly-com',
    'https://www.facebook.com/leadschilly/',
    'https://x.com/leadschilly',
  ],
}

export const LINKS = {
  whatsappHi: 'https://wa.me/918062178859?text=Hi',
  whatsapp: 'https://wa.me/918062178859',
  login: 'https://my.leadschilly.com',
  // TODO: the free-trial / free-pilot decision is open. Points to the app sign-in until then.
  trial: 'https://my.leadschilly.com',
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
  { href: '/terms-international/', label: 'Terms (International)' },
  { href: '/privacy-policy/', label: 'Privacy policy' },
  { href: '/refund-policy/', label: 'Refund policy' },
  { href: '/data-protection/', label: 'Data protection (DPDP Act, India)' },
  { href: '/gdpr/', label: 'GDPR (EU users)' },
]

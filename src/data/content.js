export const NAV_LINKS = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'demo', label: 'Contact' },
]

export const BRAND = {
  name: 'Resona',
  tagline: 'AI voice agents for real conversations',
  email: 'hello@resona.ai',
  phone: '+91 80 4718 2200',
  address: 'Indiranagar, Bengaluru 560038',
}

export const FEATURES = [
  {
    icon: 'bolt',
    title: 'Sub-second responses',
    description:
      'Streaming speech-to-text, LLM, and text-to-speech run as one pipeline so replies land before the caller pauses.',
  },
  {
    icon: 'globe',
    title: 'Mid-call language switching',
    description:
      'The agent detects language shifts and replies in kind — without dropping context or asking the caller to repeat.',
  },
  {
    icon: 'phone',
    title: 'Natural barge-in',
    description:
      'Callers can interrupt any time. The agent stops, listens, and picks up the thread without missing a beat.',
  },
  {
    icon: 'shield',
    title: 'Enterprise security',
    description:
      'SOC 2 Type II, DPDP-ready, and region-pinned data residency for regulated workloads and audits.',
  },
  {
    icon: 'chart',
    title: 'Analytics & insights',
    description:
      'Every turn is scored for intent, sentiment, and containment — exported via webhook or API.',
  },
  {
    icon: 'users',
    title: 'Warm human handoff',
    description:
      'When confidence drops, the agent transfers to a live rep with the full transcript attached.',
  },
]

export const STEPS = [
  {
    title: 'Describe the agent',
    description:
      'Write the prompt in plain language, pick a voice, and attach your knowledge base. No training run required.',
  },
  {
    title: 'Test and tune',
    description:
      'Call your agent from the browser, replay transcripts, and adjust guardrails until it sounds right.',
  },
  {
    title: 'Deploy and monitor',
    description:
      'Point a phone number at it. Watch containment, latency, and handoff rates in real time.',
  },
]

export const PLANS = [
  {
    name: 'Starter',
    price: '₹7,500',
    cadence: '/month',
    blurb: 'For the first agent in production and the pilot that proves it works.',
    features: [
      '1,500 call minutes included',
      'Up to 3 concurrent calls',
      '5 voice agents',
      'Transcripts, recordings and webhooks',
      'Email support',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Growth',
    price: '₹22,500',
    cadence: '/month',
    highlighted: true,
    blurb: 'For teams running multiple agents across languages and channels.',
    features: [
      '10,000 call minutes included',
      'Up to 25 concurrent calls',
      'Unlimited voice agents',
      'Multi-language switching',
      'CRM and helpdesk integrations',
      'Priority support',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    blurb: 'For regulated workloads with compliance, SSO and dedicated support.',
    features: [
      'Volume-based minutes',
      'Unlimited concurrency',
      'SSO, SCIM and audit logs',
      'Region-pinned data residency',
      'Dedicated success manager',
      '99.95% uptime SLA',
    ],
    cta: 'Talk to sales',
  },
]
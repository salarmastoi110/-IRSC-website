export const opportunityTypes = ['All', 'Grant', 'Fellowship', 'Call for Papers', 'Award']

export const opportunities = [
  {
    id: 1,
    title: 'IRSC Collaborative Research Grants 2026',
    org: 'IRSC Secretariat',
    type: 'Grant',
    deadline: 'Mar 15, 2026',
    funding: 'Up to $150,000',
    location: 'Global',
    summary:
      'Seed funding for multi-institutional teams spanning at least two continental nodes. Open to all career stages.',
  },
  {
    id: 2,
    title: 'Early-Career Scholars Fellowship — Quantum & AI',
    org: 'KTH / IRSC Nordic Node',
    type: 'Fellowship',
    deadline: 'Feb 1, 2026',
    funding: '12-month stipend + lab access',
    location: 'Stockholm, Sweden',
    summary:
      'A residential fellowship for PhD+5 researchers working on fault-tolerant computing or machine learning theory.',
  },
  {
    id: 3,
    title: 'Call for Papers: Journal of Translational Community Science',
    org: 'IRSC Press',
    type: 'Call for Papers',
    deadline: 'Apr 30, 2026',
    funding: 'Open access fully waived for members',
    location: 'Remote',
    summary:
      'Vol. 9 special issue on low-cost diagnostics and community-owned surveillance systems welcomes empirical and methods papers.',
  },
  {
    id: 4,
    title: 'Climate Adaptation Fieldwork Support Fund',
    org: 'Universidad de Buenos Aires / IRSC',
    type: 'Grant',
    deadline: 'Rolling',
    funding: 'Up to $25,000',
    location: 'Latin America & Caribbean',
    summary:
      'Rapid-response support for hydrology, agriculture, and coastal-risk field campaigns affected by extreme events.',
  },
  {
    id: 5,
    title: 'Open Science Advocacy Award',
    org: 'IRSC Council',
    type: 'Award',
    deadline: 'May 20, 2026',
    funding: '$10,000 + conference headliner slot',
    location: 'Global',
    summary:
      'Recognising scholars dismantling paywalls, co-owning archives with local communities, or releasing notable open datasets.',
  },
  {
    id: 6,
    title: 'South–South Exchange Fellowship: Agritech',
    org: 'IRSC Asia-Pacific Node',
    type: 'Fellowship',
    deadline: 'Jan 25, 2026',
    funding: '6-month hosted placement',
    location: 'Kenya ↔ Vietnam ↔ India',
    summary:
      'Reciprocal placements for researchers transferring mesh-networking and soil-sensing practices between Global South hubs.',
  },
]

export const featuredOpportunities = opportunities.slice(0, 3)

export const events = [
  {
    id: 1,
    title: 'IRSC Global Assembly 2026',
    date: { month: 'JUN', day: '14' },
    fullDate: 'June 14–17, 2026',
    location: 'Kigali, Rwanda',
    format: 'In-person',
    type: 'Conference',
    badge: 'gold',
    summary:
      'Our flagship four-day convening: 2,400 delegates, 60 parallel sessions, and the announcement of the annual collaborative grant cohort.',
  },
  {
    id: 2,
    title: 'Methods Webinar: Reproducible Field Data Pipelines',
    date: { month: 'MAR', day: '06' },
    fullDate: 'March 6, 2026',
    location: 'Online',
    format: 'Webinar',
    type: 'Webinar',
    badge: 'teal',
    summary:
      'A hands-on clinic on versioning sensor data, pre-registration, and honest uncertainty reporting — led by the climate systems node.',
  },
  {
    id: 3,
    title: 'Doctoral Consortium: Writing Across Borders',
    date: { month: 'APR', day: '22' },
    fullDate: 'April 22–23, 2026',
    location: 'São Paulo, Brazil',
    format: 'Workshop',
    type: 'Workshop',
    badge: 'violet',
    summary:
      'Two days of structured feedback for early-stage scholars, pairing each participant with a cross-continental mentoring triad.',
  },
  {
    id: 4,
    title: 'Open Infrastructure Summit',
    date: { month: 'SEP', day: '09' },
    fullDate: 'September 9–10, 2026',
    location: 'Online',
    format: 'Hybrid',
    type: 'Summit',
    badge: 'rose',
    summary:
      'Engineering working groups converge on shared compute, archive federation, and the community data trust framework.',
  },
]

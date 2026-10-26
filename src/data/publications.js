export const publications = [
  {
    id: 1,
    title: 'Sub-$100 Motor Intent Decoding: A Multi-Clinic Field Trial',
    authors: 'Okafor, A., Raghunathan, P., et al.',
    journal: 'Nature Biomedical Engineering',
    year: 2026,
    type: 'Journal Article',
    badge: 'gold',
    doi: '10.1038/s41551-026-01142-x',
    citations: 87,
  },
  {
    id: 2,
    title: 'Enzymatic Closed-Loop Recycling of Multi-Mesh Polymer Packaging',
    authors: 'Watanabe, K., Silva, T., et al.',
    journal: 'Science',
    year: 2025,
    type: 'Journal Article',
    badge: 'teal',
    doi: '10.1126/science.adq.77412',
    citations: 412,
  },
  {
    id: 3,
    title: 'Projection of Andean Water Supply Under Moderate Forcing Scenarios',
    authors: 'Fernández, L.',
    journal: 'The Cryosphere',
    year: 2026,
    type: 'Journal Article',
    badge: 'violet',
    doi: '10.5194/tc-20-1189',
    citations: 58,
  },
  {
    id: 4,
    title: 'IRSC Global Epidemic Readiness: Sentinel Network Annual Report',
    authors: 'Al-Rashid, A., community working group',
    journal: 'IRSC Press',
    year: 2026,
    type: 'Community Report',
    badge: 'rose',
    doi: '10.5281/irsc.ger.2026',
    citations: 121,
  },
  {
    id: 5,
    title: 'Surface-Code Overhead in Cryogenic Shared Testbeds',
    authors: 'Bergström, E., Watanabe, K.',
    journal: 'Physical Review X',
    year: 2025,
    type: 'Journal Article',
    badge: 'gold',
    doi: '10.1103/PhysRevX.15.041033',
    citations: 203,
  },
  {
    id: 6,
    title: 'Pretraining Dravidian Foundation Models: Bounds and Benchmarks',
    authors: 'Raghunathan, P., Chao, M.-L.',
    journal: 'JMLR',
    year: 2026,
    type: 'Journal Article',
    badge: 'navy',
    doi: '10.5555/jmlr.27.0412',
    citations: 44,
  },
  {
    id: 7,
    title: 'Co-Custodianship Models for Open Maritime Heritage Archives',
    authors: 'Whitmore, D.',
    journal: 'Journal of Open Humanities Data',
    year: 2025,
    type: 'Review',
    badge: 'teal',
    doi: '10.5334/johd.26-118',
    citations: 31,
  },
  {
    id: 8,
    title: 'LoRa Mesh Economics for Smallholder Data Cooperatives',
    authors: 'Chao, M.-L., Fernández, L.',
    journal: 'IEEE Internet of Things Journal',
    year: 2026,
    type: 'Journal Article',
    badge: 'violet',
    doi: '10.1109/JIOT.2026.3301224',
    citations: 19,
  },
]

export const featuredPublications = publications.slice(0, 3)

export const journalAbbrev = (journal) =>
  journal
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase() && w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join('') || journal.slice(0, 2).toUpperCase()

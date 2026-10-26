export const domains = ['All', 'Life Sciences', 'Technology', 'Climate', 'Social Sciences', 'Physical Sciences']

export const research = [
  {
    id: 1,
    title: 'Neural Decoding for Low-Cost Assistive Interfaces',
    domain: 'Life Sciences',
    lead: 'Dr. Amara Okafor',
    partners: 14,
    progress: 72,
    status: 'Active',
    summary:
      'Developing sub-$100 EEG decoding pipelines that translate motor intent into prosthetic control for clinics without specialist infrastructure.',
  },
  {
    id: 2,
    title: 'Circular Polymer Networks for Single-Use Packaging',
    domain: 'Physical Sciences',
    lead: 'Prof. Kenji Watanabe',
    partners: 9,
    progress: 55,
    status: 'Active',
    summary:
      'Engineering enzymatically recyclable polymer meshes with mechanical parity to conventional plastics; pilot lines in three countries.',
  },
  {
    id: 3,
    title: 'Andean Glacial Hydrology Under RCP 4.5 Scenarios',
    domain: 'Climate',
    lead: 'Dr. Lucía Fernández',
    partners: 7,
    progress: 88,
    status: 'Active',
    summary:
      'Coupling satellite gravimetry with in-situ sensor webs to project water availability for 12 million downstream residents by 2060.',
  },
  {
    id: 4,
    title: 'Fault-Tolerant Lattice Qubits at Scale',
    domain: 'Physical Sciences',
    lead: 'Dr. Elias Bergström',
    partners: 5,
    progress: 34,
    status: 'Active',
    summary:
      'Comparing surface-code and color-code architectures on a shared cryogenic testbed hosted by the Nordic quantum node.',
  },
  {
    id: 5,
    title: 'Community Sentinel Surveillance for Emerging Pathogens',
    domain: 'Life Sciences',
    lead: 'Prof. Aisha Al-Rashid',
    partners: 22,
    progress: 61,
    status: 'Active',
    summary:
      'A wastewater-plus-clinic sentinel network spanning 40 cities, giving regional health authorities 9–14 day early-warning windows.',
  },
  {
    id: 6,
    title: 'Generalisation in Low-Resource Foundation Models',
    domain: 'Technology',
    lead: 'Dr. Priya Raghunathan',
    partners: 11,
    progress: 47,
    status: 'Active',
    summary:
      'Theoretical and empirical study of transfer limits when pretraining on under-represented Dravidian and Austronesian languages.',
  },
  {
    id: 7,
    title: 'Digital Heritage of the Swahili Coast',
    domain: 'Social Sciences',
    lead: 'Prof. Daniel Whitmore',
    partners: 8,
    progress: 92,
    status: 'Closing',
    summary:
      'Photogrammetric mapping of 300+ submerged and coastal sites, released as a permanent open-access archive with local co-custodianship.',
  },
  {
    id: 8,
    title: 'Smallholder IoT: Mesh Networks for Rural Farms',
    domain: 'Technology',
    lead: 'Dr. Mei-Ling Chao',
    partners: 13,
    progress: 68,
    status: 'Active',
    summary:
      'Solar-powered LoRa mesh nodes delivering soil and market data to 4,000 smallholder farms across Kenya and Vietnam.',
  },
  {
    id: 9,
    title: 'Offshore Wind Integration for Tropical Megacities',
    domain: 'Climate',
    lead: 'Dr. Tomás Silva',
    partners: 6,
    progress: 25,
    status: 'Active',
    summary:
      'Grid-stability modelling for floating wind fleets serving São Paulo and Rio coastal load centres.',
  },
]

export const featuredResearch = research.slice(0, 3)

import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'

const values = [
  {
    icon: '🤝',
    bg: 'var(--gold-100)',
    title: 'Radical Inclusivity',
    text: 'Affiliation and funding should never decide who gets to do science. We resource scholars wherever they work.',
  },
  {
    icon: '🔓',
    bg: 'var(--teal-100)',
    title: 'Open Science',
    text: 'Open access, open data, open peer review. Our research belongs to everyone who funded it — the public.',
  },
  {
    icon: '🧭',
    bg: 'var(--violet-100)',
    title: 'Integrity First',
    text: 'Registered reports, honest uncertainty, and reproducibility audits are baseline expectations, not bonuses.',
  },
  {
    icon: '🌍',
    bg: 'var(--rose-100)',
    title: 'Local Ownership',
    text: 'Fieldwork is co-designed with the communities it affects. Archives are co-custodied, not extracted.',
  },
]

const timeline = [
  {
    year: '2014',
    title: 'A kitchen-table pilot',
    text: 'Eleven researchers across Nigeria, Japan, and Argentina start sharing equipment time and preprints over email.',
  },
  {
    year: '2017',
    title: 'First continental node',
    text: 'The West Africa node formalises, running its first match-making workshop with 140 attendees.',
  },
  {
    year: '2020',
    title: 'IRSC Press launches',
    text: 'Three open-access journals debut with zero author-side fees, funded by institutional members.',
  },
  {
    year: '2023',
    title: 'Collaborative Grants Programme',
    text: 'The $2M annual seed-fund round opens; 61 multi-country teams funded in the first two cycles.',
  },
  {
    year: '2026',
    title: '4,800 members strong',
    text: 'Six continental nodes, 340 active projects, and the largest Global Assembly yet in Kigali.',
  },
]

const leadership = [
  { initials: 'AO', name: 'Dr. Amara Okafor', role: 'Council Chair', gold: true },
  { initials: 'KW', name: 'Prof. Kenji Watanabe', role: 'Research Director', gold: false },
  { initials: 'LF', name: 'Dr. Lucía Fernández', role: 'Head of Nodes', gold: false },
  { initials: 'AA', name: 'Prof. Aisha Al-Rashid', role: 'Publication Ethics Lead', gold: true },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About IRSC</h1>
          <p>
            From eleven friends sharing lab time to a 62-country research commons — here is how
            the community came to be, and what we refuse to compromise on.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Who We Are"
            title="A community, not a conference circuit"
            description="IRSC is a non-profit membership organisation governed by its scholars. Continental nodes elect council representatives, set funding priorities, and run the open-access press together."
          />
          <div className="grid grid--4">
            {values.map((v) => (
              <div key={v.title} className="card card--hover value-card reveal">
                <div className="value-card__icon" style={{ background: v.bg }}>
                  {v.icon}
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Journey"
            title="Twelve years of borderless science"
          />
          <div className="timeline">
            {timeline.map((t) => (
              <div key={t.year} className="timeline__item reveal">
                <span className="timeline__year">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Leadership"
            title="Elected by members, accountable to members"
            description="The eight-seat council rotates every three years. These are the current officers."
          />
          <div className="grid grid--4">
            {leadership.map((person) => (
              <div key={person.name} className="card card--hover text-center reveal">
                <span
                  className={`scholar-card__avatar${person.gold ? ' scholar-card__avatar--gold' : ''}`}
                  style={{ margin: '0 auto 16px' }}
                >
                  {person.initials}
                </span>
                <h3 style={{ fontSize: '1.02rem' }}>{person.name}</h3>
                <p className="scholar-card__role">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

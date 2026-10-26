import PublicationCard from '../components/PublicationCard.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { publications } from '../data/publications.js'

const journals = [
  { name: 'Journal of Translational Community Science', issn: 'ISSN 2700-1142', focus: 'Bridging field research and public health & engineering practice.' },
  { name: 'IRSC Quarterly Review', issn: 'ISSN 2700-1150', focus: 'Cross-disciplinary syntheses and registered reports.' },
  { name: 'Open Heritage Data', issn: 'ISSN 2700-116X', focus: 'Archaeology, archives, and co-custodied digital heritage.' },
]

export default function Publications() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Publications</h1>
          <p>
            Everything published through IRSC Press is open access, openly reviewed, and free to
            read from anywhere on earth.
          </p>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <div className="grid grid--3">
            {journals.map((j) => (
              <div key={j.name} className="card reveal">
                <span className="badge badge--gold">Journal</span>
                <h3 style={{ margin: '12px 0 6px', fontSize: '1.08rem' }}>{j.name}</h3>
                <p className="small text-muted" style={{ marginBottom: 8 }}>{j.issn}</p>
                <p className="small" style={{ color: 'var(--ink-600)' }}>{j.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid" style={{ gap: 22 }}>
            {publications.map((p) => (
              <PublicationCard key={p.id} publication={p} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

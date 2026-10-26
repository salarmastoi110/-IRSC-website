import { useState } from 'react'
import ResearchCard from '../components/ResearchCard.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { research, domains } from '../data/research.js'

export default function Research() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? research : research.filter((r) => r.domain === active)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Research Programs</h1>
          <p>
            Member-led projects currently recruiting collaborators, data partners, and reviewers.
            Filter by domain and find your way in.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filterbar">
            {domains.map((domain) => (
              <button
                key={domain}
                className={`chip${active === domain ? ' chip--active' : ''}`}
                onClick={() => setActive(domain)}
              >
                {domain}
              </button>
            ))}
          </div>

          <div className="grid grid--3">
            {filtered.map((project) => (
              <ResearchCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted">No projects in this domain yet — check back soon.</p>
          )}
        </div>
      </section>

      <Newsletter />
    </>
  )
}

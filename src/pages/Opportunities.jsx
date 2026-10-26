import { useState } from 'react'
import OpportunityCard from '../components/OpportunityCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { opportunities, opportunityTypes } from '../data/opportunities.js'

export default function Opportunities() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? opportunities : opportunities.filter((o) => o.type === active)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Opportunities</h1>
          <p>
            Grants, fellowships, awards, and calls for papers open to members right now.
            Deadlines are firm — start early, collaborate often.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filterbar">
            {opportunityTypes.map((type) => (
              <button
                key={type}
                className={`chip${active === type ? ' chip--active' : ''}`}
                onClick={() => setActive(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid--2">
            {filtered.map((o) => (
              <OpportunityCard key={o.id} opportunity={o} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted">No open opportunities of this type right now.</p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}

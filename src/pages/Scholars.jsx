import ScholarCard from '../components/ScholarCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { scholars } from '../data/scholars.js'

export default function Scholars() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Scholar Directory</h1>
          <p>
            A selection of active members across our six continental nodes. Every profile is
            open to collaboration enquiries through the contact form.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {scholars.map((scholar) => (
              <ScholarCard key={scholar.id} scholar={scholar} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

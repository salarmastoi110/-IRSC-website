import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="section--dark cta">
      <div className="container reveal">
        <h2>Ready to push the frontier, together?</h2>
        <p>
          Membership is open to researchers at every career stage — from first-year doctoral
          candidates to tenured professors. Bring a question; leave with collaborators.
        </p>
        <div className="cta__actions">
          <Link to="/contact" className="btn btn--primary">
            Apply for Membership
          </Link>
          <Link to="/opportunities" className="btn btn--ghost">
            Browse Open Opportunities
          </Link>
        </div>
      </div>
    </section>
  )
}

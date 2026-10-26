import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__eyebrow anim-fade-up">🌐 A global network of 4,800+ scholars</span>
          <h1 className="anim-fade-up-1">
            Where <em>research</em> crosses borders and ideas become impact.
          </h1>
          <p className="hero__sub anim-fade-up-2">
            The International Research Scholars Community connects academics, innovators, and
            institutions across 62 countries to collaborate on the challenges no discipline —
            or nation — can solve alone.
          </p>
          <div className="hero__actions anim-fade-up-3">
            <Link to="/contact" className="btn btn--primary">
              Become a Member
            </Link>
            <Link to="/research" className="btn btn--ghost">
              Explore Our Research
            </Link>
          </div>
          <div className="hero__proof anim-fade-up-3">
            <div className="hero__proof-item">
              <strong>340+</strong>
              <span>Active projects</span>
            </div>
            <div className="hero__proof-item">
              <strong>62</strong>
              <span>Member countries</span>
            </div>
            <div className="hero__proof-item">
              <strong>1.9k</strong>
              <span>Papers co-published</span>
            </div>
          </div>
        </div>

        <div className="hero__panel anim-fade-up-2">
          <div className="hero__orbit" aria-hidden="true" />
          <div className="hero__panel-card anim-float">
            <h3>What members gain</h3>
            <div className="hero__feature">
              <span className="hero__feature-dot">🔬</span>
              <div>
                <strong>Cross-border collaborations</strong>
                <span>Get matched with co-investigators through continental nodes</span>
              </div>
            </div>
            <div className="hero__feature">
              <span className="hero__feature-dot">📚</span>
              <div>
                <strong>Open-access publishing</strong>
                <span>Waived fees across IRSC Press journals and preprint servers</span>
              </div>
            </div>
            <div className="hero__feature">
              <span className="hero__feature-dot">💰</span>
              <div>
                <strong>Seed grants &amp; fellowships</strong>
                <span>$2.4M distributed to member-led teams last year</span>
              </div>
            </div>
            <div className="hero__feature">
              <span className="hero__feature-dot">🎓</span>
              <div>
                <strong>Mentorship at every stage</strong>
                <span>Doctoral consortia and early-career exchange placements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

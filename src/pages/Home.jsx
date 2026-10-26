import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatCard from '../components/StatCard.jsx'
import ScholarCard from '../components/ScholarCard.jsx'
import ResearchCard from '../components/ResearchCard.jsx'
import PublicationCard from '../components/PublicationCard.jsx'
import OpportunityCard from '../components/OpportunityCard.jsx'
import EventCard from '../components/EventCard.jsx'
import Newsletter from '../components/Newsletter.jsx'
import CTASection from '../components/CTASection.jsx'
import { featuredScholars } from '../data/scholars.js'
import { featuredResearch } from '../data/research.js'
import { featuredPublications } from '../data/publications.js'
import { featuredOpportunities, events } from '../data/opportunities.js'

const stats = [
  { icon: '🧑‍🎓', value: '4,800+', label: 'Active scholars' },
  { icon: '🌍', value: '62', label: 'Countries represented' },
  { icon: '🔬', value: '340+', label: 'Ongoing research projects' },
  { icon: '📄', value: '1,900+', label: 'Papers co-published' },
]

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Stats band overlapping the hero */}
      <div className="container stats-band">
        <div className="stats-band__inner reveal">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Mission"
            title="Science is a shared human enterprise"
            description="IRSC removes the geographic, financial, and disciplinary barriers that keep great research from happening — by funding collaboration directly, publishing openly, and mentoring relentlessly."
          />
          <div className="grid grid--3">
            <div className="card card--hover value-card reveal">
              <div className="value-card__icon">🤝</div>
              <h3>Borderless Collaboration</h3>
              <p>
                Six continental nodes match co-investigators by expertise and need, not by
                proximity. Your next collaborator is one introduction away.
              </p>
            </div>
            <div className="card card--hover value-card reveal">
              <div className="value-card__icon" style={{ background: 'var(--teal-100)' }}>🔓</div>
              <h3>Open by Default</h3>
              <p>
                Every member publication, dataset, and preprint is open access. Knowledge locked
                behind paywalls is knowledge wasted.
              </p>
            </div>
            <div className="card card--hover value-card reveal">
              <div className="value-card__icon" style={{ background: 'var(--violet-100)' }}>🌱</div>
              <h3>Next-Generation First</h3>
              <p>
                Half of our fellowship seats and conference stages are reserved for
                early-career researchers from under-represented institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured scholars */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Scholars"
            title="Meet the minds moving the needle"
            description="A snapshot of the community's principal investigators — every profile is a working relationship waiting to happen."
          />
          <div className="grid grid--3">
            {featuredScholars.slice(0, 3).map((scholar) => (
              <ScholarCard key={scholar.id} scholar={scholar} />
            ))}
          </div>
          <p className="text-center mt-4">
            <Link to="/scholars" className="btn btn--outline">
              View Full Directory →
            </Link>
          </p>
        </div>
      </section>

      {/* Latest research */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest Research"
            title="Projects in motion across every continent"
            description="Member-led programs currently recruiting partners, data, and fresh perspectives."
          />
          <div className="grid grid--3">
            {featuredResearch.map((project) => (
              <ResearchCard key={project.id} project={project} />
            ))}
          </div>
          <p className="text-center mt-4">
            <Link to="/research" className="btn btn--outline">
              Explore All Research →
            </Link>
          </p>
        </div>
      </section>

      {/* Publications + opportunities split */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid grid--2" style={{ gap: 44 }}>
            <div>
              <SectionHeading
                eyebrow="Publications"
                title="From the IRSC Press"
                description="The latest member-published work, all open access."
              />
              <div style={{ display: 'grid', gap: 20 }}>
                {featuredPublications.map((p) => (
                  <PublicationCard key={p.id} publication={p} />
                ))}
              </div>
              <p className="mt-4">
                <Link to="/publications" className="btn btn--outline btn--sm">
                  Browse Publications →
                </Link>
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="Opportunities"
                title="Open calls right now"
                description="Grants, fellowships and calls for papers currently accepting submissions."
              />
              <div style={{ display: 'grid', gap: 20 }}>
                {featuredOpportunities.map((o) => (
                  <OpportunityCard key={o.id} opportunity={o} />
                ))}
              </div>
              <p className="mt-4">
                <Link to="/opportunities" className="btn btn--outline btn--sm">
                  All Opportunities →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Where the community gathers next"
            description="Conferences, webinars and workshops — physical and virtual, always welcoming."
          />
          <div className="grid grid--2">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <p className="text-center mt-4">
            <Link to="/events" className="btn btn--outline">
              Full Events Calendar →
            </Link>
          </p>
        </div>
      </section>

      <Newsletter />
      <CTASection />
    </>
  )
}

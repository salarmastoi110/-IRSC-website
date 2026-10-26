import { Link } from 'react-router-dom'

const exploreLinks = [
  { to: '/about', label: 'About IRSC' },
  { to: '/research', label: 'Research Programs' },
  { to: '/scholars', label: 'Scholar Directory' },
  { to: '/publications', label: 'Publications' },
]

const engageLinks = [
  { to: '/opportunities', label: 'Grants & Fellowships' },
  { to: '/events', label: 'Events & Conferences' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/contact', label: 'Become a Member' },
]

const resourceLinks = [
  { to: '/publications', label: 'IRSC Press' },
  { to: '/research', label: 'Working Groups' },
  { to: '/about', label: 'Continental Nodes' },
  { to: '/events', label: 'Open Science Policy' },
]

const socials = [
  { label: 'X', title: 'X (Twitter)', icon: '𝕏' },
  { label: 'LinkedIn', title: 'LinkedIn', icon: 'in' },
  { label: 'GitHub', title: 'GitHub', icon: '⌥' },
  { label: 'YouTube', title: 'YouTube', icon: '▶' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <img src="/logo.svg" alt="IRSC logo" />
              <span>
                <span className="brand__name">IRSC</span>
                <br />
                <span className="brand__tag">Scholars Community</span>
              </span>
            </div>
            <p className="footer__desc">
              The International Research Scholars Community is a non-profit network advancing
              open, cross-border collaboration for the public good.
            </p>
            <div className="footer__social">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.title} title={s.title} onClick={(e) => e.preventDefault()}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get Involved</h4>
            <ul>
              {engageLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} International Research Scholars Community. All rights reserved.</span>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a> · <a href="#" onClick={(e) => e.preventDefault()}>Terms</a> · <a href="#" onClick={(e) => e.preventDefault()}>Code of Conduct</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

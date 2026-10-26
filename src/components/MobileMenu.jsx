import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/scholars', label: 'Scholars' },
  { to: '/publications', label: 'Publications' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

export default function MobileMenu({ onClose }) {
  return (
    <div className="mobile-menu" role="dialog" aria-label="Site menu">
      <div className="mobile-menu__top">
        <Link to="/" className="brand" onClick={onClose}>
          <img src="/logo.svg" alt="IRSC logo" />
          <span className="brand__name">IRSC</span>
        </Link>
        <button className="mobile-menu__close" aria-label="Close menu" onClick={onClose}>
          ×
        </button>
      </div>

      <nav aria-label="Mobile">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/contact" className="btn btn--primary" onClick={onClose}>
        Join the Community
      </Link>
    </div>
  )
}

import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import MobileMenu from './MobileMenu.jsx'

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="brand" aria-label="IRSC home">
            <img src="/logo.svg" alt="IRSC logo" />
            <span>
              <span className="brand__name">IRSC</span>
              <br />
              <span className="brand__tag">Scholars Community</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__cta">
            <Link to="/contact" className="btn btn--primary btn--sm">
              Join the Community
            </Link>
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  )
}

import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

/**
 * Site shell: sticky navbar, routed page content, footer.
 * Also handles scroll-to-top on route change and re-arming
 * the scroll-reveal IntersectionObserver for new page content
 * (including cards mounted later by client-side filtering).
 */
export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })

    // Reveal-on-scroll observer shared for the whole session
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    const observeReveals = (root) =>
      root.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))

    // Wait one frame so the page DOM is committed
    const raf = requestAnimationFrame(() => observeReveals(document))

    // Catch .reveal elements mounted later (e.g. filtered card lists)
    const mutation = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.classList.contains('reveal')) observer.observe(node)
          observeReveals(node)
        }),
      )
    })
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      mutation.disconnect()
      observer.disconnect()
    }
  }, [pathname])

  return (
    <>
      <Navbar />
      <main className="page-enter" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

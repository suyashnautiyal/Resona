// src/components/Navbar.jsx
import { useEffect, useState } from 'react'
import { BRAND, NAV_LINKS } from '../data/content'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Container } from './Container'

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setMenuOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-indigo-600">
            {BRAND.name}
          </a>

          {/* Right side — links + CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop links */}
            <ul className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`font-medium transition-colors ${
                      activeId === link.id
                        ? 'text-indigo-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href="#demo"
              className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 md:inline-block"
            >
              Get started
            </a>

            {/* Mobile menu toggle */}
            <button
              className="grid size-10 place-items-center rounded-lg border border-slate-200 md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-slate-200 pb-4 md:hidden"
          >
            <ul className="flex flex-col gap-2 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-2 py-3 font-medium text-slate-600 hover:bg-slate-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-lg bg-indigo-600 px-4 py-3 text-center font-semibold text-white hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
        )}
      </Container>
    </header>
  )
}
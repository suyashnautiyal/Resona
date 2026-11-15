import { BRAND, NAV_LINKS } from '../data/content'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <p className="text-xl font-bold text-indigo-600">{BRAND.name}</p>
            <p className="mt-2 text-sm text-slate-600">{BRAND.tagline}</p>
          </div>

          {/* Explore column */}
          <div>
            <p className="text-sm font-semibold text-slate-900">Explore</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-slate-600 hover:text-slate-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-slate-900"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                  className="hover:text-slate-900"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>{BRAND.address}</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
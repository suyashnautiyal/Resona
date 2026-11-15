import { Container } from './Container'
import { CallCard } from './CallCard'

export function Hero() {
  return (
    <section id="hero" className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column — copy + CTAs */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              AI voice agents for{' '}
              <span className="text-indigo-600">real conversations</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Deploy a voice agent that answers in under a second, switches
              languages mid-call, and hands off to a human when it matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#demo"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Get started
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Right column — live-call card */}
          <CallCard />
        </div>
      </Container>
    </section>
  )
}
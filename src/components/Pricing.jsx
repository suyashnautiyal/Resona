import { useState } from 'react'
import { PLANS } from '../data/content'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Start with a pilot, scale when you're ready."
        />

        {/* Monthly / Yearly toggle */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            onClick={() => setYearly((y) => !y)}
            className="flex items-center gap-1 rounded-full border border-slate-300 bg-white p-1"
          >
            <span
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !yearly
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </span>
            <span
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                yearly
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly (2 months free)
            </span>
          </button>
        </div>

        {/* Plan cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => {
            // "₹7,500" → 7500 → 75000 when yearly
            // "Custom" → NaN → skip derivation
            const numericPrice = parseFloat(plan.price.replace(/[^0-9.]/g, ''))
            const displayPrice =
              yearly && !isNaN(numericPrice)
                ? `₹${(numericPrice * 10).toLocaleString('en-IN')}`
                : plan.price

            return (
              <div
                key={plan.name}
                className={`rounded-2xl border bg-white p-8 ${
                  plan.highlighted
                    ? 'border-indigo-600 shadow-lg lg:-translate-y-2'
                    : 'border-slate-200'
                }`}
              >
                {plan.highlighted && (
                  <span className="mb-4 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{plan.blurb}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-slate-900">
                    {displayPrice}
                  </span>
                  {plan.cadence && (
                    <span className="text-sm text-slate-500">
                      {yearly && !isNaN(numericPrice) ? '/year' : plan.cadence}
                    </span>
                  )}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-0.5 shrink-0 text-indigo-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-8 w-full rounded-lg py-3 font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
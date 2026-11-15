import { STEPS } from '../data/content'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Live in three steps"
          description="Resona turns a plain-language prompt into a production voice agent that handles real customer calls — no ML team, no infrastructure, no code required."
        />

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="grid size-10 place-items-center rounded-full bg-indigo-600 font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
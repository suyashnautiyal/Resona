import { FEATURES } from '../data/content'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { Icon } from './Icon'

export function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to ship a voice agent"
          description="From sub-second latency to mid-call language switching, Resona handles the hard parts."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <Icon name={feature.icon} className="size-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
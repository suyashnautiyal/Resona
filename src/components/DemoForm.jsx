import { useState } from 'react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { Field } from './Field'
import { validateDemoForm } from '../lib/validateDemoForm'

export function DemoForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' })
  const [errors, setErrors] = useState({})
  const [pending, setPending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateDemoForm(formData)
    setErrors(validationErrors)

    // Only "send" if there are zero errors
    if (Object.keys(validationErrors).length > 0) return

    setPending(true)

    // Simulate a network request
    setTimeout(() => {
      setPending(false)
      setSubmitted(true)
    }, 700)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear the error for this field the moment the user starts fixing it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // Success screen — replaces the entire form
  if (submitted) {
    return (
      <section id="demo" className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-green-100">
              <svg
                className="size-8 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Thanks, {formData.name}!
            </h2>
            <p className="mt-4 text-slate-600">
              We've received your request and will reach out to{' '}
              <strong className="text-slate-900">{formData.email}</strong>{' '}
              within one business day.
            </p>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="demo" className="bg-slate-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="See Resona in action"
          description="Book a demo and we'll show you how a voice agent can handle your calls."
        />

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-8 max-w-lg space-y-6"
        >
          <Field
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Field
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? 'Sending…' : 'Request demo'}
          </button>
        </form>
      </Container>
    </section>
  )
}
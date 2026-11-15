// src/App.jsx — FINAL
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { DemoForm } from './components/DemoForm'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      {/* Skip link: visible only when focused via Tab */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4 focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <DemoForm />
      </main>

      <Footer />
    </>
  )
}
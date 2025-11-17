import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Agents from './components/Agents'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <Navbar />

      <main>
        <Hero />

        <Section
          id="about"
          eyebrow="Symbiosis"
          title="Not AI replacing leaders. Leaders commanding AI."
          copy="We combine machine precision with executive judgment to deliver strategic clarity. Systems that learn continuously. Interfaces that feel effortless. Outcomes that compound."
          color="gold"
        />

        <Section
          id="agents"
          eyebrow="Capabilities"
          title="A constellation of agents — orchestrated for impact"
          copy="From intelligence gathering to synthesis and recommendation, our agents collaborate like a world-class team. Every step is observable, governable, and aligned to your objectives."
          color="blue"
        >
          <Agents />
        </Section>

        <Section
          id="contact"
          eyebrow="Engage"
          title="Command AI. Don’t compete with it."
          copy="Take a private tour designed for C‑suite leaders. Explore how symbiotic intelligence elevates your strategy, operations, and speed of execution."
          color="gold"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:hello@aiaugmented.io" className="inline-flex items-center justify-center rounded-full bg-white text-black font-medium px-6 py-3">
              Request a Private Demo
            </a>
            <a href="#home" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white px-6 py-3">
              Back to Top
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Section({ id, eyebrow, title, copy, color = 'blue', children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px', once: false })

  const palette = {
    blue: {
      glow: 'from-blue-500/30 to-cyan-300/30',
      accent: 'text-blue-300',
      border: 'border-blue-300/20',
    },
    gold: {
      glow: 'from-amber-300/30 to-yellow-500/30',
      accent: 'text-amber-300',
      border: 'border-amber-300/20',
    },
  }[color]

  return (
    <section id={id} ref={ref} className="relative py-28 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 30 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-5xl px-4 text-center"
      >
        <span className={`uppercase tracking-widest text-xs ${palette.accent}`}>{eyebrow}</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-white">{title}</h2>
        <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">{copy}</p>
        {children && <div className="mt-10">{children}</div>}
      </motion.div>

      <div className={`pointer-events-none absolute inset-x-0 -z-0 top-1/2 -translate-y-1/2 h-40 blur-3xl bg-gradient-to-r ${palette.glow}`} />
    </section>
  )
}

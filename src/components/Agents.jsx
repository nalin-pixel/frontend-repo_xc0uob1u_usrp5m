import { motion } from 'framer-motion'
import { Brain, LineChart, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Strategy Intelligence',
    copy:
      'Multi-agent orchestration converts ambiguity into action. Precision synthesis across markets, competitors, and operations.',
  },
  {
    icon: LineChart,
    title: 'Execution Clarity',
    copy:
      'Continuous monitoring surfaces inflection points before they matter. Decisions stay a step ahead with confidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Governed by Design',
    copy:
      'Human-in-the-loop and policy layers ensure your judgment leads. AI scales, leaders command.',
  },
]

export default function Agents() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-left"
        >
          <card.icon className="w-8 h-8 text-white" />
          <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
          <p className="mt-2 text-white/80 text-sm leading-relaxed">{card.copy}</p>
        </motion.div>
      ))}
    </div>
  )
}

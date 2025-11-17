import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.1, 0.6])
  const titleY = useTransform(scrollY, [0, 400], [0, -40])
  const subtitleY = useTransform(scrollY, [0, 400], [0, -20])
  const brainsGap = useTransform(scrollY, [0, 600, 1200], [0, 40, 0])
  const fuseOpacity = useTransform(scrollY, [0, 600, 1200], [0, 0.2, 1])

  return (
    <section id="home" className="relative min-h-[110vh] w-full overflow-hidden bg-[#05060a] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05060a] via-[#05060a]/30 to-[#05060a]" style={{ opacity: 1 }} />
      <motion.div className="absolute inset-0 bg-black/40" style={{ opacity: overlayOpacity }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-40 pb-28">
        <div className="flex flex-col items-center text-center">
          <motion.h1 style={{ y: titleY }} className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            AI Precision + Human Wisdom
          </motion.h1>
          <motion.p style={{ y: subtitleY }} className="mt-4 text-lg md:text-2xl text-white/80 max-w-2xl">
            Superior Strategic Intelligence for Leaders
          </motion.p>

          <motion.div className="relative mt-12 grid grid-cols-2 gap-6" style={{ columnGap: brainsGap }}>
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-500 to-cyan-300 shadow-[0_0_120px_-20px_rgba(59,130,246,0.6)]" />
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 shadow-[0_0_120px_-20px_rgba(251,191,36,0.6)]" />
            <motion.div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-blue-500/40 to-amber-300/40 blur-2xl" style={{ opacity: fuseOpacity }} />
          </motion.div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <a href="#agents" className="inline-flex items-center justify-center rounded-full bg-white text-black font-medium px-6 py-3">
              Explore Agents
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white px-6 py-3">
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

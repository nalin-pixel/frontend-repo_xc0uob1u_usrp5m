import { useEffect, useState } from 'react'
import { Sun, Moon, Menu } from 'lucide-react'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Initialize from prefers-color-scheme or saved setting
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = saved ? saved === 'dark' : prefersDark
    setIsDark(shouldDark)
    document.documentElement.classList.toggle('dark', shouldDark)
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="inline-flex items-center justify-center rounded-full backdrop-blur bg-white/10 dark:bg-white/5 border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 w-10 h-10 transition-colors">
      {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-blue-500" />}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (href, label) => (
    <a href={href} className="text-sm md:text-base text-white/80 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 dark:bg-black/30 backdrop-blur-xl px-4 md:px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-amber-300 shadow-lg" />
            <span className="text-white font-semibold tracking-wide">AI Augmented</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItem('#home', 'Home')}
            {navItem('#about', 'About')}
            {navItem('#agents', 'Agents')}
            {navItem('#contact', 'Contact')}
            <ThemeToggle />
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/10 text-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-white/10 dark:bg-black/40 backdrop-blur-xl px-4 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/80">Navigate</span>
              <ThemeToggle />
            </div>
            <div className="grid gap-3">
              {navItem('#home', 'Home')}
              {navItem('#about', 'About')}
              {navItem('#agents', 'Agents')}
              {navItem('#contact', 'Contact')}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

import { useEffect, useState } from 'react'
import { Github, Linkedin, Moon, Sun, Menu, X } from 'lucide-react'
import { profile } from '../data/resume'
import { useTheme } from '../hooks/useTheme'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#publication', label: 'Publication' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-canvas/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display text-[15px] tracking-tight text-ink hover:text-signal transition-colors"
        >
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink-dim">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="hover:text-ink transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-dim hover:text-ink transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-dim hover:text-ink transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-ink-dim hover:text-ink hover:border-ink-dim transition-colors"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-canvas border-t border-line px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="w-full text-left py-3 text-ink-dim hover:text-ink transition-colors border-b border-line/60"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 pt-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-ink-dim">
              <Github size={19} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-ink-dim">
              <Linkedin size={19} />
            </a>
            <button onClick={toggle} className="text-ink-dim flex items-center gap-2 text-sm">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

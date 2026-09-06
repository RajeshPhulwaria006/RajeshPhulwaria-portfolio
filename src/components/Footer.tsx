import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-display text-ink text-sm">{profile.name}</p>
          <p className="text-ink-faint text-xs mt-1">
            AI/ML · Deep Learning · Transformers · LLMs
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-dim hover:text-ink transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-dim hover:text-ink transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>

        <p className="text-ink-faint text-xs">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}

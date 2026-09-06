import { useState } from 'react'
import { Github, Linkedin, Mail, Download, Check, Copy } from 'lucide-react'
import { profile } from '../data/resume'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — fail silently
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-4xl sm:text-5xl text-ink text-balance max-w-xl">
          Let's build and understand AI.
        </h2>
        <p className="mt-5 text-ink-dim max-w-md">
          Interested in AI research, machine learning systems, LLMs, and research-oriented engineering.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-sm text-ink hover:border-ink-dim transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-sm text-ink hover:border-ink-dim transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-sm text-ink hover:border-ink-dim transition-colors"
          >
            {copied ? <Check size={16} className="text-signal" /> : <Mail size={16} />}
            {copied ? 'Copied' : profile.email}
            {!copied && <Copy size={13} className="text-ink-faint" />}
          </button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-canvas text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download resume
          </a>
        </div>
      </div>
    </section>
  )
}

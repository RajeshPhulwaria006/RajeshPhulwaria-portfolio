import { useState } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'
import { publication } from '../data/resume'
import PipelineDiagram from './PipelineDiagram'

const GRADIENT_STEPS = ['Forward Pass', 'Loss', 'Backpropagation', 'Gradient Flow', 'Parameter Updates']

export default function Publication() {
  const [copied, setCopied] = useState(false)

  const copyDoi = async () => {
    try {
      await navigator.clipboard.writeText(publication.doi)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — fail silently
    }
  }

  return (
    <section id="publication" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12">
        <div>
          <p className="font-mono text-xs text-signal mb-4">{publication.venue}</p>
          <h2 className="font-display text-2xl sm:text-3xl text-ink text-balance leading-snug">
            {publication.title}
          </h2>
          <p className="mt-5 text-ink-dim leading-relaxed max-w-lg">
            {publication.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={copyDoi}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line font-mono text-xs text-ink-dim hover:text-ink hover:border-ink-dim transition-colors"
            >
              {copied ? <Check size={13} className="text-signal" /> : <Copy size={13} />}
              doi:{publication.doi}
            </button>
            <a
              href={publication.doiUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-ink text-canvas text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Read publication
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <div className="bg-canvas-surface/40 border border-line rounded-xl p-6">
          <p className="font-mono text-[11px] text-ink-faint mb-3">training.step</p>
          <PipelineDiagram steps={GRADIENT_STEPS} />
        </div>
      </div>
    </section>
  )
}

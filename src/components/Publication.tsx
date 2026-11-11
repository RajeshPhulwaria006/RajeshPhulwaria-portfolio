
import { useState } from 'react'
import { Copy, Check, ExternalLink, Github } from 'lucide-react'
import { publication } from '../data/resume'
import PipelineDiagram from './PipelineDiagram'

export default function Publication() {
  const [copiedDoi, setCopiedDoi] = useState('')

  const copyDoi = async (doi: any) => {
    try {
      await navigator.clipboard.writeText(doi)
      setCopiedDoi(doi)
      setTimeout(() => setCopiedDoi(''), 1800)
    } catch {
      // Clipboard unavailable
    }
  }

  return (
    <section
      id="publication"
      className="py-24 sm:py-32 border-t border-line"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs text-signal mb-4">
            RESEARCH & PUBLICATIONS
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-ink">
            Publications
          </h2>
          <p className="mt-4 text-ink-dim leading-relaxed max-w-lg">
            Research on gradient propagation, neural network
            optimization, and training dynamics.
          </p>
        </div>

        <div className="space-y-8">
          {publication.map((paper, index) => (
            <article
              key={paper.doi}
              className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12
                p-5 sm:p-8 border border-line rounded-xl"
            >
              <div>
                <p className="font-mono text-xs text-signal mb-4">
                  {paper.venue}
                  <span className="text-ink-faint">
                    {' '}· RESEARCH {String(index + 1).padStart(2, '0')}
                  </span>
                </p>

                <h3 className="font-display text-xl sm:text-2xl
                  text-ink leading-snug text-balance">
                  {paper.title}
                </h3>

                <p className="mt-5 text-ink-dim leading-relaxed">
                  {paper.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {copyDoi(paper.doi)}}
                    className="inline-flex items-center gap-2 px-4 py-2
                      rounded-full border border-line font-mono text-xs
                      text-ink-dim hover:text-ink hover:border-ink-dim
                      transition-colors"
                    aria-label={`Copy DOI ${paper.doi}`}
                  >
                    {copiedDoi === paper.doi ? (
                      <Check size={13} className="text-signal" />
                    ) : (
                      <Copy size={13} />
                    )}
                    DOI: {paper.doi}
                  </button>

                  <a
                    href={paper.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2
                      rounded-full bg-ink text-canvas text-sm font-medium
                      hover:opacity-90 transition-opacity"
                  >
                    Read publication
                    <ExternalLink size={13} />
                  </a>

                  {paper.repoUrl && (
                    <a
                      href={paper.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2
                        rounded-full border border-line text-ink-dim
                        text-sm hover:text-ink hover:border-ink-dim
                        transition-colors"
                    >
                      <Github size={14} />
                      Source code
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              <div className="bg-canvas-surface/40 border border-line
                rounded-xl p-5 sm:p-6 self-start">
                <p className="font-mono text-[11px] text-ink-faint mb-3">
                  training.step
                </p>
                <PipelineDiagram steps={paper.GradientSteps} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Package } from 'lucide-react'
import { openSource } from '../data/resume'

export default function OpenSource() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-12">
          Open source
        </h2>

        <div className="border border-line rounded-2xl p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center gap-6 max-w-2xl">
          <div className="w-12 h-12 rounded-full bg-canvas-surface border border-line flex items-center justify-center shrink-0">
            <Package size={20} className="text-signal" strokeWidth={1.6} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-display text-xl text-ink">{openSource.name}</h3>
              <span className="px-2.5 py-0.5 rounded-full border border-line font-mono text-[10px] text-ink-dim">
                {openSource.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full border border-line font-mono text-[10px] text-ink-dim">
                {openSource.tech}
              </span>
              <span>
                <a
                  href={openSource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-signal transition-colors"
                >
                  View Source
                </a>
              </span>
            </div>
            <p className="text-sm text-ink-dim leading-relaxed">{openSource.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { researchJourney } from '../data/resume'

export default function ResearchJourney() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-3">
          Research journey
        </h2>
        <p className="text-ink-dim max-w-md mb-14">
          A continuous progression, not a claim of finished expertise.
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-4 items-center">
          {researchJourney.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span
                className={`px-4 py-2 rounded-full border text-sm font-body whitespace-nowrap ${
                  i === researchJourney.length - 1
                    ? 'border-signal/50 text-ink bg-signal/5'
                    : 'border-line text-ink-dim'
                }`}
              >
                {step}
              </span>
              {i < researchJourney.length - 1 && (
                <span className="text-ink-faint font-mono text-sm">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

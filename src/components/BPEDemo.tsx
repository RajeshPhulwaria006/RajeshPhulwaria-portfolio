import { useState } from 'react'
import { RotateCcw, ChevronRight } from 'lucide-react'

// Deterministic, illustrative merge sequence for the word "learning" —
// matches the resume's description of pair-frequency merging, not a live model.
const STAGES = [
  ['l', 'e', 'a', 'r', 'n', 'i', 'n', 'g'],
  ['l', 'e', 'a', 'r', 'n', 'in', 'g'],
  ['l', 'e', 'a', 'r', 'n', 'ing'],
  ['learn', 'ing'],
  ['learning'],
]

export default function BPEDemo() {
  const [step, setStep] = useState(0)

  const next = () => setStep((s) => Math.min(s + 1, STAGES.length - 1))
  const reset = () => setStep(0)

  return (
    <div className="rounded-xl border border-line bg-canvas p-5">
      <p className="font-mono text-[11px] text-ink-faint mb-4">bpe.merge_step({step})</p>

      <div className="flex flex-wrap items-center gap-2 min-h-[40px]">
        {STAGES[step].map((tok, i) => (
          <span
            key={`${step}-${i}`}
            className="px-2.5 py-1 rounded-md bg-canvas-surface border border-line font-mono text-sm text-ink"
          >
            {tok}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={next}
          disabled={step === STAGES.length - 1}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-canvas text-xs font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
        >
          Merge next pair
          <ChevronRight size={13} />
        </button>
        <button
          onClick={reset}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-line text-xs text-ink-dim hover:text-ink transition-colors"
        >
          <RotateCcw size={12} />
          Reset
        </button>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function PipelineDiagram({ steps }: { steps: string[] }) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="font-mono text-[13px]">
      {steps.map((step, i) => (
        <div key={step}>
          <button
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`w-full text-left px-3 py-2 rounded-md border transition-colors ${
              active === i
                ? 'border-signal/60 text-ink bg-signal/5'
                : 'border-transparent text-ink-dim'
            }`}
          >
            {step}
          </button>
          {i < steps.length - 1 && (
            <div className="flex justify-center py-0.5">
              <ChevronDown size={13} className="text-ink-faint" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

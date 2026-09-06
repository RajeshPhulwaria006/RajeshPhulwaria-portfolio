import {
  BrainCircuit,
  Sparkles,
  Layers,
  MessageSquareText,
  Fingerprint,
  Activity,
  Network,
  Eye,
  Bot,
  Search,
  Combine,
  FlaskConical,
} from 'lucide-react'

const INTERESTS = [
  { label: 'Large Language Models', icon: BrainCircuit },
  { label: 'Generative AI', icon: Sparkles },
  { label: 'Transformer Architectures', icon: Layers },
  { label: 'Natural Language Processing', icon: MessageSquareText },
  { label: 'Representation Learning', icon: Fingerprint },
  { label: 'Neural Network Optimization', icon: Activity },
  { label: 'Deep Learning', icon: Network },
  { label: 'Computer Vision', icon: Eye },
  { label: 'AI Agents', icon: Bot },
  { label: 'Retrieval-Augmented Generation', icon: Search },
  { label: 'Multimodal AI', icon: Combine },
  { label: 'Scientific Machine Learning', icon: FlaskConical },
]

export default function ResearchInterests() {
  return (
    <section id="research" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-3">
          Research interests
        </h2>
        <p className="text-ink-dim max-w-md mb-12">
          Areas Rajesh is actively studying and building toward.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {INTERESTS.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="bg-canvas p-6 hover:bg-canvas-surface transition-colors"
            >
              <Icon size={18} className="text-signal mb-4" strokeWidth={1.6} />
              <p className="font-body text-sm text-ink leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

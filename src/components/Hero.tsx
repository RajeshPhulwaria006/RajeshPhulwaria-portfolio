import { ArrowRight, Github } from 'lucide-react'
import { profile } from '../data/resume'

const PIPELINE = ['Text', 'Tokenizer', 'Embeddings', 'Transformer', 'Prediction']
const RESEARCH_FOCUS = [
  {
    number: '01',
    title: 'Foundations',
    description: 'Mathematics · ML'
  },
  {
    number: '02',
    title: 'Deep Learning',
    description: 'Neural Networks · PyTorch'
  },
  {
    number: '03',
    title: 'Transformers',
    description: 'Attention · Architectures'
  },
  {
    number: '04',
    title: 'LLMs',
    description: 'NLP · RAG · GenAI'
  },
  {
    number: '05',
    title: 'AI Research',
    description: 'Experiments · Systems'
  },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_75%)]" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <p className="font-mono text-xs text-signal mb-5">
            {profile.location}
          </p>
          <h1 className="font-display text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl text-ink text-balance">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-dim max-w-lg">
            {profile.tagline}
          </p>
          <p className="mt-4 text-base text-ink-faint max-w-md">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-canvas font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explore my research
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-ink text-sm font-medium hover:border-ink-dim transition-colors"
            >
              <Github size={15} />
              View GitHub
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-line bg-canvas-surface/60 backdrop-blur-sm p-6 sm:p-8">

            <div className="flex items-center justify-between mb-6">
              <p className="font-mono text-[11px] text-ink-faint">
                research.focus
              </p>

              <span className="font-mono text-[10px] text-signal">
                2026
              </span>
            </div>

            <div className="flex flex-col">
              {RESEARCH_FOCUS.map((item) => (
                <div
                  key={item.number}
                  className="group flex items-start gap-4 py-4 border-b border-line last:border-0"
                >
                  <span className="font-mono text-[11px] text-ink-faint w-5 pt-1">
                    {item.number}
                  </span>

                  <div className="flex-1">
                    <p className="font-display text-lg text-ink group-hover:text-signal transition-colors">
                      {item.title}
                    </p>

                    <p className="mt-1 font-mono text-[10px] text-ink-faint">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div
            aria-hidden
            className="absolute -z-10 -inset-6 rounded-[2rem] bg-gradient-to-br from-signal/10 via-transparent to-transparent blur-2xl"
          />
        </div>
      </div>
    </section>
  )
}

import { profile } from '../data/resume'

const JOURNEY = [
  'How do machines actually learn?',
  'Neural Networks',
  'Optimization',
  'Deep Learning',
  'Transformers',
  'LLMs',
  'Generative AI Systems',
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
            About
          </h2>
          <p className="mt-6 text-ink-dim leading-relaxed max-w-md">
            {profile.bio}
          </p>
        </div>

        <div className="border-l border-line pl-8 sm:pl-10">
          {JOURNEY.map((step, i) => (
            <div key={step} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[41px] sm:-left-[49px] top-1 w-2 h-2 rounded-full bg-signal" />
              <p
                className={
                  i === 0
                    ? 'font-display text-xl text-ink'
                    : 'font-body text-base text-ink-dim'
                }
              >
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-12">
          Technical skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="font-mono text-xs text-ink-faint mb-4">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-line text-sm text-ink-dim hover:text-ink hover:border-ink-dim transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

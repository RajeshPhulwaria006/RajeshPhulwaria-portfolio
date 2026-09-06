import { experience, education } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-16">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-12">
            Experience
          </h2>

          <div className="relative border-l border-line pl-8 space-y-12">
            {experience.map((job) => (
              <div key={job.company} className="relative">
                <span className="absolute -left-[40px] top-1 w-2 h-2 rounded-full bg-signal" />
                <h3 className="font-display text-[30px] text-ink mb-2">{job.role}</h3>
                <p className="font-mono text-[16px] text-ink-faint mb-1">{job.company}</p>
                <p className="text-sm text-ink-dim leading-relaxed max-w-md">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-12">
            Education
          </h2>
          <div className="border border-line rounded-xl p-6">
            <p className="font-mono text-[11px] text-ink-faint mb-2">{education.years}</p>
            <h3 className="font-display text-lg text-ink mb-1">{education.degree}</h3>
            <p className="text-sm text-ink-dim">{education.institution}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

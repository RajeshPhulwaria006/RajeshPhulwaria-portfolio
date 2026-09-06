import { useState } from 'react'
import { Github, ChevronDown } from 'lucide-react'
import type { Project } from '../data/resume'
import PipelineDiagram from './PipelineDiagram'
import BPEDemo from './BPEDemo'

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="border border-line rounded-2xl overflow-hidden bg-canvas-surface/40">
      <div className="p-7 sm:p-9 grid md:grid-cols-[1.2fr_1fr] gap-8">
        <div>
          {project.tag && (
            <p className="font-mono text-[11px] text-signal mb-3">{project.tag}</p>
          )}
          <h3 className="font-display text-2xl text-ink mb-3">{project.title}</h3>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full border border-line font-mono text-[11px] text-ink-dim"
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="space-y-3">
            {project.points.map((p) => (
              <li key={p} className="text-sm text-ink-dim leading-relaxed pl-4 border-l border-line">
                {p}
              </li>
            ))}
          </ul>

          {project.note && (
            <p className="mt-5 text-xs text-ink-faint leading-relaxed">
              Note: {project.note}
            </p>
          )}

          <div className="mt-6 flex items-center gap-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-signal transition-colors"
              >
                <Github size={15} />
                View code
              </a>
            ) : (
              <span className="text-xs text-ink-faint font-mono">source not linked</span>
            )}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1 text-sm text-ink-dim hover:text-ink transition-colors"
            >
              {expanded ? 'Hide details' : 'View details'}
              <ChevronDown
                size={14}
                className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>

        <div className="bg-canvas rounded-xl border border-line p-5">
          <p className="font-mono text-[11px] text-ink-faint mb-3">architecture</p>
          <PipelineDiagram steps={project.diagram} />
        </div>
      </div>

      {expanded && project.id === 'gpt-tokenizer' && (
        <div className="border-t border-line p-7 sm:p-9">
          <p className="font-mono text-[11px] text-ink-faint mb-4">
            interactive · byte-pair merge on "learning"
          </p>
          <BPEDemo />
        </div>
      )}
    </article>
  )
}

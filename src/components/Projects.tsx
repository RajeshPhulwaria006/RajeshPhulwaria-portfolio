import { projects } from '../data/resume'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-3">
          Featured research projects
        </h2>
        <p className="text-ink-dim max-w-md mb-14">
          Built from first principles — implementation details over polish.
        </p>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

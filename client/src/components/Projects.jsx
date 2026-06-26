import { portfolio } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { Text } from './Text';

function TagList({ tags }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full bg-accent/15 px-3 py-1 text-xs text-accent-light">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolio;

  return (
    <section id="projects" className="section-container border-t border-border/50">
      <SectionHeading title="Featured Projects" subtitle={projects.subtitle} />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.featured.map((project) => (
          <article key={project.title} className="panel-card">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.description}</p>
            <TagList tags={project.tags} />
          </article>
        ))}
      </div>

      <h3 className="mb-6 mt-12 text-xl font-semibold text-white">Other Notable Projects</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.other.map((project) => (
          <article key={project.title} className="panel-card">
            <h4 className="font-semibold text-white">{project.title}</h4>
            <p className="mt-2 text-sm text-gray-400">{project.description}</p>
            <TagList tags={project.tags} />
          </article>
        ))}
      </div>

      <div className="panel-card mt-8 text-center">
        <h4 className="mb-2 font-semibold text-white">Want to connect?</h4>
        <p className="text-sm text-gray-400">{projects.githubCta}</p>
        <a href="#contact" className="btn-outline mt-4 inline-flex">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

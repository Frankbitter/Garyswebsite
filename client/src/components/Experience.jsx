import { portfolio } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { Text } from './Text';

export default function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="section-container border-t border-border/50">
      <SectionHeading title="Work Experience" subtitle={experience.subtitle} />

      <div className="space-y-6">
        {experience.jobs.map((job) => (
          <article key={`${job.company}-${job.period}`} className="panel-card">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-lg font-bold text-accent-light">
                <Text>{job.initials}</Text>
              </div>
              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      <Text>{job.title}</Text>
                    </h3>
                    <p className="text-accent-light">
                      <Text>{job.company}</Text>
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 md:text-right">
                    <p><Text>{job.period}</Text></p>
                    <p><Text>{job.location}</Text></p>
                    <p><Text>{job.type}</Text></p>
                  </div>
                </div>
                <h4 className="mb-2 mt-4 text-sm font-medium text-gray-200">Key Achievements:</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
                  {job.achievements.map((item) => (
                    <li key={item}>
                      <Text>{item}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

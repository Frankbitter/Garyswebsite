import { portfolio } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { Text } from './Text';

export default function Education() {
  const { education } = portfolio;

  return (
    <section id="education" className="section-container border-t border-border/50">
      <SectionHeading title="Education" subtitle={education.subtitle} />

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Formal Education</h3>
          <div className="space-y-6">
            {education.degrees.map((degree) => (
              <div key={degree.degree} className="panel-card">
                <h4 className="text-lg font-semibold text-white">
                  <Text>{degree.degree}</Text>
                </h4>
                <p className="mt-1 text-accent-light">
                  <Text>{degree.school}</Text>
                </p>
                {degree.period && (
                  <p className="mt-1 text-sm text-gray-500">
                    <Text>{degree.period}</Text>
                  </p>
                )}
                <h5 className="mb-2 mt-4 text-sm font-medium text-gray-200">Highlights:</h5>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
                  {degree.achievements.map((item) => (
                    <li key={item}>
                      <Text>{item}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          {education.certifications.length > 0 && (
            <>
              <h3 className="mb-4 text-lg font-semibold text-white">Certifications</h3>
              <div className="space-y-4">
                {education.certifications.map((cert) => (
                  <div key={cert.name} className="panel-card">
                    <h4 className="font-semibold text-white">
                      <Text>{cert.name}</Text>
                    </h4>
                    <p className="text-sm text-gray-400">
                      <Text>{cert.issuer}</Text>
                    </p>
                    <div className="mt-2 flex gap-3 text-xs">
                      <span className="rounded-full bg-accent/20 px-3 py-1 text-accent-light">
                        <Text>{cert.status}</Text>
                      </span>
                      <span className="rounded-full bg-border px-3 py-1 text-gray-400">
                        <Text>{cert.year}</Text>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className={`panel-card ${education.certifications.length > 0 ? 'mt-6' : ''}`}>
            <h4 className="mb-2 font-semibold text-white">Continuous Learning</h4>
            <p className="text-sm text-gray-400">
              <Text>{education.continuousLearning}</Text>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

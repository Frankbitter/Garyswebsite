import { portfolio } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { Text } from './Text';

export default function About() {
  const { about } = portfolio;

  return (
    <section id="about" className="section-container">
      <SectionHeading title="About Me" subtitle={about.intro} />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="panel-card">
          <h3 className="mb-4 text-xl font-semibold text-white">My Journey</h3>
          <p className="leading-relaxed text-gray-400">
            <Text>{about.journey}</Text>
          </p>
          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p>
              <span className="font-medium text-gray-200">Languages:</span>{' '}
              <Text>{about.languages}</Text>
            </p>
            <p>
              <span className="font-medium text-gray-200">Interests:</span>{' '}
              <Text>{about.interests}</Text>
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.values.map((value) => (
            <div key={value.title} className="panel-card">
              <h4 className="mb-2 font-semibold text-white">
                <Text>{value.title}</Text>
              </h4>
              <p className="text-sm text-gray-400">
                <Text>{value.description}</Text>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.stats.map((stat) => (
          <div key={stat.label} className="panel-card text-center">
            <p className="text-3xl font-bold text-accent-light">
              <Text>{stat.value}</Text>
            </p>
            <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

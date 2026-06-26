import { portfolio } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { Text } from './Text';

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-gray-300">
          <Text>{name}</Text>
        </span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="section-container border-t border-border/50">
      <SectionHeading title="Technical Skills" subtitle={skills.subtitle} />

      <div className="grid gap-6 md:grid-cols-2">
        {skills.categories.map((category) => (
          <div key={category.name} className="panel-card">
            <h3 className="mb-5 text-lg font-semibold text-white">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {skills.additional.map((group) => (
          <div key={group.title} className="panel-card">
            <h4 className="mb-3 font-semibold text-white">
              <Text>{group.title}</Text>
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-xs text-gray-300"
                >
                  <Text>{item}</Text>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="panel-card mt-8">
        <h4 className="mb-2 font-semibold text-white">Continuous Learning Mindset</h4>
        <p className="text-sm leading-relaxed text-gray-400">
          <Text>{skills.mindset}</Text>
        </p>
      </div>
    </section>
  );
}

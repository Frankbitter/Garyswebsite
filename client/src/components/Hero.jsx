import { portfolio } from '../data/portfolio';
import { Text } from './Text';

export default function Hero() {
  const { hero } = portfolio;

  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)]" />
      <div className="section-container relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-2 text-accent-light">{hero.greeting}</p>
          <h1 className="text-4xl font-bold text-white md:text-6xl">{hero.name}</h1>
          <p className="mt-3 text-xl text-gray-300 md:text-2xl">{hero.title}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-gray-400">{hero.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={hero.ctaPrimary.href} className="btn-primary">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn-outline">
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="panel-card flex aspect-square max-w-md items-center justify-center justify-self-center md:justify-self-end">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent to-purple-600 text-4xl font-bold text-white">
              <Text>{portfolio.meta.initials}</Text>
            </div>
            <p className="text-sm text-gray-400">IT Infrastructure Professional</p>
          </div>
        </div>
      </div>
    </section>
  );
}

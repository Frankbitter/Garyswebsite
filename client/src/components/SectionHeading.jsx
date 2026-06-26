import { Text } from './Text';

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        <Text>{title}</Text>
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          <Text>{subtitle}</Text>
        </p>
      )}
    </div>
  );
}

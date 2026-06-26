import { portfolio } from '../data/portfolio';
import { Text } from './Text';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/50 py-8 text-center text-sm text-gray-500">
      <p>
        © {year} <Text>{portfolio.meta.name}</Text>. All rights reserved.
      </p>
    </footer>
  );
}

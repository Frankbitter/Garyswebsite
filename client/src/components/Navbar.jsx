import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { Text } from './Text';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { meta, nav } = portfolio;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-surface/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3 font-semibold text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold">
            <Text>{meta.initials}</Text>
          </span>
          <Text>{meta.name}</Text>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-gray-300 transition hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg border border-border px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-panel px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-gray-300 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

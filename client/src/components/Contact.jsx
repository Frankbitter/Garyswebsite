import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { contact, meta } = portfolio;
  const [status, setStatus] = useState('');
  const phoneDigits = meta.phone?.replace(/\D/g, '') ?? '';

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('Message sent! (Logged on server for now.)');
      event.target.reset();
    } catch {
      setStatus('Could not send message. Check the server is running.');
    }
  }

  return (
    <section id="contact" className="section-container border-t border-border/50">
      <SectionHeading title="Get In Touch" subtitle={contact.subtitle} />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="panel-card">
          <h3 className="mb-6 text-xl font-semibold text-white">{contact.heading}</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium text-gray-200">Email</p>
              <a href={`mailto:${meta.email}`} className="text-accent-light hover:underline">
                {meta.email}
              </a>
            </div>
            {meta.phone && (
              <div>
                <p className="font-medium text-gray-200">Phone</p>
                <a href={`tel:${phoneDigits}`} className="text-accent-light hover:underline">
                  {meta.phone}
                </a>
              </div>
            )}
            <div>
              <p className="font-medium text-gray-200">Location</p>
              <p className="text-gray-400">{meta.location}</p>
            </div>
            {meta.linkedin && meta.linkedin !== '#' && (
              <div>
                <p className="font-medium text-gray-200">LinkedIn</p>
                <a href={meta.linkedin} className="text-accent-light hover:underline" target="_blank" rel="noreferrer">
                  linkedin.com/in/gagandeep-sandhu-0329072b4
                </a>
              </div>
            )}
          </div>
        </div>

        <form className="panel-card space-y-4" onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold text-white">Send Me a Message</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1 block text-gray-300">Name *</span>
              <input name="name" required className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-white outline-none focus:border-accent" />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-gray-300">Email *</span>
              <input name="email" type="email" required className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-white outline-none focus:border-accent" />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1 block text-gray-300">Subject *</span>
            <input name="subject" required className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-white outline-none focus:border-accent" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-gray-300">Message *</span>
            <textarea name="message" required rows={5} className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-white outline-none focus:border-accent" />
          </label>
          <button type="submit" className="btn-primary w-full sm:w-auto">Send Message</button>
          {status && <p className="text-sm text-gray-400">{status}</p>}
        </form>
      </div>
    </section>
  );
}

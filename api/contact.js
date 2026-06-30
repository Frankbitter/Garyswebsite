import { sendContactEmail } from '../lib/sendContactEmail.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const result = await sendContactEmail({ name, email, subject, message });

  if (!result.ok) {
    if (result.reason === 'not_configured') {
      console.log('Contact form submission (email not configured):', { name, email, subject, message });
      return res.status(503).json({ error: 'Contact form is not configured yet.' });
    }
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }

  return res.status(200).json({ success: true, message: 'Thanks for reaching out!' });
}

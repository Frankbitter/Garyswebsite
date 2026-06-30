import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { sendContactEmail } from '../lib/sendContactEmail.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, '../client/dist');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/hello', (_req, res) => {
  res.json({ message: "Welcome to Gary's Website" });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const result = await sendContactEmail({ name, email, subject, message });

  if (!result.ok) {
    if (result.reason === 'not_configured') {
      console.log('Contact form submission (email not configured):', { name, email, subject, message });
      return res.json({ success: true, message: 'Thanks for reaching out!' });
    }
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }

  res.json({ success: true, message: 'Thanks for reaching out!' });
});

if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get(/^\/(?!api).*/, (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  if (fs.existsSync(clientDist)) {
    console.log('Serving built site from client/dist');
  } else {
    console.log('No build found. Run: npm run dev (port 5173) or npm run preview');
  }
});

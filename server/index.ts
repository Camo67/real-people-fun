import express from 'express';
import dotenv from 'dotenv';
import { pool } from './db';
import { generateLeadOutreachEmail, generateProspectOutreachEmail } from './gemini';

dotenv.config();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// ── LEADS ────────────────────────────────────────────────────────────────────

app.post('/api/leads', async (req, res) => {
  const { name, email, phone, company, userType, eventFrequency, experienceType, details, preferredDate } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO leads (name, email, phone, company, user_type, event_frequency, experience_type, details, preferred_date)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING id`,
      [name, email, phone || null, company || null, userType, eventFrequency, experienceType, details || null, preferredDate || null]
    );

    const leadId = result.rows[0].id;

    let outreachEmail = '';
    try {
      outreachEmail = await generateLeadOutreachEmail({ name, email, phone, company, userType, eventFrequency, experienceType, details, preferredDate });
      await pool.query(`UPDATE leads SET outreach_email = $1 WHERE id = $2`, [outreachEmail, leadId]);
    } catch (aiErr) {
      console.error('AI email generation failed:', aiErr);
    }

    res.status(201).json({ id: leadId, outreachEmail });
  } catch (err) {
    console.error('Error saving lead:', err);
    res.status(500).json({ error: 'Failed to save lead' });
  }
});

app.get('/api/leads', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM leads ORDER BY created_at DESC`);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching leads:', err);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

app.get('/api/leads/:id', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM leads WHERE id = $1`, [req.params.id]);
    if (!result.rows.length) return res.status(404).json({ error: 'Lead not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch lead' });
  }
});

// ── OUTREACH PROSPECTS ────────────────────────────────────────────────────────

app.get('/api/prospects', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM outreach_prospects ORDER BY created_at DESC`);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch prospects' });
  }
});

app.post('/api/prospects', async (req, res) => {
  const { companyName, contactName, contactEmail, companyType, location, website, notes } = req.body;

  if (!companyName || !companyType) {
    return res.status(400).json({ error: 'Company name and type are required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO outreach_prospects (company_name, contact_name, contact_email, company_type, location, website, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id`,
      [companyName, contactName || null, contactEmail || null, companyType, location || null, website || null, notes || null]
    );

    const prospectId = result.rows[0].id;

    let outreachEmail = '';
    try {
      outreachEmail = await generateProspectOutreachEmail({ companyName, contactName, companyType, location, notes });
      await pool.query(`UPDATE outreach_prospects SET outreach_email = $1 WHERE id = $2`, [outreachEmail, prospectId]);
    } catch (aiErr) {
      console.error('AI email generation failed:', aiErr);
    }

    res.status(201).json({ id: prospectId, outreachEmail });
  } catch (err) {
    console.error('Error saving prospect:', err);
    res.status(500).json({ error: 'Failed to save prospect' });
  }
});

app.put('/api/prospects/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    await pool.query(`UPDATE outreach_prospects SET status = $1 WHERE id = $2`, [status, req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update status' });
  }
});

app.delete('/api/prospects/:id', async (req, res) => {
  try {
    await pool.query(`DELETE FROM outreach_prospects WHERE id = $1`, [req.params.id]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete prospect' });
  }
});

// Regenerate outreach email for a prospect
app.post('/api/prospects/:id/regenerate', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM outreach_prospects WHERE id = $1`, [req.params.id]);
    if (!result.rows.length) return res.status(404).json({ error: 'Prospect not found' });

    const p = result.rows[0];
    const outreachEmail = await generateProspectOutreachEmail({
      companyName: p.company_name,
      contactName: p.contact_name,
      companyType: p.company_type,
      location: p.location,
      notes: p.notes,
    });

    await pool.query(`UPDATE outreach_prospects SET outreach_email = $1 WHERE id = $2`, [outreachEmail, p.id]);
    res.json({ outreachEmail });
  } catch (err) {
    console.error('Error regenerating email:', err);
    res.status(500).json({ error: 'Failed to regenerate email' });
  }
});

// ── HEALTH ────────────────────────────────────────────────────────────────────

app.get('/api/health', (_, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`IRL backend running on port ${PORT}`));

# IRL Interactive Events

## Overview
A premium marketing/landing site for IRL Interactive Events — a Chicago-area live entertainment company. Includes a full-stack cold outreach agent with PostgreSQL database and Gemini AI email generation.

## Architecture

### Frontend (Vite + React + Tailwind CSS)
- Port: 5000
- `src/App.tsx` — main landing page with animated sections and multi-step "Clearance Protocol" inquiry form
- `src/AdminDashboard.tsx` — admin dashboard at `/admin` route for managing leads and cold outreach prospects
- `src/main.tsx` — entry point with simple path-based routing (`/` → App, `/admin` → AdminDashboard)

### Backend (Express + Node.js)
- Port: 3001
- `server/index.ts` — Express API server
- `server/db.ts` — PostgreSQL connection via `pg` pool
- `server/gemini.ts` — Gemini AI integration for generating personalized outreach emails

### Database (PostgreSQL)
Two tables:
- `leads` — stores form submissions from the website with AI-generated follow-up emails
- `outreach_prospects` — cold outreach targets added manually via admin dashboard

## Key Features
1. **Lead capture** — Form submissions saved to DB, Gemini generates a personalized follow-up email per lead
2. **Cold outreach agent** — Admin can add prospects (venues, bars, corporate clients) and AI generates a cold email for each
3. **Email regeneration** — Can regenerate outreach emails for any prospect
4. **Status tracking** — Prospects tracked as pending / contacted / converted / archived
5. **Admin dashboard** — `/admin` route, accessible via footer "Admin" link

## Workflows
- `Start application` — `npm run dev` on port 5000 (Vite frontend)
- `Backend API` — `npm run server` on port 3001 (Express backend with `tsx watch`)

## AI Integration
Uses Replit AI Integrations (Gemini 2.5 Flash) — no API key required, billed to Replit credits.
Environment variables: `AI_INTEGRATIONS_GEMINI_API_KEY`, `AI_INTEGRATIONS_GEMINI_BASE_URL`

## API Endpoints
- `POST /api/leads` — save a lead + generate outreach email
- `GET /api/leads` — list all leads
- `POST /api/prospects` — add a cold prospect + generate email
- `GET /api/prospects` — list all prospects
- `PUT /api/prospects/:id/status` — update prospect status
- `POST /api/prospects/:id/regenerate` — regenerate AI email
- `DELETE /api/prospects/:id` — remove a prospect

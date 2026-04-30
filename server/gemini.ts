import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.AI_INTEGRATIONS_GEMINI_API_KEY,
  httpOptions: {
    apiVersion: '',
    baseUrl: process.env.AI_INTEGRATIONS_GEMINI_BASE_URL,
  },
});

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  userType: string;
  eventFrequency: string;
  experienceType: string;
  details?: string;
  preferredDate?: string;
}

export interface ProspectData {
  companyName: string;
  contactName?: string;
  companyType: string;
  location?: string;
  notes?: string;
}

export async function generateLeadOutreachEmail(lead: LeadData): Promise<string> {
  const experienceMap: Record<string, string> = {
    gsnl: 'Game Show Night Live (live gameshow with jackpots and prizes)',
    hybrid: 'Hybrid Events & Streams (in-person + live streaming)',
    bada: 'Bada Brunch (themed brunch events)',
    sports: 'Water Cooler Corporate Sports (team-building)',
    wedding: 'Wedding-in-a-Box (interactive wedding entertainment)',
  };

  const typeMap: Record<string, string> = {
    venue: 'venue owner/operator',
    private: 'private party host',
    business: 'business/corporate client',
    charity: 'charity/nonprofit organizer',
  };

  const prompt = `You are the outreach copywriter for IRL Interactive Events — a premium Chicago-based event entertainment company specializing in live game shows, hybrid events, themed experiences, and corporate team-building. 

Write a short, punchy, personalized follow-up email to a new lead who just submitted an inquiry form on our website.

Lead details:
- Name: ${lead.name}
- Company/Venue: ${lead.company || 'Not provided'}
- They are a: ${typeMap[lead.userType] || lead.userType}
- Event type interest: ${lead.eventFrequency} events
- Experience they want: ${experienceMap[lead.experienceType] || lead.experienceType}
- Their message/vision: ${lead.details || 'Not provided'}
- Preferred event date: ${lead.preferredDate || 'Not specified'}

Write a follow-up email that:
1. Subject line that grabs attention (include [SUBJECT: ...] at top)
2. Acknowledges their specific interest (be specific, not generic)
3. Highlights 1-2 relevant IRL experiences for their needs
4. Creates urgency (dates fill fast, limited availability)
5. Clear CTA to schedule a call or reply
6. Tone: energetic, cool, confident — like a friend in the industry, not a salesperson

Keep the whole email under 200 words. Be direct and punchy. No fluff.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });

  return response.text || '';
}

export async function generateProspectOutreachEmail(prospect: ProspectData): Promise<string> {
  const prompt = `You are the outreach SDR for IRL Interactive Events — a premium Chicago-area event entertainment company that brings live game shows, hybrid events, themed brunch experiences, and corporate team-building to venues, bars, restaurants, corporate clients, and event spaces.

Write a cold outreach email to a potential new client/venue partner.

Prospect details:
- Company/Venue: ${prospect.companyName}
- Contact: ${prospect.contactName || 'Not specified'}
- Type: ${prospect.companyType}
- Location: ${prospect.location || 'Chicago area'}
- Notes: ${prospect.notes || 'General outreach'}

Write a cold email that:
1. Subject line (include [SUBJECT: ...] at top)
2. Opens with a personalized hook relevant to their type of business
3. Quickly explains what IRL does and why it's a fit for them
4. Mentions a specific IRL product (Game Show Night Live, Bada Brunch, etc.) that fits their venue/business
5. Proposes a specific next step (brief call, site visit)
6. Tone: confident, fresh, not salesy — peer-to-peer energy

Under 180 words. No fluff, no corporate speak.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });

  return response.text || '';
}

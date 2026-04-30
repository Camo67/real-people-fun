import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Mail, Plus, RefreshCw, Trash2, ChevronDown, ChevronUp, X, Check, Clock } from 'lucide-react';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  user_type: string;
  event_frequency: string;
  experience_type: string;
  details?: string;
  outreach_email?: string;
  preferred_date?: string;
  created_at: string;
}

interface Prospect {
  id: number;
  company_name: string;
  contact_name?: string;
  contact_email?: string;
  company_type: string;
  location?: string;
  website?: string;
  notes?: string;
  outreach_email?: string;
  status: string;
  created_at: string;
}

type Tab = 'leads' | 'prospects';

const statusColors: Record<string, string> = {
  pending: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  contacted: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
  converted: 'text-green-400 border-green-400/30 bg-green-400/10',
  archived: 'text-gray-500 border-gray-500/30 bg-gray-500/10',
};

function EmailModal({ email, onClose }: { email: string; onClose: () => void }) {
  const lines = email.split('\n');
  const subjectLine = lines.find(l => l.startsWith('[SUBJECT:'));
  const subject = subjectLine ? subjectLine.replace('[SUBJECT:', '').replace(']', '').trim() : '';
  const body = lines.filter(l => !l.startsWith('[SUBJECT:')).join('\n').trim();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Generated Outreach Email</p>
            {subject && <p className="text-sm font-bold text-brand-cyan">Subject: {subject}</p>}
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans leading-relaxed border-t border-white/5 pt-4">
          {body}
        </pre>
        <button
          onClick={() => { navigator.clipboard.writeText(body); }}
          className="mt-4 px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-brand-cyan/20 transition-all"
        >
          Copy Email
        </button>
      </motion.div>
    </div>
  );
}

function LeadsTab() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [emailModal, setEmailModal] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    const res = await fetch('/api/leads');
    const data = await res.json();
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => { fetchLeads(); }, []);

  if (loading) return (
    <div className="flex items-center justify-center py-20 text-gray-500">
      <RefreshCw className="w-5 h-5 animate-spin mr-2" /> Loading leads...
    </div>
  );

  if (!leads.length) return (
    <div className="text-center py-20 text-gray-500">
      <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
      <p className="font-mono text-sm uppercase tracking-widest">No leads yet. They'll show up here once someone submits the form.</p>
    </div>
  );

  return (
    <>
      {emailModal && <EmailModal email={emailModal} onClose={() => setEmailModal(null)} />}
      <div className="space-y-3">
        {leads.map(lead => (
          <motion.div
            key={lead.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-white/5 rounded-xl bg-white/2 overflow-hidden"
          >
            <button
              onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan font-bold text-xs uppercase">
                  {lead.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{lead.name}</p>
                  <p className="text-xs text-gray-500">{lead.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:block text-[10px] font-mono text-gray-600 uppercase">{lead.experience_type} · {lead.user_type}</span>
                <span className="text-[10px] font-mono text-gray-600">{new Date(lead.created_at).toLocaleDateString()}</span>
                {expanded === lead.id ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
              </div>
            </button>

            <AnimatePresence>
              {expanded === lead.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-white/5 px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="space-y-2 text-xs">
                    {lead.phone && <p><span className="text-gray-500 font-mono uppercase">Phone:</span> <span className="text-gray-300">{lead.phone}</span></p>}
                    {lead.company && <p><span className="text-gray-500 font-mono uppercase">Company:</span> <span className="text-gray-300">{lead.company}</span></p>}
                    <p><span className="text-gray-500 font-mono uppercase">Type:</span> <span className="text-gray-300">{lead.user_type}</span></p>
                    <p><span className="text-gray-500 font-mono uppercase">Frequency:</span> <span className="text-gray-300">{lead.event_frequency}</span></p>
                    <p><span className="text-gray-500 font-mono uppercase">Experience:</span> <span className="text-gray-300">{lead.experience_type}</span></p>
                    {lead.preferred_date && <p><span className="text-gray-500 font-mono uppercase">Preferred Date:</span> <span className="text-brand-cyan font-bold">{new Date(lead.preferred_date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}</span></p>}
                    {lead.details && <p><span className="text-gray-500 font-mono uppercase">Details:</span> <span className="text-gray-300">{lead.details}</span></p>}
                  </div>
                  <div>
                    {lead.outreach_email ? (
                      <button
                        onClick={() => setEmailModal(lead.outreach_email!)}
                        className="flex items-center gap-2 px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-brand-cyan/20 transition-all"
                      >
                        <Mail className="w-4 h-4" /> View AI Outreach Email
                      </button>
                    ) : (
                      <p className="text-xs text-gray-600 font-mono">No outreach email generated.</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function ProspectsTab() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const [emailModal, setEmailModal] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [regenerating, setRegenerating] = useState<number | null>(null);
  const [form, setForm] = useState({
    companyName: '', contactName: '', contactEmail: '',
    companyType: 'venue', location: '', website: '', notes: ''
  });

  const fetchProspects = async () => {
    setLoading(true);
    const res = await fetch('/api/prospects');
    const data = await res.json();
    setProspects(data);
    setLoading(false);
  };

  useEffect(() => { fetchProspects(); }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await fetch('/api/prospects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm({ companyName: '', contactName: '', contactEmail: '', companyType: 'venue', location: '', website: '', notes: '' });
    setShowForm(false);
    setSubmitting(false);
    fetchProspects();
  };

  const updateStatus = async (id: number, status: string) => {
    await fetch(`/api/prospects/${id}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    fetchProspects();
  };

  const deleteProspect = async (id: number) => {
    await fetch(`/api/prospects/${id}`, { method: 'DELETE' });
    fetchProspects();
  };

  const regenerateEmail = async (id: number) => {
    setRegenerating(id);
    const res = await fetch(`/api/prospects/${id}/regenerate`, { method: 'POST' });
    const data = await res.json();
    if (data.outreachEmail) setEmailModal(data.outreachEmail);
    setRegenerating(null);
    fetchProspects();
  };

  const inputClass = "w-full bg-black/50 border border-white/5 focus:border-brand-cyan/50 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-xs font-mono focus:outline-none transition-all";

  return (
    <>
      {emailModal && <EmailModal email={emailModal} onClose={() => setEmailModal(null)} />}

      <div className="flex justify-between items-center mb-6">
        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{prospects.length} prospect{prospects.length !== 1 ? 's' : ''}</p>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-brand-purple/20 transition-all"
        >
          <Plus className="w-4 h-4" /> Add Prospect
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="mb-6 p-5 border border-brand-purple/20 rounded-xl bg-brand-purple/5 space-y-3 overflow-hidden"
          >
            <p className="text-[10px] font-mono text-brand-purple uppercase tracking-widest mb-4">New Outreach Prospect</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required placeholder="Company / Venue Name *" className={inputClass} value={form.companyName} onChange={e => setForm({...form, companyName: e.target.value})} />
              <input placeholder="Contact Name" className={inputClass} value={form.contactName} onChange={e => setForm({...form, contactName: e.target.value})} />
              <input type="email" placeholder="Contact Email" className={inputClass} value={form.contactEmail} onChange={e => setForm({...form, contactEmail: e.target.value})} />
              <select required className={inputClass} value={form.companyType} onChange={e => setForm({...form, companyType: e.target.value})}>
                <option value="venue">Venue / Bar</option>
                <option value="restaurant">Restaurant</option>
                <option value="corporate">Corporate</option>
                <option value="hotel">Hotel / Event Space</option>
                <option value="brewery">Brewery / Taproom</option>
                <option value="other">Other</option>
              </select>
              <input placeholder="Location / City" className={inputClass} value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
              <input placeholder="Website" className={inputClass} value={form.website} onChange={e => setForm({...form, website: e.target.value})} />
            </div>
            <textarea rows={2} placeholder="Notes (why they're a fit, any context...)" className={inputClass} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
            <div className="flex gap-3">
              <button type="submit" disabled={submitting} className="px-6 py-2 bg-brand-purple text-black text-xs font-black uppercase tracking-widest rounded-lg hover:opacity-90 transition-all disabled:opacity-50">
                {submitting ? 'Generating...' : 'Add + Generate Email'}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-gray-500 text-xs font-mono uppercase hover:text-white transition-colors">Cancel</button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-gray-500">
          <RefreshCw className="w-5 h-5 animate-spin mr-2" /> Loading prospects...
        </div>
      ) : !prospects.length ? (
        <div className="text-center py-20 text-gray-500">
          <Mail className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="font-mono text-sm uppercase tracking-widest">Add prospects to generate cold outreach emails.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {prospects.map(p => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-white/5 rounded-xl bg-white/2 px-5 py-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple font-bold text-xs uppercase">
                    {p.company_name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{p.company_name}</p>
                    <p className="text-xs text-gray-500">{p.contact_name || p.contact_email || p.company_type} {p.location ? `· ${p.location}` : ''}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[10px] font-mono uppercase px-2 py-1 rounded border ${statusColors[p.status] || statusColors.pending}`}>
                    {p.status}
                  </span>
                  <select
                    value={p.status}
                    onChange={e => updateStatus(p.id, e.target.value)}
                    className="bg-black/50 border border-white/5 text-gray-400 text-[10px] font-mono rounded px-2 py-1 focus:outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                    <option value="archived">Archived</option>
                  </select>
                  {p.outreach_email && (
                    <button
                      onClick={() => setEmailModal(p.outreach_email!)}
                      className="flex items-center gap-1 px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-bold uppercase rounded hover:bg-brand-cyan/20 transition-all"
                    >
                      <Mail className="w-3 h-3" /> Email
                    </button>
                  )}
                  <button
                    onClick={() => regenerateEmail(p.id)}
                    disabled={regenerating === p.id}
                    className="flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-[10px] font-bold uppercase rounded hover:bg-white/10 transition-all disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3 h-3 ${regenerating === p.id ? 'animate-spin' : ''}`} />
                    {regenerating === p.id ? '...' : 'Regen'}
                  </button>
                  <button
                    onClick={() => deleteProspect(p.id)}
                    className="p-1 text-gray-600 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {p.notes && <p className="mt-3 text-[11px] text-gray-500 font-mono border-t border-white/5 pt-3">{p.notes}</p>}
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('leads');

  return (
    <div className="min-h-screen bg-deep-bg text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-deep-bg/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center font-bold text-black italic text-xs">IRL</div>
          <span className="font-display font-medium text-sm tracking-tighter uppercase">Admin <span className="text-gray-500">Dashboard</span></span>
        </div>
        <a href="/" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hover:text-brand-cyan transition-colors">← Back to Site</a>
      </nav>

      <div className="pt-24 px-6 max-w-5xl mx-auto pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-2">
            Cold Outreach <span className="text-brand-cyan">Agent</span>
          </h1>
          <p className="text-sm text-gray-500 font-mono">Powered by Gemini AI · All leads & prospects stored in PostgreSQL</p>
        </motion.div>

        <div className="flex gap-1 mb-8 bg-white/3 border border-white/5 rounded-xl p-1 w-fit">
          {(['leads', 'prospects'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                tab === t ? 'bg-brand-cyan text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t === 'leads' ? <><Users className="w-3 h-3 inline mr-1" />Form Leads</> : <><Mail className="w-3 h-3 inline mr-1" />Cold Prospects</>}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {tab === 'leads' ? <LeadsTab /> : <ProspectsTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

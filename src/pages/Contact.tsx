import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  Copy,
  Check,
  Clock,
  Globe,
  Terminal,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { toast } from 'sonner';

type IntentType = 'role' | 'project' | 'general';

const faqs = [
  {
    q: 'Are you open to full-time international remote roles?',
    a: 'Yes, absolutely. I am experienced working asynchronously with distributed teams using Git, GitHub/GitLab, Slack, and ticket tracking (Jira/Linear). My timezone (UTC+3) has great overlap with Europe (CET) and the US East Coast (EST).',
  },
  {
    q: 'What is your core tech stack and adaptability?',
    a: 'My primary daily drivers are Spring Boot (Java), Django REST (Python), Node.js, and React 18 with TypeScript. I also have solid experience with MySQL 8.0, Redis, Nginx, and Linux server management, and I adapt quickly to new stacks and internal frameworks.',
  },
  {
    q: 'Can you handle fintech and M-Pesa integrations from scratch?',
    a: 'Yes. I have built end-to-end payment workflows using the Safaricom Daraja API (STK Push, C2B Paybill/Till, and B2C), including idempotent webhook listeners that prevent double-crediting under retries.',
  },
  {
    q: 'What are your working hours and availability notice?',
    a: 'I am currently available for new full-time software engineering roles and high-impact consulting contracts with immediate or 2-week start dates.',
  },
];

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [intent, setIntent] = useState<IntentType>('role');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    intent: 'role',
    message: '',
  });

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData((prev) => ({ ...prev, message: `Re: ${subjectParam}\n` }));
    }
  }, [searchParams]);

  const handleIntentChange = (selected: IntentType) => {
    setIntent(selected);
    setFormData((prev) => ({ ...prev, intent: selected }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ombongijared2@gmail.com');
    setCopiedEmail(true);
    toast.success('Copied ombongijared2@gmail.com to clipboard');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xjgknzgp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          intentType: intent,
        }),
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          description: "Thank you for reaching out. I'll get back to you promptly.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          intent: 'role',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Could not deliver message', {
        description: 'Please try emailing ombongijared2@gmail.com or messaging on WhatsApp directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlaceholder = () => {
    if (intent === 'role') {
      return 'Tell me about the role: title, company, stack, and timeline...';
    }
    if (intent === 'project') {
      return 'Tell me about your project: system scope, tech stack, and target launch date...';
    }
    return 'How can I help you today?';
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-32 md:pb-28 bg-background min-h-screen text-foreground selection:bg-emerald-500/20 selection:text-emerald-300">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          
          {/* Header */}
          <section className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5" /> INITIATE CONVERSATION
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Let’s Build <span className="text-gradient-emerald">Something Resilient</span>.
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Whether you are hiring for a full-time engineering role, looking to architect a backend system, or exploring collaboration, I’d love to connect.
            </p>
          </section>

          {/* Main Content Grid: Form (Left) & Recruiter Quick Info (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Smart Intent Form (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-card border border-white/10 shadow-2xl space-y-6">
              
              {/* Natural Language Intent Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  I am reaching out to:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'role', label: 'Discuss Full-Time / Contract Role' },
                    { id: 'project', label: 'Build a System / API' },
                    { id: 'general', label: 'General Technical Inquiry' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      onClick={() => handleIntentChange(btn.id as IntentType)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        intent === btn.id
                          ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                          : 'bg-muted/60 text-muted-foreground hover:text-foreground border border-border/60'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Kevin Mwangi"
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-emerald-500/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="kevin@company.co.ke"
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-emerald-500/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">
                    Phone / WhatsApp <span className="text-muted-foreground font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 712 345 678"
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={getPlaceholder()}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-emerald-500/60 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-98 transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                  {isSubmitting ? 'Dispatching Message...' : 'Send Message'}
                </button>
              </form>

            </div>

            {/* Right Column: Hiring Manager & Recruiter Quick Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quick Info Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-card border border-white/10 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <h3 className="font-bold text-foreground text-base">Hiring Manager Snapshot</h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">
                    Verified Engineer
                  </span>
                </div>

                {/* Scannable Metadata */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Location: </span>
                      <span className="text-muted-foreground">Nairobi, Kenya (UTC+3)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Global Remote Overlap: </span>
                      <span className="text-muted-foreground">4–6 hours daily with European (CET) & US East Coast (EST)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Availability: </span>
                      <span className="text-emerald-400 font-semibold">Immediate / 2 Weeks Notice</span>
                    </div>
                  </div>
                </div>

                {/* Direct 1-Click Action Strip */}
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <a
                    href="/Jared_Mogonchi_CV.pdf"
                    download="Jared_Mogonchi_CV.pdf"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/60 hover:bg-muted border border-border text-xs font-semibold text-foreground transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-emerald-400" /> Download Official Resume (PDF)
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground group-hover:text-emerald-400">PDF</span>
                  </a>

                  <a
                    href="https://wa.me/254710464858"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/60 hover:bg-muted border border-border text-xs font-semibold text-foreground transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <FaWhatsapp className="w-4 h-4 text-emerald-400" /> Message on WhatsApp
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Fast Response</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/60 hover:bg-muted border border-border text-xs font-semibold text-foreground transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-400" />
                      )}
                      {copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">ombongijared2@gmail.com</span>
                  </button>
                </div>

                {/* Social Profiles */}
                <div className="flex items-center justify-center gap-4 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <a
                    href="https://github.com/jared-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <FaGithub className="w-3.5 h-3.5" /> GitHub
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.linkedin.com/in/jared-ombongi-b9187127b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <FaLinkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Frequently Asked Questions Accordion */}
          <section className="p-8 sm:p-12 rounded-3xl bg-card border border-white/10 space-y-6 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border/60 pb-4">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              <div>
                <h2 className="text-xl font-bold text-foreground">Frequently Asked Questions</h2>
                <p className="text-xs text-muted-foreground">Details on remote collaboration, tech stacks, and start dates</p>
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border/80 bg-background/60 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                    >
                      <span className="text-sm sm:text-base font-semibold text-foreground">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-emerald-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Contact;

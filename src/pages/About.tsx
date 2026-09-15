import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechCloud from '../components/TechCloud';
import ScrollToTop from '../components/ScrollToTop';
import {
  Download,
  Briefcase,
  Award,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Clock,
  Code2,
  GraduationCap,
  Sparkles,
  Lock,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const quickFacts = [
  {
    icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
    label: 'Track Record',
    value: '3+ Years Production',
    detail: 'Healthcare, fintech & SaaS systems',
  },
  {
    icon: <Code2 className="w-4 h-4 text-cyan-400" />,
    label: 'Primary Core Stack',
    value: 'Java • Python • React',
    detail: 'Spring Boot, Django REST, TypeScript',
  },
  {
    icon: <Globe className="w-4 h-4 text-amber-400" />,
    label: 'Timezone & Overlap',
    value: 'Nairobi (UTC+3)',
    detail: '4–6 hrs daily with Europe (CET) & US (EST)',
  },
  {
    icon: <Zap className="w-4 h-4 text-purple-400" />,
    label: 'Availability Status',
    value: 'Immediate / 2 Weeks',
    detail: 'Full-time remote & contract roles',
  },
];

const philosophies = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    title: 'Resilience over Complexity',
    description:
      'Writing maintainable, self-documenting code with clear error boundaries rather than brittle, over-engineered abstractions. Systems should degrade gracefully under unexpected edge conditions.',
  },
  {
    icon: <Lock className="w-5 h-5 text-cyan-400" />,
    title: 'Strict ACID Data Integrity',
    description:
      'Financial ledgers (M-Pesa IPNs) and healthcare drug inventories must never suffer from silent data corruption or race conditions. All sensitive state mutations are wrapped in atomic database transaction boundaries.',
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    title: 'Business-First Pragmatism',
    description:
      'Code is an instrument to solve concrete operational bottlenecks. Every API endpoint, query index, and interface flow is engineered to save operational time, increase revenue, or protect customer trust.',
  },
];

const skills = [
  { 
    name: 'Backend Architecture & Microservices', 
    items: ['Spring Boot (Java)', 'Django REST Framework', 'Node.js & Express', 'REST API Design (OpenAPI)', 'Microservice Patterns'] 
  },
  { 
    name: 'Frontend Engineering', 
    items: ['React.js 18', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Responsive & Mobile-First UI'] 
  },
  { 
    name: 'Databases & In-Memory Systems', 
    items: ['MySQL 8.0 (Indexing & ACID)', 'Redis (Caching & Locks)', 'Connection Pooling (HikariCP)', 'Schema Versioning'] 
  },
  { 
    name: 'Security & Access Architecture', 
    items: ['JWT Authentication (Stateless)', 'Role-Based Access Control (RBAC)', 'OWASP Top 10 Hardening', 'SSL/TLS Automation'] 
  },
  { 
    name: 'DevOps & Linux Administration', 
    items: ['Linux Server Administration', 'Nginx Reverse Proxy & Load Balancing', 'Git CI/CD Workflows', 'Python Log Monitoring'] 
  },
  { 
    name: 'Fintech & Payment Integrations', 
    items: ['Safaricom M-Pesa Daraja API', 'Webhook Idempotency Filters', 'Automated Accounting Ledgers', 'Third-Party REST Gateways'] 
  }
];

const experiences = [
  {
    title: 'Full-Stack Software Developer',
    company: 'MedicinaChain – HealthTech Startup',
    location: 'Nairobi, Kenya',
    period: 'Jan 2026 – Present',
    badge: 'Current Role',
    bullets: [
      'Engineering resilient backend microservices connecting healthcare providers, regional pharmacies, and patients.',
      'Architected high-throughput REST APIs using Spring Boot and Django with strict JWT authentication and role-based access control (RBAC).',
      'Built automated Python log monitoring tools to detect and alert on anomalous response latencies and database pool exhaustion.',
      'Hardened Linux production servers with Nginx reverse proxy, automated Let’s Encrypt SSL certificates, and optimized MySQL connection pooling.',
    ],
    techStack: 'Spring Boot, Django REST, React.js, MySQL, Redis, JWT, Nginx, Linux',
  },
  {
    title: 'Independent Full-Stack Software Engineer',
    company: 'Contract & Enterprise Solutions',
    location: 'Remote / Nairobi, Kenya',
    period: 'Jan 2023 – Oct 2025',
    badge: 'Production Platforms',
    bullets: [
      'Architected NyumbaLink (Rental Property Management Platform): Designed end-to-end multi-tenant database models and automated billing.',
      'Engineered Omilife Web Platform: Built an enterprise medicine distribution engine featuring automated stock depletion warnings and audit logs.',
      'Developed Retail POS & Inventory Engine: Designed offline-first point-of-sale system with automated Safaricom M-Pesa Till reconciliation.',
      'Implemented ACID-compliant transaction boundaries preventing race conditions on concurrent stock reservation.',
    ],
    techStack: 'React.js, Django, Node.js, Python, MySQL, M-Pesa Daraja API, REST APIs',
  },
  {
    title: 'IT Support & Systems Intern',
    company: 'Nairobi County Government – City Hall',
    location: 'Nairobi, Kenya',
    period: 'May 2024 – Aug 2024',
    badge: 'Infrastructure',
    bullets: [
      'Provided technical system administration and network diagnostics for county headquarters and health facilities.',
      'Configured and maintained critical enterprise network infrastructure (routers, managed switches, and VLAN access points).',
      'Assisted digital communications team in producing digital publications and publishing web updates for county civic initiatives.',
    ],
    techStack: 'Networking (TCP/IP, DNS, DHCP), Windows Server, Linux Basics, Active Directory',
  },
];

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-32 md:pb-28 bg-background min-h-screen text-foreground selection:bg-emerald-500/20 selection:text-emerald-300">
        <div className="container mx-auto px-4 max-w-6xl space-y-20">
          
          {/* 1. Hero Profile & Bio */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 max-w-md mx-auto lg:mx-0 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card">
                <img 
                  src="/uploads/image3.png" 
                  alt="Jared Mogonchi portrait" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Verified Pill */}
              <div className="absolute -bottom-4 left-6 right-6 p-3 rounded-2xl glass-pill flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-foreground">Verified Full-Stack Engineer</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Nairobi, KE
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" /> PROFESSIONAL BACKGROUND
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Engineering <span className="text-gradient-emerald">Scalable Software</span> with Purpose.
              </h1>

              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I am <strong className="text-foreground">Jared Mogonchi</strong>, a Full-Stack Software Engineer based in Nairobi, Kenya. I specialize in backend architecture using <strong>Spring Boot (Java)</strong>, <strong>Django (Python)</strong>, and <strong>Node.js</strong>, paired with dynamic <strong>React 18 & TypeScript</strong> frontends.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                My work centers on solving complex real-world challenges: healthcare logistics, financial ledgers with automated Safaricom M-Pesa reconciliation, inventory automation, and multi-tenant property management. I place high value on clean domain architecture, ACID compliance, zero-trust authentication, and low-latency API response times.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/Jared_Mogonchi_CV.pdf"
                  download="Jared_Mogonchi_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md active:scale-95"
                >
                  <Download className="w-4 h-4" /> Download Official CV (PDF)
                </a>

                <a
                  href="https://wa.me/254710464858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-card hover:bg-muted border border-border text-foreground transition-all"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-400" /> Message on WhatsApp
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  Initiate Discussion <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* 2. Recruiter Quick Facts (10-Second At-a-Glance Grid) */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-card border border-white/10 space-y-1 hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                  {fact.icon}
                  <span>{fact.label}</span>
                </div>
                <div className="text-base font-bold text-foreground font-mono">
                  {fact.value}
                </div>
                <div className="text-xs text-muted-foreground pt-0.5">
                  {fact.detail}
                </div>
              </div>
            ))}
          </section>

          {/* 3. Core Engineering Philosophy */}
          <section className="p-8 sm:p-12 rounded-3xl bg-card border border-white/10 space-y-8 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" /> ARCHITECTURAL VALUES
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                How I Build Production Software
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Core principles guiding architecture, concurrency, and security choices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {philosophies.map((phil, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-background/50 border border-border/60 space-y-3"
                >
                  <div className="p-2.5 rounded-xl bg-muted/60 border border-border w-fit">
                    {phil.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-base">{phil.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {phil.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Categorized Technical Competencies */}
          <section className="space-y-8 pt-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight">Technical Mastery</h2>
              <p className="text-muted-foreground text-sm">
                Frameworks, programming languages, databases, and architectural standards.
              </p>
            </div>

            <TechCloud />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-white/10 hover:border-emerald-500/30 transition-all duration-300 shadow-lg space-y-4"
                >
                  <h3 className="font-bold text-foreground text-base border-b border-border/60 pb-3 flex items-center justify-between">
                    <span>{skillGroup.name}</span>
                    <span className="text-xs font-mono text-emerald-400">{skillGroup.items.length} Skills</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {skillGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-foreground/90 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Professional Experience Timeline */}
          <section className="space-y-10 pt-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight">Engineering Experience</h2>
              <p className="text-muted-foreground text-sm">
                Track record of delivering production software in startups and enterprise environments.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-card border border-white/10 hover:border-emerald-500/30 shadow-xl transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">{exp.title}</h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                          {exp.badge}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-emerald-400 mt-0.5">{exp.company}</p>
                    </div>

                    <div className="text-xs font-mono text-muted-foreground sm:text-right">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-border/60 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span className="font-semibold text-emerald-400">Stack:</span>
                    <span className="text-slate-300">{exp.techStack}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Education & Academic Foundation */}
          <section className="p-8 sm:p-10 rounded-3xl bg-card border border-white/10 shadow-xl space-y-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 border-b border-border/60 pb-3">
              <div className="p-2.5 rounded-xl bg-muted/60 border border-border">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Academic Foundation & Continuous Learning</h3>
                <p className="text-xs text-muted-foreground">Computer Science principles, distributed systems & database administration</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Solid foundational background in software engineering principles, algorithms, relational database administration, computer networking (TCP/IP, routing, DNS), and modern systems design. Continuously expanding capabilities into distributed microservice patterns, reactive architectures, and cloud automation.
            </p>
          </section>

        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default About;

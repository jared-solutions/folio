import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import {
  Server,
  CreditCard,
  Layers,
  Database,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  FileCode2,
} from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  badge: string;
  businessOutcome: string;
  technicalSpecs: string;
  deliverables: string[];
  techStack: string[];
}

const engineeringServices: ServiceItem[] = [
  {
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    title: 'Backend & Microservice Architecture',
    badge: 'Core Specialty',
    businessOutcome:
      'Engineered server backends that eliminate downtime, handle high transaction influxes, and protect company and user data with zero-trust security.',
    technicalSpecs:
      'Domain-driven clean architecture in Spring Boot (Java) and Django (Python). Stateless JWT authentication, role-based access control (RBAC), connection pooling with HikariCP, and structured JSON error filters.',
    deliverables: [
      'Production-ready REST APIs compliant with OpenAPI 3.0 / Swagger',
      'Postman API testing collection and integration documentation',
      'Docker container configuration for reproducible deployments',
      'Centralized structured logging with proactive error alerts',
    ],
    techStack: ['Spring Boot (Java)', 'Django REST', 'Node.js', 'JWT RBAC', 'RESTful API'],
  },
  {
    icon: <CreditCard className="w-6 h-6 text-cyan-400" />,
    title: 'Fintech & M-Pesa Payment Automation',
    badge: 'High Impact',
    businessOutcome:
      'Instant payment collection and automated reconciliation without manual bookkeeping, eliminating transaction disputes and revenue leakage.',
    technicalSpecs:
      'Turnkey Safaricom Daraja M-Pesa integration (C2B Till/Paybill, B2C Disbursal, STK Push Express). Idempotent webhook listeners with atomic double-entry ledgering and retry mechanisms.',
    deliverables: [
      'Encrypted IPN webhook listener handling Safaricom retries',
      'Immutable transaction ledger tracking credits, debits, and fees',
      'Automated SMS / Email payment confirmation dispatch',
      'Self-healing fallback worker for intermittent network timeouts',
    ],
    techStack: ['M-Pesa Daraja API', 'Django / Spring Boot', 'Idempotency Filters', 'MySQL', 'Webhooks'],
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    title: 'Full-Stack Web Systems & Portals',
    badge: 'End-to-End',
    businessOutcome:
      'Fast, responsive web applications and management dashboards that replace chaotic spreadsheets with streamlined, role-tailored operational workflows.',
    technicalSpecs:
      'React 18 frontends built with TypeScript, Tailwind CSS, and TanStack React Query for smooth client-side caching. Multi-tenant database segregation and audit logging.',
    deliverables: [
      'Type-safe React / TypeScript codebase with modular component hierarchy',
      'Role-based dashboards tailored for admins, staff, and customers',
      'Data visualization charts for revenue, inventory, and system metrics',
      'Mobile-first responsive UX with cross-browser compatibility',
    ],
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'shadcn/ui'],
  },
  {
    icon: <Database className="w-6 h-6 text-amber-400" />,
    title: 'Database Design & Performance Tuning',
    badge: 'Reliability',
    businessOutcome:
      'Accelerated application load times, zero data corruption, and databases that effortlessly scale from thousands to millions of records.',
    technicalSpecs:
      'Relational database architecture in MySQL 8.0. Query profiling with EXPLAIN, composite index optimization, transaction isolation levels, and Redis caching for hot data paths.',
    deliverables: [
      'Third-Normal-Form (3NF) relational schemas with foreign key integrity',
      'Optimized query performance reducing p99 database response times',
      'Redis in-memory caching and distributed locking strategies',
      'Automated database backup pipelines and migration versioning',
    ],
    techStack: ['MySQL 8.0', 'Redis', 'HikariCP', 'ACID Transactions', 'Indexing Strategy'],
  },
];

const engineeringStandards = [
  {
    title: 'ACID Data Integrity',
    description: 'All financial and inventory operations are wrapped in strict atomic transactions to prevent double-spending or overselling.',
  },
  {
    title: 'Sub-50ms API Latency',
    description: 'Optimized queries, connection pooling, and in-memory Redis caching ensure blazing fast endpoint execution.',
  },
  {
    title: 'Zero Plain-Text Secrets',
    description: 'Strict environment isolation with automated key rotation, parameterized SQL to prevent injection, and OWASP compliance.',
  },
  {
    title: 'Self-Documenting Code',
    description: 'Type-safe interfaces, OpenAPI specs, and modular architecture ensure effortless handover to future engineering teams.',
  },
];

const Services: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-32 md:pb-28 bg-background min-h-screen text-foreground selection:bg-emerald-500/20 selection:text-emerald-300">
        <div className="container mx-auto px-4 max-w-6xl space-y-20">
          
          {/* Header Section */}
          <section className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" /> TECHNICAL CAPABILITIES
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Engineering <span className="text-gradient-emerald">Solutions & Capabilities</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Bridging business objectives with senior-grade backend reliability, automated payment pipelines, and modern web interfaces.
            </p>
          </section>

          {/* Unified Service Cards Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-white/10 hover:border-emerald-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-muted/60 border border-border">
                        {service.icon}
                      </div>
                      <h2 className="text-xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      {service.badge}
                    </span>
                  </div>

                  {/* Business Outcome (HR / Founders) */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      Business Value
                    </span>
                    <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                      {service.businessOutcome}
                    </p>
                  </div>

                  {/* Technical Execution (CTOs / Tech Leads) */}
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/60 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                      Technical Architecture
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.technicalSpecs}
                    </p>
                  </div>

                  {/* Production Deliverables Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      Tangible Deliverables
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-foreground/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Chips Footer */}
                <div className="pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                  {service.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Engineering Standards & Quality Guarantees */}
          <section className="p-8 sm:p-12 rounded-3xl bg-card border border-white/10 space-y-8 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Production Engineering Standards
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Non-negotiable architectural principles baked into every line of code.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringStandards.map((std, sIdx) => (
                <div key={sIdx} className="space-y-2 p-4 rounded-xl bg-background/50 border border-border/60">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <h3 className="font-bold text-sm text-foreground">{std.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{std.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Workflow & Process Pipeline */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                How I Collaborate & Deliver
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Structured, transparent milestones from initial architectural design to deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: '01',
                  title: 'Scoping & Architecture',
                  desc: 'Clarify business domain, design DB schema, and establish OpenAPI contract specifications.',
                },
                {
                  step: '02',
                  title: 'Core Engine Build',
                  desc: 'Develop core services with transaction boundaries, authentication, and unit test suites.',
                },
                {
                  step: '03',
                  title: 'Frontend & Integrations',
                  desc: 'Connect React interface, integrate M-Pesa webhooks, and stage on live preview environments.',
                },
                {
                  step: '04',
                  title: 'Production Hardening',
                  desc: 'SSL setup, Nginx reverse proxy, load testing, and seamless handover with complete documentation.',
                },
              ].map((processStep, pIdx) => (
                <div
                  key={pIdx}
                  className="p-5 rounded-2xl bg-card border border-white/10 space-y-2 hover:border-emerald-500/40 transition-all"
                >
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    STEP {processStep.step}
                  </span>
                  <h3 className="font-bold text-sm text-foreground">{processStep.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{processStep.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Action Strip */}
          <div className="text-center space-y-4 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Have a system requirement to discuss?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              I am open for full-time engineering roles, high-impact contract systems, and technical consulting.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md active:scale-95"
              >
                Discuss Technical Scope <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Services;
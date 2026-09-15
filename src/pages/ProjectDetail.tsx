import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Database,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  pitch: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  stats: {
    impact: string;
    architecture: string;
    stack: string;
    status: string;
  };
  challenge: {
    context: string;
    bottlenecks: string[];
  };
  architectureFlow: {
    step: string;
    label: string;
    detail: string;
  }[];
  engineeringHighlights: {
    title: string;
    description: string;
    implementation: string;
  }[];
  productionDeliverables: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  omilife: {
    id: 'omilife',
    title: 'Omilife Healthcare & Pharmacy Engine',
    category: 'Healthcare Logistics & Inventory',
    pitch:
      'A centralized digital supply platform connecting medicine distributors with regional pharmacies, replacing manual paper stockouts with automated batch tracking and real-time inventory alerts.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200',
    demoUrl: 'https://omilife.co.ke',
    githubUrl: 'https://github.com/jared-solutions/omilife',
    stats: {
      impact: '45% Dispatch Latency Cut',
      architecture: 'Distributed REST Microservices',
      stack: 'Spring Boot • Django • React • MySQL',
      status: 'Production Deployed',
    },
    challenge: {
      context:
        'Regional pharmacies and pharmaceutical suppliers in Kenya faced severe operational bottlenecks caused by fragmented manual record-keeping, delayed supplier phone orders, and frequent losses from expired batch stock.',
      bottlenecks: [
        'Medicine orders took up to 48 hours to process via manual phone and paper logs.',
        'High financial write-offs due to untracked drug expiration dates in decentralized storerooms.',
        'Lack of regulatory compliance audit trails required by pharmacy regulatory boards.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Client / Pharmacist Portal',
        detail: 'React 18 + TypeScript frontend providing instantaneous search across 12,000+ SKUs with cached catalogs.',
      },
      {
        step: '02',
        label: 'Stateless Security Gateway',
        detail: 'JWT validation with Role-Based Access Control (RBAC) separating SuperAdmins, Distributors, and Pharmacists.',
      },
      {
        step: '03',
        label: 'Order & Inventory Engine',
        detail: 'Spring Boot & Django REST backend orchestrating atomic stock reservation with ACID transaction isolation.',
      },
      {
        step: '04',
        label: 'ACID Persistence & Batch Alerts',
        detail: 'MySQL 8.0 with indexed composite keys and an automated background cron alerting on 30-day expiry windows.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Preventing Concurrent Stock Overselling',
        description:
          'When multiple pharmacies attempted to order the remaining batch of emergency medicine at the same millisecond, standard read-modify-write patterns risked double allocation.',
        implementation:
          'Enforced pessimistic row-level locking (SELECT ... FOR UPDATE) inside strict database transactions, guaranteeing that inventory reservations are serialized and idempotent.',
      },
      {
        title: 'Proactive 30-Day Expiry Notification Pipeline',
        description:
          'Pharmacies previously discovered expired drugs only during end-of-quarter audits, causing significant inventory losses.',
        implementation:
          'Architected an asynchronous worker task that scans expiring batch lots daily, generating automated distributor markdown recommendations and supplier notifications.',
      },
    ],
    productionDeliverables: [
      'Multi-tenant pharmacy inventory & stock transfer engine',
      'Batch expiration tracking with automated compliance logging',
      'REST API with OpenAPI / Swagger contracts',
      'Secure RBAC with granular staff permission levels',
      'Responsive interface optimized for low-bandwidth mobile tablets',
    ],
  },
  mkulima: {
    id: 'mkulima',
    title: 'Mkulima Poultry Financial Platform & M-Pesa IPN',
    category: 'Fintech & Commercial Agriculture',
    pitch:
      'A specialized financial ledger and operations platform for commercial poultry enterprises, featuring automated Safaricom Daraja M-Pesa payment reconciliation and flock profitability analytics.',
    image: '/uploads/cageG1.png',
    demoUrl: 'https://eggcellent-sales.onrender.com/',
    githubUrl: 'https://github.com/jared-solutions/mkulima',
    stats: {
      impact: '100% Payment Reconciliation',
      architecture: 'Idempotent Webhooks & Ledgers',
      stack: 'React • Django • MySQL • M-Pesa API',
      status: 'Live & Operational',
    },
    challenge: {
      context:
        'Poultry farmers in Kenya operate on tight operational margins with hundreds of daily egg, chick, and feed transactions conducted over M-Pesa. Manual entry led to unaccounted revenue and untracked feed cost spikes.',
      bottlenecks: [
        'Farmers lost up to 15% of recorded income through unverified manual M-Pesa SMS forwarding.',
        'No unified ledger tracking feed consumption conversion ratios against flock revenue.',
        'Difficulty calculating real net profitability per poultry batch.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Customer Payment (M-Pesa)',
        detail: 'Customer initiates Buy Goods / Till transaction on their mobile device.',
      },
      {
        step: '02',
        label: 'Safaricom Daraja IPN',
        detail: 'Safaricom servers dispatch an encrypted HTTP POST Instant Payment Notification webhook.',
      },
      {
        step: '03',
        label: 'Idempotent Webhook Handler',
        detail: 'Django REST endpoint validates signature, verifies TransID uniqueness, and prevents duplicate processing.',
      },
      {
        step: '04',
        label: 'Automated Accounting Entry',
        detail: 'Atomic ledger credit recorded, stock deducted, and real-time SMS receipt generated for the customer.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Zero-Leakage Webhook Idempotency',
        description:
          'Safaricom Daraja webhooks can retry notifications multiple times under network timeouts, risking duplicate transaction recording.',
        implementation:
          'Engineered an idempotency filter with database unique constraints on TransID combined with atomic database transactions. Duplicate callbacks are acknowledged instantly without double-crediting.',
      },
      {
        title: 'Real-Time Feed Conversion & Profit Modeling',
        description:
          'Feed accounts for 70% of poultry costs; without accurate modeling, farmers operate at unperceived losses.',
        implementation:
          'Built mathematical aggregations in Django ORM calculating Feed Conversion Ratio (FCR) against egg yield per bird flock in real time.',
      },
    ],
    productionDeliverables: [
      'Turnkey Safaricom M-Pesa C2B and Till integration',
      'Immutable double-entry transaction ledger',
      'Automated batch profit/loss visual charts',
      'Offline-tolerant sales logging with background sync',
      'Vaccination schedule alerting and feed inventory monitor',
    ],
  },
  rentconnect: {
    id: 'rentconnect',
    title: 'RentConnect Property Management Platform',
    category: 'Real Estate & Property Management',
    pitch:
      'A multi-tenant property management system connecting property owners, building managers, and tenants with automated invoice reconciliation, maintenance ticketing, and audit logging.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200',
    demoUrl: 'https://nyumbalink.co.ke',
    githubUrl: 'https://github.com/jared-solutions',
    stats: {
      impact: 'Zero-Trust Tenant RBAC',
      architecture: 'Multi-Tenant Architecture',
      stack: 'Node.js • React • MySQL • REST',
      status: 'Production Deployed',
    },
    challenge: {
      context:
        'Managing hundreds of rental units across different estates resulted in scattered bank statements, disputed utility bills, and untracked repair requests.',
      bottlenecks: [
        'Disputed manual rent receipts and untracked late payment penalties.',
        'Delayed maintenance workflows causing tenant dissatisfaction and lease cancellations.',
        'Lack of clear financial reporting for absentee property owners.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Role-Based Dashboard',
        detail: 'Separate, tailored user experiences for Landlords, Caretakers, and Tenants in React 18.',
      },
      {
        step: '02',
        label: 'Node.js Express API',
        detail: 'Microservices handling lease contracts, invoice generation, and maintenance dispatch.',
      },
      {
        step: '03',
        label: 'Automated Billing Engine',
        detail: 'Monthly cron recurring billing calculating rent, water, and garbage collection charges.',
      },
      {
        step: '04',
        label: 'Relational Multi-Tenant DB',
        detail: 'MySQL schema with strict foreign key constraints and audit logging for financial clarity.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Multi-Tenant Data Isolation',
        description:
          'Landlords must strictly access only their properties without any cross-tenant data leakage.',
        implementation:
          'Implemented query middleware that enforces tenant ownership scopes at the ORM layer, preventing unauthorized horizontal privilege escalation.',
      },
      {
        title: 'Automated Maintenance Ticketing Lifecycle',
        description:
          'Maintenance disputes arose when verbal requests went unfulfilled.',
        implementation:
          'Designed a state-machine ticket lifecycle (Open -> Assigned -> In-Progress -> Resolved) with image upload proofs and tenant sign-offs.',
      },
    ],
    productionDeliverables: [
      'Automated tenant invoicing and payment tracking',
      'Interactive maintenance ticket resolution portal',
      'Digital lease agreement generation and storage',
      'Comprehensive financial statements exportable to PDF/CSV',
      'Tenant self-service portal for billing review',
    ],
  },
};

const defaultProjectFallback: CaseStudy = {
  id: 'enterprise-system',
  title: 'Enterprise Software Architecture',
  category: 'Full-Stack Software Engineering',
  pitch:
    'A custom enterprise application engineered with clean architecture principles, robust database design, and modern web interfaces.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
  stats: {
    impact: 'Sub-50ms Response Latency',
    architecture: 'Clean Architecture & REST',
    stack: 'Spring Boot • React • MySQL',
    status: 'Verified Architecture',
  },
  challenge: {
    context:
      'Modern enterprise operations require scalable software systems capable of processing high transaction volumes while ensuring data integrity and zero downtime.',
    bottlenecks: [
      'Legacy manual bottlenecks leading to lost operational hours.',
      'Unstructured data causing reporting inaccuracies.',
      'Security vulnerabilities in unauthenticated legacy endpoints.',
    ],
  },
  architectureFlow: [
    {
      step: '01',
      label: 'Client Layer',
      detail: 'Responsive React interface with client-side validation and caching.',
    },
    {
      step: '02',
      label: 'Security & Auth',
      detail: 'JWT bearer authentication with role-based authorization filters.',
    },
    {
      step: '03',
      label: 'Service Logic',
      detail: 'Decoupled domain services executing business rules and transaction logic.',
    },
    {
      step: '04',
      label: 'Persistence',
      detail: 'Optimized relational database with connection pooling and automated backups.',
    },
  ],
  engineeringHighlights: [
    {
      title: 'Scalable Architecture & ACID Compliance',
      description: 'System operations designed for continuous data consistency.',
      implementation: 'Strict transaction boundaries and optimized query indexing.',
    },
  ],
  productionDeliverables: [
    'Secure REST API with complete documentation',
    'Responsive web interface for desktop and mobile',
    'Role-based access control and audit logging',
    'Optimized database schema and migration scripts',
  ],
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<CaseStudy>(defaultProjectFallback);

  useEffect(() => {
    if (id && caseStudies[id]) {
      setProject(caseStudies[id]);
    } else {
      setProject({
        ...defaultProjectFallback,
        id: id || 'system',
        title: id ? id.replace('-', ' ').toUpperCase() + ' System' : 'Enterprise System',
      });
    }
  }, [id]);

  const projectKeys = Object.keys(caseStudies);
  const currentIndex = projectKeys.indexOf(id || '');
  const nextProjectKey = projectKeys[(currentIndex + 1) % projectKeys.length];
  const nextProject = caseStudies[nextProjectKey];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-32 md:pb-28 bg-background min-h-screen text-foreground selection:bg-emerald-500/20 selection:text-emerald-300">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          
          {/* Breadcrumbs & Return Link */}
          <div className="flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Systems Catalog
            </Link>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              {project.category}
            </span>
          </div>

          {/* 1. TOP EXECUTIVE SNAPSHOT (The 10-Second Scan) */}
          <section className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {project.pitch}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md active:scale-95"
                >
                  Launch Live System <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-card hover:bg-muted border border-border text-foreground transition-all"
                >
                  <Github className="w-4 h-4" /> Inspect Repository
                </a>
              )}
            </div>

            {/* The 4-Pill Stat Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              <div className="p-4 rounded-xl bg-card border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" /> Business Impact
                </span>
                <div className="text-sm sm:text-base font-bold text-foreground font-mono">
                  {project.stats.impact}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-cyan-400" /> Architecture
                </span>
                <div className="text-sm sm:text-base font-bold text-foreground font-mono">
                  {project.stats.architecture}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                  <Layers className="w-3 h-3 text-purple-400" /> Technology
                </span>
                <div className="text-sm sm:text-base font-bold text-foreground font-mono truncate">
                  {project.stats.stack}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Lifecycle Status
                </span>
                <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                  {project.stats.status}
                </div>
              </div>
            </div>
          </section>

          {/* Project Featured Media Preview */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card/60">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          {/* 2. THE BUSINESS CHALLENGE (Plain English for HR & Execs) */}
          <section className="p-6 sm:p-8 rounded-2xl bg-card border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <AlertCircle className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-foreground">The Operational Challenge</h2>
                <p className="text-xs font-mono text-muted-foreground">The bottleneck that required solving</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.challenge.context}
            </p>

            <div className="pt-2 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Critical Pain Points Addressed:
              </h3>
              <ul className="space-y-2">
                {project.challenge.bottlenecks.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. SYSTEM ARCHITECTURE & DATA FLOW (For Tech Leads & CTOs) */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                System Engineering Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Architectural Data Flow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {project.architectureFlow.map((node, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-card border border-white/10 space-y-3 relative hover:border-emerald-500/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {node.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400/40" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{node.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{node.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. KEY ENGINEERING HURDLES OVERCOME (Deep Rigor) */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Technical Rigor
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Engineering Hurdles & Solutions
              </h2>
            </div>

            <div className="space-y-4">
              {project.engineeringHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-white/10 space-y-3"
                >
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Problem:</strong> {highlight.description}
                  </p>
                  <div className="p-3.5 rounded-xl bg-muted/60 border border-border text-xs font-mono text-emerald-400 leading-relaxed">
                    <span className="text-muted-foreground font-semibold">Solution Implementation: </span>
                    {highlight.implementation}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. PRODUCTION DELIVERABLES & FEATURES */}
          <section className="p-6 sm:p-8 rounded-2xl bg-card/60 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-foreground">Verified Production Deliverables</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.productionDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. NEXT PROJECT NAVIGATOR */}
          {nextProject && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-card to-muted/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  Next Case Study
                </span>
                <h3 className="text-xl font-bold text-foreground mt-0.5">{nextProject.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{nextProject.pitch}</p>
              </div>

              <Link
                to={`/projects/${nextProject.id}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shrink-0 active:scale-95"
              >
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProjectDetail;

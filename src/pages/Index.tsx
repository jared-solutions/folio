import React from 'react';
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import ArchitectureFlow from '../components/ArchitectureFlow';
import ApiPlayground from '../components/ApiPlayground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const featuredProjects = [
  {
    id: 'omilife',
    title: 'Omilife Healthcare Management System',
    description:
      'Scalable pharmaceutical distribution and pharmacy engine with ACID inventory locking, multi-branch supplier management, and automated regulatory stock alerts.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800',
    tags: ['Spring Boot', 'Django REST', 'React.js', 'MySQL', 'JWT RBAC'],
    metric: '45% Latency Reduction',
    architectureHighlight: 'Distributed Services',
    githubUrl: 'https://github.com/jared-solutions/omilife',
    demoUrl: 'https://omilife.co.ke',
  },
  {
    id: 'mkulima',
    title: 'Mkulima Financial Platform & M-Pesa IPN',
    description:
      'Comprehensive financial ledger and inventory system tailored for commercial poultry farmers. Integrates automated Safaricom Daraja M-Pesa callback reconciliation.',
    image: '/uploads/cageG1.png',
    tags: ['React.js', 'Django', 'MySQL', 'M-Pesa Daraja API', 'REST API'],
    metric: '100% Payment Reconciliation',
    architectureHighlight: 'Idempotent Webhooks',
    githubUrl: 'https://github.com/jared-solutions/mkulima',
    demoUrl: 'https://eggcellent-sales.onrender.com/',
  },
  {
    id: 'rentconnect',
    title: 'RentConnect Property Management',
    description:
      'Multi-tenant rental property management platform connecting landlords and tenants with automated invoice reconciliation, maintenance requests, and audit logging.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
    tags: ['Node.js', 'React.js', 'MySQL', 'REST API', 'RBAC'],
    metric: 'Zero-Trust Auth',
    architectureHighlight: 'Multi-Tenant RBAC',
    demoUrl: 'https://nyumbalink.co.ke',
  },
];

const technicalMatrix = [
  {
    category: 'Backend & Microservices',
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    skills: [
      'Spring Boot (Java)',
      'Django REST Framework',
      'Node.js & Express',
      'REST API Design (OpenAPI)',
      'Microservice Architecture',
      'Clean Code & SOLID',
    ],
  },
  {
    category: 'Databases & In-Memory',
    icon: <Database className="w-5 h-5 text-cyan-400" />,
    skills: [
      'MySQL 8.0 (ACID, Indexes)',
      'Redis (Caching, Distributed Locks)',
      'Connection Pools (HikariCP)',
      'Schema Migration & Auditing',
      'Transaction Isolation Levels',
      'Query Profiling & Optimization',
    ],
  },
  {
    category: 'Security & Fintech Integration',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    skills: [
      'Safaricom M-Pesa Daraja API',
      'JWT Authentication & Refresh Flow',
      'Role-Based Access Control (RBAC)',
      'Idempotent Webhook Processing',
      'Data Encryption & OWASP Standards',
      'SSL/TLS Certificate Automation',
    ],
  },
  {
    category: 'Frontend & Cloud DevOps',
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    skills: [
      'React 18 & TypeScript',
      'Tailwind CSS & Modern UI',
      'Linux VPS Administration',
      'Nginx Reverse Proxy & Load Balancing',
      'Git Version Control & CI/CD',
      'Automated Testing & Postman',
    ],
  },
];

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground selection:bg-emerald-500/20 selection:text-emerald-300">
        
        {/* 1. Hero Section with Live Telemetry */}
        <HeroSection />

        {/* 2. System Architecture Blueprint */}
        <ArchitectureFlow />

        {/* 3. Featured Production Systems */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <Award className="w-3.5 h-3.5" /> PROVEN PRODUCTION TRACK RECORD
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Featured <span className="text-gradient-emerald">Case Studies</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
                  Enterprise-grade platforms built for scalability, robust business workflows, and strict uptime SLAs.
                </p>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View All Systems & Architectures <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  metric={project.metric}
                  architectureHighlight={project.architectureHighlight}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm bg-card hover:bg-muted border border-border hover:border-emerald-500/40 text-foreground transition-all shadow-sm"
              >
                Browse Full Catalog of Systems ({featuredProjects.length}+ Projects)
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>

          </div>
        </section>

        {/* 4. Interactive Live API Sandbox */}
        <ApiPlayground />

        {/* 5. Technical Competencies Matrix */}
        <section className="py-20 md:py-28 bg-muted/20 border-t border-border/50 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <Code2 className="w-3.5 h-3.5" /> DOMAIN COMPETENCIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Technical <span className="text-gradient-emerald">Mastery Matrix</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Core technologies and engineering frameworks deployed across production environments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalMatrix.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-white/10 hover:border-emerald-500/30 shadow-lg transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-muted border border-border">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-foreground text-sm">
                      {item.category}
                    </h3>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-border/60">
                    {item.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="text-xs font-mono text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                        <span className="text-foreground/90">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. High-Conversion CTA Section */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" /> AVAILABLE FOR NEW CHALLENGES
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to build high-performance software that scales?
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you need to architect a mission-critical backend service, integrate M-Pesa payments, or build a production-grade web system, I'm ready to contribute immediately.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 transition-all active:scale-95 inline-flex items-center gap-2"
              >
                Initiate Conversation <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="mailto:ombongijared2@gmail.com"
                className="px-6 py-3.5 rounded-xl font-medium text-sm bg-card hover:bg-muted border border-border text-foreground transition-all active:scale-95"
              >
                ombongijared2@gmail.com
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;

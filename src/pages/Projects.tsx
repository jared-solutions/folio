import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ScrollToTop from '../components/ScrollToTop';

const projects = [
  {
    id: 'medicinachain',
    title: 'MedicinaChain — Enterprise Modular HMIS & HealthTech SaaS',
    description:
      'Enterprise hospital management information system (HMIS) serving healthcare facilities with dynamic runtime module decoupling, multi-tenant database routing, and biometric authentication.',
    image: '/uploads/medicinachain.jpg',
    tags: ['Spring Boot (Java)', 'React.js', 'MySQL', 'Flyway', 'Multi-tenant'],
    category: 'enterprise',
    metric: 'Current Full-Time Role',
    architectureHighlight: 'Dynamic Module Engine',
    demoUrl: 'https://medicinachain.org',
    githubUrl: 'https://github.com/jared-solutions',
  },
  {
    id: 'poultryops',
    title: 'PoultryOps — Commercial Poultry ERP & AgTech SaaS',
    description:
      'A multi-tenant commercial poultry farm ERP powering 20+ farms with daily egg-collection heatmaps, biological flock lifecycle headcount math, automated Safaricom Daraja M-Pesa STK Push, and Africa\'s Talking SMS dispatch.',
    image: '/uploads/poltry system system.png',
    tags: ['React.js', 'Django REST', 'PostgreSQL', 'M-Pesa IPN', "Africa's Talking"],
    category: 'web',
    metric: 'Live SaaS (20+ Farms)',
    architectureHighlight: 'STK Push & SMS Engine',
    githubUrl: 'https://github.com/jared-solutions',
    demoUrl: 'https://eggcellent-sales.onrender.com/',
  },
  {
    id: 'omilife',
    title: 'Omilife — Pharmaceutical Distribution Platform',
    description:
      'B2B pharmaceutical e-commerce and wholesale medicine distribution web platform connecting regional healthcare facilities and pharmacies directly with verified pharmaceutical distributors.',
    image: '/uploads/omilife image.png',
    tags: ['React.js', 'Django REST', 'MySQL', 'B2B Catalog & Orders'],
    category: 'web',
    metric: 'Client Contract',
    architectureHighlight: 'Supplier Ordering Portal',
    githubUrl: 'https://github.com/jared-solutions',
    demoUrl: 'https://omilife.co.ke',
  },
  {
    id: 'rentconnect',
    title: 'RentConnect Property Management Platform',
    description:
      'Connecting landlords and tenants with seamless property management workflows. Includes real-time booking, tenant invoicing, maintenance ticketing, and RBAC authentication.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
    tags: ['React.js', 'Node.js', 'MySQL', 'REST API'],
    category: 'web',
    metric: 'Zero-Trust Auth',
    architectureHighlight: 'Multi-Tenant Architecture',
    demoUrl: 'https://nyumbalink.co.ke',
  },
  {
    id: 'sacco-system',
    title: 'Enterprise SACCO Core Banking & Member Ledger',
    description:
      'Financial management system for Savings and Credit Cooperative Organizations. Features include member KYC, loan processing, savings ledgers, and automated audit statements.',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=800',
    tags: ['React.js', 'Spring Boot (Java)', 'MySQL', 'REST API'],
    category: 'enterprise',
    metric: 'ACID Transactions',
    architectureHighlight: 'Spring Core & HikariCP',
  },
  {
    id: 'car-hire',
    title: 'Car Hire Fleet Logistics & Dispatch',
    description:
      'Car rental solution with booking reservation, payment processing, fleet utilization tracking, maintenance scheduling, and GPS log reconciliation.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800',
    tags: ['React.js', 'Node.js', 'MySQL', 'JWT Auth'],
    category: 'web',
    metric: 'Fleet Availability Matrix',
    architectureHighlight: 'Async Dispatch Queue',
  },
  {
    id: 'gym-system',
    title: 'Gym & Fitness Membership Engine',
    description:
      'Solution for fitness centers to automate recurring memberships, schedule trainers, record attendance via QR codes, and process subscription payments.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
    tags: ['React.js', 'Node.js', 'MySQL', 'REST API'],
    category: 'web',
    metric: 'Real-time Check-in',
    architectureHighlight: 'REST API & Webhooks',
  },
  {
    id: 'spa-salon',
    title: 'Spa & Salon Appointment Booking System',
    description:
      'Platform for wellness businesses to manage service appointments, staff rosters, consumables inventory, and customer loyalty programs.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800',
    tags: ['React.js', 'Django', 'MySQL', 'REST API'],
    category: 'web',
    metric: '99.8% Booking Reliability',
    architectureHighlight: 'Django ORM & Cache',
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-32 md:pb-28 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" /> SYSTEM CATALOG
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Production <span className="text-gradient-emerald">Systems & Architectures</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Explore production applications engineered with resilient backends, reliable data models, and modern user experiences.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: 'All Systems', value: 'all' },
                { label: 'Enterprise Backends', value: 'enterprise' },
                { label: 'Web Platforms', value: 'web' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                    filter === tab.value
                      ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                      : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by tech or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-card border border-border text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-muted-foreground text-sm font-mono">
              No systems match "{searchQuery}". Try searching for "Django", "React", or "Spring Boot".
            </div>
          )}

          {/* Bottom Card CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl shadow-2xl relative overflow-hidden text-center space-y-4">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Looking for a custom system architecture?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              I consult on system architecture, database optimization, M-Pesa payment gateways, and end-to-end full-stack development.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md active:scale-95"
              >
                Discuss Technical Requirements <ArrowRight className="w-4 h-4" />
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

export default Projects;

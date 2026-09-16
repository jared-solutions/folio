import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  Database,
  Globe,
  Layers,
  CheckCircle2,
  Lock,
  ArrowRight,
  Terminal,
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  technologies: string[];
  description: string;
  keyPractices: string[];
}

const nodes: ArchitectureNode[] = [
  {
    id: 'gateway',
    title: 'Edge & Security Layer',
    category: 'Ingress & Auth',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    technologies: ['Nginx', 'TLS 1.3', 'JWT (HMAC/RSA)', 'Rate Limiting'],
    description:
      'Acts as the primary reverse proxy and defense perimeter. Decodes and verifies stateless JWT tokens, blocks malicious IP floods, and terminates SSL with A+ SSL Labs grade.',
    keyPractices: [
      'Bearer Token Validation & Role Extraction',
      'CORS Whitelisting & Origin Hardening',
      'DDoS & Request Rate Throttling',
    ],
  },
  {
    id: 'app',
    title: 'Core Application Services',
    category: 'Business Logic',
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    technologies: ['Spring Boot (Java)', 'Django REST', 'Node.js Express'],
    description:
      'Domain-driven service layer implementing clean architecture principles, DTO validation, transaction boundaries, and idempotent business logic execution.',
    keyPractices: [
      'Strict Role-Based Access Control (RBAC)',
      'Idempotency Keys for Payment Operations',
      'Centralized Structured Logging & Exception Filters',
    ],
  },
  {
    id: 'cache',
    title: 'Distributed Cache & Events',
    category: 'Performance & Queues',
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    technologies: ['Redis', 'Celery / Background Tasks', 'In-Memory Sessions'],
    description:
      'High-throughput caching layer for hot inventory items, token blocklists, and asynchronous job queuing for long-running batch reconciliation.',
    keyPractices: [
      'Cache-Aside with TTL Invalidation',
      'Distributed Redis Locks for Concurrent Stock Reservation',
      'Async Email/SMS Dispatch without Blocking Requests',
    ],
  },
  {
    id: 'data',
    title: 'Persistence & Integrations',
    category: 'Storage & Webhooks',
    icon: <Database className="w-5 h-5 text-amber-400" />,
    technologies: ['MySQL 8.0', 'M-Pesa Daraja API', 'HikariCP Pool'],
    description:
      'ACID-compliant relational database with optimized composite indexes, foreign key constraints, connection pooling, and resilient webhook handlers.',
    keyPractices: [
      'ACID Transaction Isolation for Financial Ledgers',
      'Instant Safaricom M-Pesa IPN Webhook Acknowledgment',
      'Automated Database Migration & Backup Pipelines',
    ],
  },
];

export const ArchitectureFlow: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(nodes[0]);

  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden border-t border-b border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" /> SYSTEM DESIGN BLUEPRINT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How I Architect <span className="text-gradient-emerald">Production Systems</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Every application is designed with defense-in-depth security, strict transaction boundaries, and low latency across the entire stack.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Architecture Pipeline Steps (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
              <span>Interactive Execution Pipeline</span>
              <span className="text-[11px] text-emerald-400 font-normal">Click any stage to inspect</span>
            </div>

            {nodes.map((node, index) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <div key={node.id} className="relative">
                  <button
                    onClick={() => setSelectedNode(node)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border ${
                      isSelected
                        ? 'bg-card border-emerald-500/50 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30'
                        : 'bg-card/40 border-border/60 hover:bg-card/80 hover:border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`p-2.5 rounded-xl border ${
                            isSelected
                              ? 'bg-emerald-500/15 border-emerald-500/30'
                              : 'bg-muted/60 border-border/60'
                          }`}
                        >
                          {node.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-muted-foreground">
                              0{index + 1}.
                            </span>
                            <h3 className="font-semibold text-foreground text-base sm:text-lg">
                              {node.title}
                            </h3>
                          </div>
                          <p className="text-xs text-muted-foreground font-mono mt-0.5">
                            {node.category}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="hidden sm:flex flex-wrap gap-1 max-w-[200px] justify-end">
                          {node.technologies.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isSelected ? 'text-emerald-400 translate-x-1' : 'text-muted-foreground/50'
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Connecting Line between steps */}
                  {index < nodes.length - 1 && (
                    <div className="w-0.5 h-3 bg-border/80 mx-auto my-0.5" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Inspector Pane (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl bg-card border border-white/10 shadow-2xl space-y-5"
              >
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      {selectedNode.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">
                        {selectedNode.title}
                      </h4>
                      <span className="font-mono text-xs text-emerald-400">
                        {selectedNode.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground border border-border">
                    Architecture Node
                  </span>
                </div>

                {/* Description */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Architectural Role
                  </h5>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Primary Technologies
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Engineering Practices */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Engineering Principles Enforced
                  </h5>
                  <ul className="space-y-2">
                    {selectedNode.keyPractices.map((practice, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitectureFlow;

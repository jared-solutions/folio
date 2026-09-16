import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Terminal,
  Server,
  Activity,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  Download,
  CheckCircle2,
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const logSnippets = [
  { method: 'GET', path: '/api/v1/health', status: 200, latency: '8ms' },
  { method: 'POST', path: '/api/v1/auth/jwt/verify', status: 200, latency: '14ms' },
  { method: 'GET', path: '/api/v1/inventory/omilife/stock', status: 200, latency: '21ms' },
  { method: 'POST', path: '/api/v1/mpesa/c2b/callback', status: 200, latency: '64ms' },
  { method: 'GET', path: '/api/v1/projects/architecture', status: 200, latency: '11ms' },
];

export const HeroSection: React.FC = () => {
  const [logs, setLogs] = useState(logSnippets.slice(0, 3));
  const [currentTime, setCurrentTime] = useState('');

  // Clock for Nairobi Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Nairobi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulated live log ticker
  useEffect(() => {
    let index = 3;
    const interval = setInterval(() => {
      const nextLog = logSnippets[index % logSnippets.length];
      setLogs((prev) => [...prev.slice(1), nextLog]);
      index++;
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: Headline & Authority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status & Time Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                OPEN FOR FULL-STACK & BACKEND ROLES
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 border border-border text-muted-foreground text-xs font-mono">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>Nairobi (UTC+3)</span>
                <Clock className="w-3 h-3 ml-1 text-slate-400" />
                <span>{currentTime || '17:00'}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Architecting <span className="text-gradient-emerald">Resilient Backends</span> & High-Impact Systems.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I’m <strong className="text-foreground">Jared Mogonchi</strong> — a Full-Stack Software Engineer specializing in{' '}
              <span className="text-emerald-400 font-medium">Spring Boot (Java)</span>,{' '}
              <span className="text-emerald-400 font-medium">Django</span>, and{' '}
              <span className="text-emerald-400 font-medium">React</span>. Currently engineering{' '}
              <a href="https://medicinachain.org" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">
                MedicinaChain
              </a>
              , an enterprise multi-tenant HealthTech SaaS platform, alongside high-throughput REST APIs and M-Pesa fintech integrations.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all active:scale-95"
              >
                Explore Systems & Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#api-sandbox"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-card hover:bg-muted border border-border hover:border-emerald-500/40 text-foreground transition-all active:scale-95"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                Test Live Sandbox
              </a>

              <a
                href="/Jared_Mogonchi_CV.pdf"
                download="Jared_Mogonchi_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                title="Download CV / Resume"
              >
                <Download className="w-4 h-4" />
                CV
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/60 text-muted-foreground text-sm">
              <span className="text-xs uppercase tracking-wider font-mono text-muted-foreground/80">Connect:</span>
              <a
                href="https://github.com/jared-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <FaGithub className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jared-ombongi-b9187127b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <FaLinkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://wa.me/254710464858"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Hero Column: Interactive Telemetry & Server Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/10 bg-card/80 backdrop-blur-xl shadow-2xl p-5 space-y-4">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-border/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground font-medium">
                    telemetry.jared.prod
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Activity className="w-3 h-3 animate-pulse" /> LIVE STREAM
                </div>
              </div>

              {/* System Vitals Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-background/60 border border-border/60">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" /> Avg Latency
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400 font-semibold">Fast</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-foreground">14.2 ms</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">p99 &lt; 45ms across services</div>
                </div>

                <div className="p-3 rounded-xl bg-background/60 border border-border/60">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" /> Uptime
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400 font-semibold">99.98%</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-foreground">0 Failures</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Automated health checks</div>
                </div>

                <div className="p-3 rounded-xl bg-background/60 border border-border/60">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span className="flex items-center gap-1">
                      <Server className="w-3 h-3 text-cyan-400" /> Architecture
                    </span>
                    <span className="font-mono text-[10px] text-cyan-400">Microservices</span>
                  </div>
                  <div className="text-sm font-semibold text-foreground">Spring + Django</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Redis cache + MySQL pool</div>
                </div>

                <div className="p-3 rounded-xl bg-background/60 border border-border/60">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Fintech IPN
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400">Active</span>
                  </div>
                  <div className="text-sm font-semibold text-foreground">M-Pesa Daraja</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Idempotent Webhooks</div>
                </div>
              </div>

              {/* Realtime Request Log Console */}
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-3.5 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Simulated Request Influx</span>
                  <span className="text-[10px] text-slate-500 font-mono">HTTP/2 TLS 1.3</span>
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  {logs.map((log, i) => (
                    <motion.div
                      key={`${log.path}-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between py-1 px-2 rounded bg-slate-900/80 border border-slate-800/80 text-[11px]"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className="text-emerald-400 font-bold">{log.method}</span>
                        <span className="text-slate-300 truncate">{log.path}</span>
                      </div>
                      <div className="flex items-center gap-2 pl-2 shrink-0">
                        <span className="text-emerald-400 font-semibold">{log.status}</span>
                        <span className="text-slate-500">{log.latency}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Hint */}
              <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 px-1">
                <span>Press <kbd className="font-mono px-1 py-0.5 bg-muted rounded border border-border">⌘K</kbd> anywhere to navigate</span>
                <span className="text-emerald-400">● All systems nominal</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

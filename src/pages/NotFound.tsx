import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Terminal, Home, ArrowRight, Layers, User, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 md:pt-40 md:pb-28 bg-background min-h-screen text-foreground flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="p-8 rounded-3xl bg-card border border-white/10 shadow-2xl space-y-6 text-center">
            
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-3 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span>HTTP 404 — ROUTE_NOT_FOUND</span>
            </div>

            {/* Error Display */}
            <div className="space-y-2 font-mono">
              <div className="text-6xl sm:text-7xl font-extrabold text-gradient-emerald">
                404
              </div>
              <div className="text-xs text-muted-foreground bg-muted/60 p-2.5 rounded-xl border border-border">
                GET {location.pathname} → [Failed to resolve handler]
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              The requested resource does not exist or has been relocated within the architecture.
            </p>

            {/* Suggested Alternative Endpoints */}
            <div className="space-y-2 pt-2 text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Available Valid Endpoints:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                <Link
                  to="/projects"
                  className="p-2.5 rounded-xl bg-background hover:bg-muted border border-border text-foreground flex items-center gap-2 transition-colors"
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>/projects</span>
                </Link>
                <Link
                  to="/about"
                  className="p-2.5 rounded-xl bg-background hover:bg-muted border border-border text-foreground flex items-center gap-2 transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>/about</span>
                </Link>
                <Link
                  to="/contact"
                  className="p-2.5 rounded-xl bg-background hover:bg-muted border border-border text-foreground flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>/contact</span>
                </Link>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md active:scale-95"
              >
                <Home className="w-4 h-4" /> Return to Command Center
              </Link>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

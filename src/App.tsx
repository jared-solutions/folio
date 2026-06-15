import { useState, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "./components/LoadingScreen";
import WelcomeDialog from "./components/WelcomeDialog";

// Lazy load pages to reduce initial bundle size
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [guestName, setGuestName] = useState<string>("My Guest");

  const handleLoadingComplete = () => {
    setLoading(false);
    setShowWelcome(true); // Always show welcome dialog after loading
  };

  const handleGuestNameSet = (name: string) => {
    setGuestName(name);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

          {!loading && (
            <>
              <WelcomeDialog
                open={showWelcome}
                onOpenChange={setShowWelcome}
                onGuestNameSet={handleGuestNameSet}
              />

              <BrowserRouter>
                <Routes>
                  <Route 
                    path="/" 
                    element={[
                      <>
                        <Suspense fallback={<div>Loading...</div>}>
                          <Index guestName={guestName} />
                        </Suspense>
                      </>
                    ]} 
                  />
                  <Route 
                    path="/about" 
                    element={[
                      <>
                        <Suspense fallback={<div>Loading...</div>}>
                          <About />
                        </Suspense>
                      </>
                    ]} 
                  />
                  <Route 
                    path="/projects" 
                    element={[
                      <>
                        <Suspense fallback={<div>Loading...</div>}>
                          <Projects />
                        </Suspense>
                      </>
                    ]} 
                  />
                  <Route 
                    path="/projects/:id" 
                    element={[
                      <>
                        <Suspense fallback={<div>Loading...</div>}>
                          <ProjectDetail />
                        </Suspense>
                      </>
                    ]} 
                  />
                  <Route 
                    path="/services" 
                    element={[
                      <>
                        <Suspense fallback={<div>Loading...</div>}>
                          <Services />
                        </Suspense>
                      </>
                    ]} 
                  />
                  <Route 
                    path="/contact" 
                    element={[
                      <>
                        <Suspense fallback={<div>Loading...</div>}>
                          <Contact />
                        </Suspense>
                      </>
                    ]} 
                  />
                  <Route 
                    path="*" 
                    element={[
                      <>
                        <Suspense fallback={<div>Loading...</div>}>
                          <NotFound />
                        </Suspense>
                      </>
                    ]} 
                  />
                </Routes>
              </BrowserRouter>
            </>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

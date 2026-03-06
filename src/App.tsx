import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogCycling from "./pages/BlogCycling";
import BlogTech from "./pages/BlogTech";
import BlogGeneral from "./pages/BlogGeneral";
import { BlogPost } from "./components/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
            <img
              src="/lovable-uploads/97ba6128-0174-4dc8-9ed6-0a4d58913834.png"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-background/35" />
          </div>
          <div className="relative z-10">
            <Navigation />
            <div className="pt-16">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/cycling" element={<BlogCycling />} />
                <Route path="/blog/tech" element={<BlogTech />} />
                <Route path="/blog/general" element={<BlogGeneral />} />
                <Route path="/blog/:postId" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

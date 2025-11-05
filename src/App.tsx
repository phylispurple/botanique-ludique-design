import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import Training from "./pages/Training";
import Philosophy from "./pages/Philosophy";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import SalesTerms from "./pages/SalesTerms";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import AdminTestimonials from "./pages/AdminTestimonials";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/training" element={<Training />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/conditions-de-vente" element={<SalesTerms />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;

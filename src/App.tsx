
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
// Removed TooltipProvider to fix React dispatcher error
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import CompoundPage from "./pages/CompoundPage";
import PrerequisitesPage from "./pages/PrerequisitesPage";
import FundamentalsPage from "./pages/FundamentalsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";
import StackCreatorPage from "./pages/StackCreatorPage";
import { HomePage } from "@/components/HomePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider removed */}
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/stack-creator" element={<StackCreatorPage />} />
        <Route path="/directory" element={<HomePage />} />
        <Route path="/compound/:id" element={<CompoundPage />} />
        <Route path="/prerequisites" element={<PrerequisitesPage />} />
        <Route path="/stack" element={<Navigate to="/prerequisites" replace />} />
        <Route path="/fundamentals" element={<FundamentalsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

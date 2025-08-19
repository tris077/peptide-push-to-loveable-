
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { GlobalMenu } from "@/components/GlobalMenu";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import CompoundPage from "./pages/CompoundPage";
import PrerequisitesPage from "./pages/PrerequisitesPage";
import FundamentalsPage from "./pages/FundamentalsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";
import { HomePage } from "@/components/HomePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <GlobalMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<Index />} />
            <Route path="/directory" element={<HomePage />} />
            <Route path="/compound/:id" element={<CompoundPage />} />
            <Route path="/prerequisites" element={<PrerequisitesPage />} />
            <Route path="/stack" element={<Navigate to="/prerequisites" replace />} />
            <Route path="/fundamentals" element={<FundamentalsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Library, 
  Plus, 
  ArrowRight, 
  Sparkles,
  Atom,
  Beaker,
  Microscope,
  Star,
  Zap,
  FlaskConical
} from "lucide-react";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-texture pointer-events-none" />
      
      {/* Floating Background Elements - Organic and Balanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-24 bg-gradient-to-r from-blue-400/20 to-purple-500/15 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-32 right-20 w-24 h-20 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full animate-float-delayed blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-24 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute top-1/2 right-10 w-20 h-16 bg-gradient-to-r from-blue-300/15 to-purple-400/15 rounded-full animate-bounce-gentle blur-xl"></div>
        <div className="absolute top-1/4 left-1/3 w-28 h-20 bg-gradient-to-r from-blue-400/15 to-green-400/15 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-18 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full animate-float-delayed blur-xl"></div>
        
        {/* Floating Icons - Balanced Colors */}
        <div className="absolute top-20 right-1/4 animate-float">
          <Atom className="w-8 h-8 text-blue-400/30" />
        </div>
        <div className="absolute bottom-32 right-1/3 animate-float-delayed">
          <Beaker className="w-6 h-6 text-purple-400/30" />
        </div>
        <div className="absolute top-1/3 left-1/4 animate-float-slow">
          <Microscope className="w-7 h-7 text-green-400/30" />
        </div>
        <div className="absolute bottom-1/4 left-10 animate-bounce-gentle">
          <FlaskConical className="w-5 h-5 text-blue-400/30" />
        </div>
        <div className="absolute top-1/4 right-1/2 animate-float">
          <Star className="w-4 h-4 text-purple-400/30" />
        </div>
        <div className="absolute bottom-1/3 right-20 animate-float-delayed">
          <Zap className="w-6 h-6 text-blue-400/30" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container-custom text-center">
          {/* Central Branding with Logo - More Rounded with Pink */}
          <motion.div 
            className="flex items-center justify-center gap-8 mb-10 mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Use the exact logo image the user provided */}
              <img
                src="/logo.png?v=5"
                alt="Peplike AI Logo"
                width={72}
                height={72}
                className="w-18 h-18 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/30 rounded-full blur-2xl animate-pulse-glow"></div>
              {/* Enhanced orbiting particles - balanced colors */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full animate-rotate-slow" style={{ transformOrigin: '0 36px' }}></div>
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-purple-400 rounded-full animate-rotate-slow" style={{ transformOrigin: '36px 0', animationDelay: '2s' }}></div>
                <div className="absolute bottom-0 right-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-rotate-slow" style={{ transformOrigin: '0 -36px', animationDelay: '4s' }}></div>
                <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-blue-300 rounded-full animate-rotate-slow" style={{ transformOrigin: '-36px 18px', animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-purple-300 rounded-full animate-rotate-slow" style={{ transformOrigin: '36px -18px', animationDelay: '3s' }}></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-7xl font-bold text-gray-900 animate-float">
                Peplike AI
              </h1>
              <div className="flex items-center justify-center space-x-3 mt-3">
                <Sparkles className="h-5 w-5 text-blue-500 animate-pulse" />
                <span className="text-base text-gray-600 font-medium">Research Platform</span>
                <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </motion.div>

          {/* Enhanced Tagline with More Pink */}
          <motion.h2 
            className="text-3xl font-medium text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover and research cutting-edge 
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent font-semibold animate-float"> peptides</span> for 
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold animate-float"> scientific breakthroughs</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Powered by AI-driven research intelligence to accelerate peptide discovery and development
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              onClick={() => navigate("/library")}
              className="w-full sm:w-auto px-10 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center relative z-10">
                <Library className="h-6 w-6 mr-3 animate-bounce-gentle" />
                Explore Library
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>
            
            <Button
              onClick={() => navigate("/stacks")}
              className="w-full sm:w-auto px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center">
                <Plus className="h-6 w-6 mr-3 animate-scale-pulse" />
                Stack Creator
                <Sparkles className="h-5 w-5 ml-2 animate-pulse" />
              </div>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-6">
        <div className="container-custom">
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search peptides, compounds, or research papers..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="stats-card">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Peptide Compounds</p>
            </div>
            <div className="stats-card">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">100+</h3>
              <p className="text-gray-600">Research Papers</p>
            </div>
            <div className="stats-card">
              <h3 className="text-4xl font-bold text-green-600 mb-2">24/7</h3>
              <p className="text-gray-600">AI Research Support</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
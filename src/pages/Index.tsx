import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Sparkles, Atom, ArrowRight, BookOpen, MessageSquare, Users, Star } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/directory?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const examplePrompts = [
    {
      title: "Find peptides for muscle recovery",
      description: "Show me compounds that help with post-workout recovery and healing",
      icon: "💪",
    },
    {
      title: "Research nootropics for focus",
      description: "I need cognitive enhancers for improved concentration and memory",
      icon: "🧠",
    },
    {
      title: "Anti-aging compounds database",
      description: "Explore peptides and compounds for skin regeneration and longevity",
      icon: "⚡",
    },
    {
      title: "Create a research stack",
      description: "Help me design a compound stack for specific research goals",
      icon: "🔬",
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Library",
      description: "Browse our extensive database of research compounds, peptides, and nootropics with detailed information.",
      action: () => navigate("/directory")
    },
    {
      icon: MessageSquare,
      title: "AI Stack Creator",
      description: "Get personalized compound recommendations based on your research goals and requirements.",
      action: () => navigate("/stack-creator")
    },
    {
      icon: Users,
      title: "Research Community",
      description: "Connect with researchers and access verified data from our growing community.",
      action: () => navigate("/about")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 flex flex-col">
      {/* Header */}
      <motion.header 
        className="px-6 py-4 border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-lg opacity-30" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Peplike
            </span>
          </motion.div>
          
          <nav className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => navigate("/directory")}
            >
              Library
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => navigate("/stack-creator")}
            >
              Stack Creator
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Hero Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div 
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl blur-xl opacity-50 animate-pulse" />
              </motion.div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-4">
              Research made simple
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Explore cutting-edge peptides, nootropics, and research compounds with AI-powered insights and comprehensive data.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                <Input
                  type="text"
                  placeholder="Search compounds, peptides, nootropics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 text-lg bg-white/5 border-white/20 rounded-xl text-white placeholder-white/40 focus:bg-white/10 focus:border-cyan-400/50 transition-all duration-300"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 rounded-lg px-4 py-2"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Example Prompts */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {examplePrompts.map((prompt, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    setSearchTerm(prompt.title);
                    navigate(`/directory?search=${encodeURIComponent(prompt.title)}`);
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{prompt.icon}</span>
                      <div className="text-left">
                        <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {prompt.title}
                        </h3>
                        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                          {prompt.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group h-full">
                  <CardContent className="p-6" onClick={feature.action}>
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="px-6 py-4 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-white/40">
          <p>© 2024 Peplike. Research purposes only.</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white/40 hover:text-white/60">
              About
            </Button>
            <Button variant="ghost" size="sm" className="text-white/40 hover:text-white/60">
              Contact
            </Button>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;

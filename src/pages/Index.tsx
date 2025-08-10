import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Mic, User, BookOpen, Menu } from "lucide-react";

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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-50 to-cyan-100 flex flex-col items-center justify-center px-6">
      {/* Hamburger Menu */}
      <div className="absolute top-6 left-6">
        <Button 
          variant="ghost" 
          size="sm"
          className="p-2 text-gray-600 hover:text-gray-800 hover:bg-white/50"
          onClick={() => navigate("/directory")}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Main Content */}
      <div className="w-full max-w-3xl mx-auto text-center space-y-8">
        
        {/* Hero Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Introducing Peplike AI
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Peplike now has our smartest, fastest, most useful model yet,<br />
            with research built in — so you get the best answer, every time.
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearch} className="relative">
            <div className="relative bg-white rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Plus className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Ask anything"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-20 py-4 text-lg bg-transparent border-0 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 rounded-full hover:bg-gray-100"
                >
                  <Mic className="h-4 w-4 text-gray-400" />
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 border-0"
                >
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Example Prompts */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {examplePrompts.map((prompt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
            >
              <Card 
                className="bg-white/60 hover:bg-white/80 border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setSearchTerm(prompt.description)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{prompt.icon}</span>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{prompt.title}</h3>
                      <p className="text-sm text-gray-600">{prompt.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Access */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Button 
            variant="outline"
            className="flex items-center gap-2 bg-white/80 hover:bg-white border-gray-200 text-gray-700 px-6 py-3 rounded-full"
            onClick={() => navigate("/directory")}
          >
            <BookOpen className="h-4 w-4" />
            Browse Library
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

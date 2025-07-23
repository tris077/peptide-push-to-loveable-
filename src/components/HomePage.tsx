import { useState, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SearchBar } from "./SearchBar";
import { EnhancedFilterSidebar } from "./EnhancedFilterSidebar";
import { InteractiveCard } from "./InteractiveCard";
import { TrendingCarousel } from "./TrendingCarousel";
import { HeroScene } from "./3D/HeroScene";
import { peptidesData } from "@/data/peptides";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Shield, Activity, ArrowRight, Moon, Sun, Sparkles } from "lucide-react";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const filteredPeptides = useMemo(() => {
    return peptidesData.filter(peptide => {
      const matchesSearch = peptide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          peptide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          peptide.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All Categories" || 
                            peptide.category.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const trendingPeptides = peptidesData.filter(p => p.trending);

  const handleSearch = () => {
    // Search is already reactive through useMemo
  };

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(185_100%_65%_/_0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(260_60%_75%_/_0.2),transparent_50%)]" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{ x: [-100, window.innerWidth + 100] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Dark mode toggle */}
      <motion.div 
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="w-14 h-14 rounded-full bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-110 group"
        >
          <motion.div
            animate={{ rotate: isDarkMode ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-400 group-hover:text-yellow-300" />
            ) : (
              <Moon className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300" />
            )}
          </motion.div>
        </Button>
      </motion.div>

      {/* Premium Hero Section */}
      <motion.div 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* 3D Hero Scene */}
        <div className="absolute inset-0 z-10">
          <HeroScene />
        </div>
        
        <div className="container mx-auto px-8 relative z-20">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="flex items-center justify-center gap-6 mb-8"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div 
                  className="relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl blur-xl opacity-50 animate-pulse" />
                </motion.div>
                
                <motion.h1 
                  className="text-8xl md:text-9xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
                  animate={{ 
                    textShadow: ["0 0 20px rgba(0,191,255,0.5)", "0 0 40px rgba(0,191,255,0.8)", "0 0 20px rgba(0,191,255,0.5)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Peplike
                </motion.h1>
              </motion.div>
              
              <motion.p 
                className="text-3xl md:text-4xl text-cyan-300 font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Next-Gen Biotech Marketplace
              </motion.p>
              
              <motion.p 
                className="text-xl text-white/80 mb-20 max-w-5xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Explore premium peptides, cutting-edge nootropics, and research chemicals 
                with immersive 3D previews, verified data, and biotech-grade insights.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                onSearch={handleSearch}
                placeholder="Search premium compounds, nootropics, peptides..."
              />
            </motion.div>

            <motion.div 
              className="flex justify-center gap-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { icon: Shield, text: "Research Grade", color: "from-green-500 to-emerald-500" },
                { icon: Zap, text: "Lab Verified", color: "from-yellow-500 to-orange-500" },
                { icon: Activity, text: "Real-Time Data", color: "from-purple-500 to-pink-500" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className={`flex items-center gap-4 text-base bg-black/20 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10 hover:border-white/30 transition-all duration-500 group`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <motion.div
                    className={`p-2 bg-gradient-to-r ${item.color} rounded-full`}
                    whileHover={{ rotate: 15 }}
                  >
                    <item.icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-20 relative z-10">
        {/* Trending Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-12">
            <motion.div 
              className="flex items-center gap-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl shadow-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h2 className="text-4xl font-black text-white mb-2">Trending Compounds</h2>
                <p className="text-cyan-400 text-lg">Most explored this week</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-glow transition-all duration-500">
                View All
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          
          <TrendingCarousel peptides={trendingPeptides} />
        </motion.div>

        {/* Browse Section */}
        <motion.div 
          className="flex gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Enhanced Sidebar */}
          <div className="hidden lg:block">
            <EnhancedFilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Results Grid */}
          <div className="flex-1">
            <motion.div 
              className="flex items-center justify-between mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-4xl font-black text-white mb-3">
                  Premium Library
                  {selectedCategory !== "All Categories" && (
                    <span className="text-cyan-400"> · {selectedCategory}</span>
                  )}
                </h2>
                <motion.p 
                  className="text-cyan-300 text-lg"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {filteredPeptides.length} compounds available for research
                </motion.p>
              </div>
            </motion.div>

            {filteredPeptides.length === 0 ? (
              <motion.div 
                className="text-center py-24"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-xl border border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-6xl">🔬</span>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">No compounds found</h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto text-lg">
                  Try adjusting your search terms or filter criteria to discover more premium compounds
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500 px-8 py-4 rounded-full font-bold text-lg"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All Categories");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {filteredPeptides.map((peptide, index) => (
                  <InteractiveCard
                    key={peptide.id}
                    peptide={peptide}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
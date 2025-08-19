import { useState, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { EnhancedFilterSidebar } from "./EnhancedFilterSidebar";
import { InteractiveCard } from "./InteractiveCard";
import { TrendingCarousel } from "./TrendingCarousel";
import { peptidesData } from "@/data/peptides";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  Activity, 
  ArrowRight, 
  Sparkles, 
  Atom, 
  Library, 
  Search,
  Filter,
  Grid3X3,
  List,
  Brain,
  TestTube,
  Microscope,
  Rocket,
  ChevronRight,
  Star,
  Clock,
  Users
} from "lucide-react";

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  // Handle search parameter from URL
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);

  const filteredPeptides = useMemo(() => {
    return peptidesData.filter(peptide => {
      const searchLower = searchTerm.toLowerCase();
      
      // Check if search term matches the peptide name (including aliases)
      const nameMatch = peptide.name.toLowerCase().includes(searchLower);
      
      // Check if search term matches any alias in parentheses
      const aliasMatch = peptide.name.match(/^(.+?)\s*\((.+?)\)$/);
      const hasAliasMatch = aliasMatch && (
        aliasMatch[1].trim().toLowerCase().includes(searchLower) ||
        aliasMatch[2].trim().toLowerCase().includes(searchLower)
      );
      
      // Check other fields
      const descriptionMatch = peptide.shortDescription.toLowerCase().includes(searchLower) ||
                              peptide.fullDescription.toLowerCase().includes(searchLower);
      const categoryMatch = peptide.category.some(cat => cat.toLowerCase().includes(searchLower));
      const useCaseMatch = peptide.useCases.some(useCase => useCase.toLowerCase().includes(searchLower));
      const benefitMatch = peptide.benefits.some(benefit => benefit.toLowerCase().includes(searchLower));
      
      const matchesSearch = nameMatch || hasAliasMatch || descriptionMatch || categoryMatch || useCaseMatch || benefitMatch;
      
      const matchesCategory = selectedCategory === "All Categories" || 
                            peptide.category.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const trendingPeptides = peptidesData.filter(p => p.trending);

  const handleSearch = () => {
    if (searchTerm.trim() && filteredPeptides.length > 0) {
      // Prioritize exact name matches first
      const exactNameMatch = filteredPeptides.find(peptide => 
        peptide.name.toLowerCase() === searchTerm.toLowerCase()
      );
      
      // Then check for exact alias matches
      const exactAliasMatch = filteredPeptides.find(peptide => {
        const aliasMatch = peptide.name.match(/^(.+?)\s*\((.+?)\)$/);
        if (aliasMatch) {
          const mainName = aliasMatch[1].trim();
          const alias = aliasMatch[2].trim();
          return mainName.toLowerCase() === searchTerm.toLowerCase() || 
                 alias.toLowerCase() === searchTerm.toLowerCase();
        }
        return false;
      });
      
      // Then check for partial name matches
      const partialNameMatch = filteredPeptides.find(peptide => 
        peptide.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      const bestMatch = exactNameMatch || exactAliasMatch || partialNameMatch || filteredPeptides[0];
      navigate(`/compound/${bestMatch.id}`);
    }
  };

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const stats = [
    { icon: TestTube, label: "Compounds", value: "50+", color: "from-blue-500 to-cyan-500" },
    { icon: Brain, label: "Categories", value: "8+", color: "from-purple-500 to-pink-500" },
    { icon: Users, label: "Researchers", value: "10K+", color: "from-green-500 to-emerald-500" },
    { icon: Clock, label: "Updated", value: "24/7", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(220_100%_70%_/_0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(260_60%_75%_/_0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(200_100%_60%_/_0.05),transparent_70%)]" />
        
        {/* Floating AI particles */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full opacity-40"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50"
          animate={{ 
            x: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Hero Section */}
      <motion.div 
        className="relative pt-32 pb-20 text-gray-900"
        style={{ opacity: heroOpacity, transform: `scale(${heroScale})` }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container max-w-7xl mx-auto px-6 relative z-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Enhanced Logo & Title */}
            <motion.button 
              onClick={() => window.location.href = '/'}
              className="flex items-center justify-center gap-4 mb-8 cursor-pointer mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-sky-400 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25 relative overflow-hidden"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {/* New Logo Design - Clean Implementation */}
                <div className="relative w-12 h-12">
                  {/* Abstract double helix/A-shape design */}
                  <div className="absolute inset-0 w-1.5 h-full">
                    <div className="w-full h-full bg-gradient-to-b from-pink-400 to-blue-500 rounded-full transform rotate-12" />
                  </div>
                  <div className="absolute inset-0 w-1.5 h-full">
                    <div className="w-full h-full bg-gradient-to-b from-pink-400 to-blue-500 rounded-full transform -rotate-12" />
                  </div>
                  {/* Two white dots positioned at top-right and bottom-left */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-white rounded-full" />
                </div>
              </motion.div>
              <motion.h1 
                className="text-6xl font-black"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-charcoal-800">Peplike</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> AI</span>
              </motion.h1>
            </motion.button>

            {/* Enhanced Subtitle */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                AI-Powered Research Platform
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover, analyze, and research cutting-edge peptides and compounds with our comprehensive database
              </p>
            </motion.div>

            {/* Enhanced Search Bar */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                onSearch={handleSearch}
                placeholder="Search compounds, peptides, nootropics..."
              />
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, staggerChildren: 0.1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md`}>
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Trending Section */}
      <motion.div 
        className="relative z-10 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-100">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
              <motion.div 
                className="flex items-center gap-4"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="p-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">Trending Compounds</h2>
                  <p className="text-gray-600 text-sm">Most researched this week</p>
                </div>
              </motion.div>
            </div>
            
            <TrendingCarousel peptides={trendingPeptides} />
          </div>
        </div>
      </motion.div>

      {/* Main Research Library */}
      <div className="container max-w-7xl mx-auto px-4 pb-16 relative z-10">
        <motion.div 
          className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Enhanced background effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
            <div className="absolute bottom-8 right-8 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 right-12 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-1/3 left-12 w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Library className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Research Library
                    {selectedCategory !== "All Categories" && (
                      <Badge className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs shadow-lg shadow-purple-500/25">
                        {selectedCategory}
                      </Badge>
                    )}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {filteredPeptides.length} compounds available for research
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Controls */}
            <div className="flex items-center gap-3">
              {/* Mobile Filter Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 h-8 px-3 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>

              {/* Enhanced View Mode Toggle */}
              <div className="flex items-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-1 shadow-inner">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`h-8 px-3 transition-all duration-200 ${
                    viewMode === "grid" 
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`h-8 px-3 transition-all duration-200 ${
                    viewMode === "list" 
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Enhanced Sidebar */}
            <div className={`lg:w-72 transition-all duration-300 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <EnhancedFilterSidebar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* Enhanced Results Section */}
            <div className="flex-1">
              {filteredPeptides.length === 0 ? (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Search className="h-10 w-10 text-gray-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">No compounds found</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
                    Try adjusting your search terms or filter criteria to discover more compounds
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All Categories");
                    }}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 h-8 px-4 transition-all duration-200 hover:border-blue-300 hover:text-blue-700"
                  >
                    Clear All Filters
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredPeptides.map((peptide, index) => (
                        <motion.div
                          key={peptide.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.4 }}
                          whileHover={{ y: -5 }}
                        >
                          <InteractiveCard
                            peptide={peptide}
                            index={index}
                            viewMode={viewMode}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredPeptides.map((peptide, index) => (
                        <motion.div
                          key={peptide.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.4 }}
                          whileHover={{ x: 5 }}
                        >
                          <InteractiveCard
                            peptide={peptide}
                            index={index}
                            viewMode={viewMode}
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
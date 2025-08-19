import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { TrendingCarousel } from './TrendingCarousel';
import { InteractiveCard } from './InteractiveCard';
import { EnhancedFilterSidebar } from './EnhancedFilterSidebar';
import { peptidesData } from '../data/peptides';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Sparkles, Zap, Target, Beaker, TrendingUp, ArrowRight, Search } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 600], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  
  const isStatsInView = useInView(statsRef, { once: true });

  // Filter peptides based on search and category
  const filteredPeptides = useMemo(() => {
    let filtered = peptidesData;

    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(peptide => 
        peptide.category?.includes(selectedCategory)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(peptide =>
        peptide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        peptide.shortDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        peptide.fullDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        peptide.category?.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    const term = searchParams.get('search');
    if (term) {
      setSearchTerm(term);
    }
  }, [searchParams]);

  // Get trending peptides (those marked as trending)
  const trendingPeptides = useMemo(() => {
    return peptidesData.filter(peptide => peptide.trending);
  }, []);

  const handleSearch = (searchTermParam?: string) => {
    const term = searchTermParam || searchTerm;
    if (!term.trim()) return;
    
    const bestMatch = peptidesData.find(peptide =>
      peptide.name.toLowerCase().includes(term.toLowerCase())
    );
    
    if (bestMatch) {
      navigate(`/compound/${bestMatch.id}`);
    }
  };

  const stats = [
    { number: '200+', label: 'Research Compounds', icon: Beaker },
    { number: '10K+', label: 'Research Papers', icon: Target },
    { number: '50+', label: 'Categories', icon: Sparkles },
    { number: '24/7', label: 'AI Support', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative overflow-hidden pt-32 pb-20"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-xl"
            animate={{ 
              y: [0, -20, 0], 
              x: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-accent rounded-full opacity-15 blur-lg"
            animate={{ 
              y: [0, 15, 0], 
              x: [0, -15, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent-purple/10 rounded-full blur-2xl"
            animate={{ 
              y: [0, -10, 0], 
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 glass-card border border-accent/20 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">AI-Powered Research Platform</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Peplike AI
              </span>
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover, research, and optimize peptides with our comprehensive AI-powered platform. 
              Your gateway to cutting-edge biohacking research.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto mb-12"
          >
            <SearchBar 
              onSearch={handleSearch}
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-blue transition-all duration-300 px-8 py-4 rounded-xl font-semibold"
              onClick={() => navigate('/directory')}
            >
              <Beaker className="h-5 w-5 mr-2" />
              Browse Directory
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-8 py-4 rounded-xl font-semibold"
              onClick={() => navigate('/chat')}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Ask AI Assistant
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <motion.div
                  className="text-3xl font-bold text-foreground mb-1"
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trending Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <motion.div 
              className="flex items-center gap-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-hero">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-2">Trending Compounds</h2>
                <p className="text-muted-foreground text-lg">Most explored this week</p>
              </div>
            </motion.div>
            
            <Button
              variant="outline"
              className="hidden md:flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => navigate('/directory')}
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <TrendingCarousel peptides={trendingPeptides} />
        </div>
      </motion.section>

      {/* Library Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            {/* Enhanced Sidebar */}
            <div className="hidden lg:block w-80">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <EnhancedFilterSidebar
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </motion.div>
            </div>

            {/* Results Grid */}
            <div className="flex-1">
              <motion.div 
                className="flex items-center justify-between mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-2">
                    Research Library
                    {selectedCategory !== "All Categories" && (
                      <span className="text-accent"> · {selectedCategory}</span>
                    )}
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    {filteredPeptides.length} compounds available for research
                  </p>
                </div>
              </motion.div>

              {filteredPeptides.length === 0 ? (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-24 h-24 bg-gradient-soft rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                    <Search className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">No compounds found</h3>
                  <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                    Try adjusting your search terms or filter criteria to discover more compounds
                  </p>
                  <Button 
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All Categories");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </motion.div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, staggerChildren: 0.05 }}
                >
                  <AnimatePresence mode="popLayout">
                    {filteredPeptides.map((peptide, index) => (
                      <motion.div
                        key={peptide.id}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        layout
                      >
                        <InteractiveCard
                          peptide={peptide}
                          index={index}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
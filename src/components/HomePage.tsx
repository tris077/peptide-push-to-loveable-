import { useState, useMemo } from "react";
import { SearchBar } from "./SearchBar";
import { FilterSidebar } from "./FilterSidebar";
import { CompoundCard } from "./CompoundCard";
import { TrendingCarousel } from "./TrendingCarousel";
import { peptidesData } from "@/data/peptides";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Shield, Activity, ArrowRight } from "lucide-react";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

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

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Premium Hero Section */}
      <div className="relative bg-gradient-primary text-white py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(191_95%_60%_/_0.3),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-slide-up">
              <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                PeptideBase
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-2">
                Premium Reference Hub for Modern Biohackers
              </p>
              <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Discover, research, and explore cutting-edge peptides and research chemicals 
                with comprehensive data, expert insights, and verified sources.
              </p>
            </div>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                onSearch={handleSearch}
                placeholder="Search peptides, nootropics, research chemicals..."
              />
            </div>

            <div className="flex justify-center gap-6 flex-wrap animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 text-sm bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Shield className="h-5 w-5 text-accent" />
                <span className="font-medium">Research Only</span>
              </div>
              <div className="flex items-center gap-3 text-sm bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Zap className="h-5 w-5 text-accent" />
                <span className="font-medium">Evidence-Based</span>
              </div>
              <div className="flex items-center gap-3 text-sm bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Activity className="h-5 w-5 text-accent" />
                <span className="font-medium">Comprehensive Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Trending Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-accent rounded-2xl shadow-glow">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary">Trending Compounds</h2>
                <p className="text-muted-foreground">Most viewed this week</p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center gap-2 hover:bg-accent hover:text-white transition-all duration-300">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <TrendingCarousel peptides={trendingPeptides} />
        </div>

        {/* Browse Section */}
        <div className="flex gap-12">
          {/* Enhanced Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Browse Library
                  {selectedCategory !== "All Categories" && (
                    <span className="text-accent"> · {selectedCategory}</span>
                  )}
                </h2>
                <p className="text-muted-foreground">
                  {filteredPeptides.length} compounds available
                </p>
              </div>
            </div>

            {filteredPeptides.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gradient-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔬</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">No compounds found</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Try adjusting your search terms or filter criteria to discover more compounds
                </p>
                <Button 
                  variant="accent" 
                  className="bg-gradient-accent text-white border-0 shadow-premium hover:shadow-glow hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Categories");
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPeptides.map((peptide, index) => (
                  <div 
                    key={peptide.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CompoundCard peptide={peptide} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
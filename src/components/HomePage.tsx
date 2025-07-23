import { useState, useMemo } from "react";
import { SearchBar } from "./SearchBar";
import { FilterSidebar } from "./FilterSidebar";
import { CompoundCard } from "./CompoundCard";
import { peptidesData } from "@/data/peptides";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Shield, Activity } from "lucide-react";

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
      {/* Hero Section */}
      <div className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 animate-float">
              PeptideBase
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Your comprehensive reference hub for peptides and research chemicals. 
              Discover, research, and explore cutting-edge compounds for biohacking, 
              cognitive enhancement, and scientific research.
            </p>
            
            <div className="mb-8">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                onSearch={handleSearch}
              />
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm bg-primary-foreground/20 px-4 py-2 rounded-full">
                <Shield className="h-4 w-4" />
                Research Only
              </div>
              <div className="flex items-center gap-2 text-sm bg-primary-foreground/20 px-4 py-2 rounded-full">
                <Zap className="h-4 w-4" />
                Evidence-Based
              </div>
              <div className="flex items-center gap-2 text-sm bg-primary-foreground/20 px-4 py-2 rounded-full">
                <Activity className="h-4 w-4" />
                Comprehensive Data
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Trending Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold text-primary">Trending Compounds</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPeptides.map((peptide) => (
              <CompoundCard key={peptide.id} peptide={peptide} />
            ))}
          </div>
        </div>

        {/* Browse Section */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary">
                Browse Compounds
                {selectedCategory !== "All Categories" && (
                  <span className="text-accent"> · {selectedCategory}</span>
                )}
              </h2>
              <div className="text-sm text-muted-foreground">
                {filteredPeptides.length} compounds found
              </div>
            </div>

            {filteredPeptides.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-primary mb-2">No compounds found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                <Button 
                  variant="accent" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Categories");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPeptides.map((peptide) => (
                  <CompoundCard key={peptide.id} peptide={peptide} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
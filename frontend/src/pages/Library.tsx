import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "../components/Navigation";
import PeptideCard from "../components/PeptideCard";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [routeFilter, setRouteFilter] = useState("all");

  const peptides = [
    {
      name: "BPC-157",
      category: "Recovery" as const,
      route: "Injection" as const,
      description: "Body Protection Compound promotes healing and tissue repair through enhanced angiogenesis.",
      insight: "Most researched for gastric ulcers and tendon injuries with remarkable healing properties.",
      image: "bpc-157"
    },
    {
      name: "TB-500",
      category: "Recovery" as const,
      route: "Injection" as const,
      description: "Thymosin Beta-4 fragment accelerates wound healing and reduces inflammation.",
      insight: "Particularly effective for muscle, tendon, and ligament injuries in research studies.",
      image: "tb-500"
    },
    {
      name: "Ipamorelin",
      category: "Performance" as const,
      route: "Injection" as const,
      description: "Growth hormone releasing peptide that stimulates natural GH production.",
      insight: "Selective GHRP with minimal impact on cortisol and prolactin levels.",
      image: "ipamorelin"
    },
    {
      name: "Melanotan II",
      category: "Aesthetic" as const,
      route: "Injection" as const,
      description: "Melanocyte stimulating hormone analog for tanning and appetite suppression.",
      insight: "Research shows significant melanogenesis activation with proper dosing protocols.",
      image: "melanotan-ii"
    },
    {
      name: "Noopept",
      category: "Brain" as const,
      route: "Oral" as const,
      description: "Nootropic peptide that enhances cognitive function and memory formation.",
      insight: "Shows neuroprotective effects and improved learning capacity in studies.",
      image: "noopept"
    },
    {
      name: "Epitalon",
      category: "Recovery" as const,
      route: "Injection" as const,
      description: "Tetrapeptide that may influence telomerase activity and cellular aging.",
      insight: "Research suggests potential anti-aging effects through telomere regulation.",
      image: "epitalon"
    },
    {
      name: "PT-141",
      category: "Performance" as const,
      route: "Nasal" as const,
      description: "Melanocortin receptor agonist studied for various physiological effects.",
      insight: "Unique mechanism targeting melanocortin pathways in the central nervous system.",
      image: "pt-141"
    },
    {
      name: "Hexarelin",
      category: "Performance" as const,
      route: "Injection" as const,
      description: "Potent growth hormone releasing peptide with strong GH stimulation.",
      insight: "Most potent GHRP but may cause desensitization with prolonged use.",
      image: "hexarelin"
    }
  ];

  const filteredPeptides = peptides.filter(peptide => {
    const matchesSearch = peptide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         peptide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || peptide.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesRoute = routeFilter === "all" || peptide.route.toLowerCase() === routeFilter.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesRoute;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-secondary/8 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Large rotating gradient */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '60s' }}></div>
        
        {/* Molecular-style floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-secondary/35 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.8s' }}></div>
        
        {/* Connecting lines effect */}
        <div className="absolute top-1/4 left-1/3 w-32 h-0.5 bg-gradient-to-r from-primary/20 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-0.5 bg-gradient-to-r from-accent/20 to-transparent -rotate-12 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/2 w-20 h-0.5 bg-gradient-to-r from-secondary/20 to-transparent rotate-90 animate-pulse delay-1400"></div>
      </div>
      
      <Navigation />
      
      <div className="relative pt-20 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center py-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/6ca13bba-366e-4ba7-9afd-19a7fae4bfc2.png" 
              alt="Logo" 
              className="h-32 w-auto animate-fade-in"
            />
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4 animate-fade-in">Research Library</h1>
          <p className="text-muted-foreground text-lg animate-fade-in delay-300">Comprehensive database of research peptides with scientific insights</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4 animate-fade-in delay-500">
          {/* Search Bar */}
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 transition-colors group-focus-within:text-primary" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search peptides..."
              className="pl-10 rounded-xl border-border/50 bg-background/80 backdrop-blur-sm hover:border-primary/30 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:shadow-lg"
            />
          </div>

          {/* Category Filter */}
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-48 rounded-xl border-border/50 bg-background/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <SelectValue placeholder="Category" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="muscle">Muscle</SelectItem>
              <SelectItem value="brain">Brain</SelectItem>
              <SelectItem value="aesthetic">Aesthetic</SelectItem>
              <SelectItem value="recovery">Recovery</SelectItem>
              <SelectItem value="performance">Performance</SelectItem>
            </SelectContent>
          </Select>

          {/* Route Filter */}
          <Select value={routeFilter} onValueChange={setRouteFilter}>
            <SelectTrigger className="w-full md:w-48 rounded-xl border-border/50 bg-background/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <SelectValue placeholder="Route" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Routes</SelectItem>
              <SelectItem value="injection">Injection</SelectItem>
              <SelectItem value="oral">Oral</SelectItem>
              <SelectItem value="nasal">Nasal</SelectItem>
              <SelectItem value="topical">Topical</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6 animate-fade-in delay-700">
          <p className="text-muted-foreground">
            Showing <span className="text-primary font-semibold">{filteredPeptides.length}</span> of <span className="text-primary font-semibold">{peptides.length}</span> peptides
          </p>
        </div>

        {/* Peptide Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
          {filteredPeptides.map((peptide, index) => (
            <PeptideCard 
              key={index} 
              {...peptide}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` } as any}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredPeptides.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.1)] to-[hsl(var(--peplike-purple)/0.1)] flex items-center justify-center">
              <Search className="w-8 h-8 text-[hsl(var(--peplike-purple))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No peptides found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
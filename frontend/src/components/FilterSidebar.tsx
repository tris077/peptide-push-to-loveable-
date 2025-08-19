import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/peptides";

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FilterSidebar = ({ selectedCategory, onCategoryChange }: FilterSidebarProps) => {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('cognitive') || category.toLowerCase().includes('nootropic')) return '🧠';
    if (category.toLowerCase().includes('muscle') || category.toLowerCase().includes('growth')) return '💪';
    if (category.toLowerCase().includes('fat') || category.toLowerCase().includes('weight')) return '🔥';
    if (category.toLowerCase().includes('hair') || category.toLowerCase().includes('cosmetic')) return '✨';
    if (category.toLowerCase().includes('recovery')) return '🔄';
    return '🧬';
  };

  return (
    <Card className="w-80 h-fit bg-white/95 backdrop-blur-sm border border-border/20 shadow-premium sticky top-8">
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 pointer-events-none rounded-xl" />
      
      <CardHeader className="relative z-10 pb-6">
        <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
          <div className="p-2 bg-gradient-accent rounded-xl shadow-glow">
            <span className="text-2xl">🔬</span>
          </div>
          Filter Categories
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full group flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] ${
              selectedCategory === category 
                ? "bg-gradient-accent text-white shadow-glow border-2 border-accent/50 animate-pulse-glow" 
                : "bg-white/80 hover:bg-white text-primary border border-border/30 hover:border-accent/40 hover:shadow-premium"
            }`}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              selectedCategory === category 
                ? 'bg-white/20' 
                : 'bg-accent/10 group-hover:bg-accent/20'
            }`}>
              <span className="text-xl">{getCategoryIcon(category)}</span>
            </div>
            <span className={`font-semibold text-lg transition-colors ${
              selectedCategory === category ? 'text-white' : 'text-foreground group-hover:text-accent'
            }`}>
              {category}
            </span>
          </button>
        ))}
      </CardContent>
    </Card>
  );
};
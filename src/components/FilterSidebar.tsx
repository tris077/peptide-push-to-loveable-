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
    <Card className="w-72 h-fit bg-gradient-card backdrop-blur-xs border-0 shadow-glass sticky top-8">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none rounded-lg" />
      
      <CardHeader className="relative z-10 pb-4">
        <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
          <span className="text-2xl">🔬</span>
          Filter Categories
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full group flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 hover:scale-[1.02] ${
              selectedCategory === category 
                ? "bg-gradient-accent text-white shadow-glow border-2 border-accent/50" 
                : "bg-white/60 hover:bg-white/80 text-primary border border-border/30 hover:border-accent/30 hover:shadow-premium"
            }`}
          >
            <span className="text-xl">{getCategoryIcon(category)}</span>
            <span className={`font-medium transition-colors ${
              selectedCategory === category ? 'text-white' : 'text-primary group-hover:text-accent'
            }`}>
              {category}
            </span>
          </button>
        ))}
      </CardContent>
    </Card>
  );
};
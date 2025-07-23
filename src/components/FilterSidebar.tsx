import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/peptides";

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FilterSidebar = ({ selectedCategory, onCategoryChange }: FilterSidebarProps) => {
  return (
    <Card className="w-64 h-fit shadow-elegant">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary">
          Filter by Category
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className={`w-full justify-start cursor-pointer transition-all hover:scale-105 ${
              selectedCategory === category 
                ? "bg-primary text-primary-foreground shadow-glow" 
                : "hover:bg-accent"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};
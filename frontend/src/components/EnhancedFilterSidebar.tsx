import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/peptides";
import { Search, Filter } from "lucide-react";

interface EnhancedFilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const EnhancedFilterSidebar = ({ selectedCategory, onCategoryChange }: EnhancedFilterSidebarProps) => {
  return (
    <div className="filter-rail">
      <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="pb-4 px-0">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-4 w-4 text-text-secondary" />
            <CardTitle className="text-lg font-semibold text-text-primary">Filters</CardTitle>
          </div>
          <p className="text-sm text-text-secondary">Refine your search</p>
        </CardHeader>
        
        <CardContent className="px-0 space-y-4">
          {/* Search Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
              <Input
                placeholder="Search compounds..."
                className="pl-10 search-input"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">Categories</label>
            <div className="space-y-2">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                
                return (
                  <motion.button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      isSelected 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                    }`}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Display */}
          {selectedCategory && selectedCategory !== "All Categories" && (
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text-primary">Active Filter</span>
                <button
                  onClick={() => onCategoryChange("All Categories")}
                  className="text-xs text-text-muted hover:text-text-primary transition-colors duration-200"
                >
                  Clear
                </button>
              </div>
              <Badge className="badge-primary">
                {selectedCategory}
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
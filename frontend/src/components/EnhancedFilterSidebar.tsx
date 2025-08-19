import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/peptides";
import { Brain, Dumbbell, Flame, Sparkles, RotateCcw, Atom, Zap, Shield, Activity, Filter } from "lucide-react";

interface EnhancedFilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const EnhancedFilterSidebar = ({ selectedCategory, onCategoryChange }: EnhancedFilterSidebarProps) => {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('skin') || category.toLowerCase().includes('anti-aging')) return Sparkles;
    if (category.toLowerCase().includes('hair')) return Brain;
    if (category.toLowerCase().includes('fat') || category.toLowerCase().includes('recomposition')) return Flame;
    if (category.toLowerCase().includes('muscle') || category.toLowerCase().includes('definition')) return Dumbbell;
    if (category.toLowerCase().includes('tanning') || category.toLowerCase().includes('pigmentation')) return Sparkles;
    if (category.toLowerCase().includes('jawline') || category.toLowerCase().includes('facial')) return Shield;
    if (category.toLowerCase().includes('wound') || category.toLowerCase().includes('recovery')) return RotateCcw;
    if (category.toLowerCase().includes('libido') || category.toLowerCase().includes('sexual')) return Activity;
    if (category.toLowerCase().includes('mood') || category.toLowerCase().includes('cognition')) return Brain;
    if (category.toLowerCase().includes('eye')) return Zap;
    return Atom;
  };

  const getCategoryColor = (category: string, index: number) => {
    const colors = [
      { bg: 'from-blue-500 to-cyan-500', text: 'text-blue-100', border: 'border-blue-300/50', glow: 'shadow-blue-500/25' },
      { bg: 'from-purple-500 to-pink-500', text: 'text-purple-100', border: 'border-purple-300/50', glow: 'shadow-purple-500/25' },
      { bg: 'from-green-500 to-emerald-500', text: 'text-green-100', border: 'border-green-300/50', glow: 'shadow-green-500/25' },
      { bg: 'from-orange-500 to-red-500', text: 'text-orange-100', border: 'border-orange-300/50', glow: 'shadow-orange-500/25' },
      { bg: 'from-indigo-500 to-blue-500', text: 'text-indigo-100', border: 'border-indigo-300/50', glow: 'shadow-indigo-500/25' },
      { bg: 'from-pink-500 to-rose-500', text: 'text-pink-100', border: 'border-pink-300/50', glow: 'shadow-pink-500/25' },
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-80 h-fit bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border border-slate-700/50 shadow-2xl sticky top-8 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent"
            animate={{ x: [-100, 400] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          {/* Floating particles */}
          <div className="absolute top-8 left-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60" />
          <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
        </div>
        
        <CardHeader className="relative z-10 pb-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <motion.div 
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/25"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Filter className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <div className="text-white font-bold">Filters</div>
                <div className="text-slate-300 text-sm font-normal">Refine your search</div>
              </div>
            </CardTitle>
          </motion.div>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-3">
          <AnimatePresence>
            {categories.map((category, index) => {
              const Icon = getCategoryIcon(category);
              const colorScheme = getCategoryColor(category, index);
              const isSelected = selectedCategory === category;
              
              return (
                <motion.button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? `bg-gradient-to-r ${colorScheme.bg} shadow-lg ${colorScheme.glow} border border-white/20` 
                      : "bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 border border-slate-700/50 hover:border-slate-600/50 hover:shadow-lg"
                  }`}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <motion.div
                      className="absolute left-0 top-0 w-1 h-full bg-white rounded-r-full"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${colorScheme.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <motion.div 
                    className={`p-2.5 rounded-lg transition-all duration-300 ${
                      isSelected 
                        ? 'bg-white/20 shadow-md' 
                        : 'bg-slate-700/50 group-hover:bg-slate-600/50'
                    }`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Icon className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'} transition-colors duration-300`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <span className={`font-semibold text-base transition-colors duration-300 ${
                      isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                    }`}>
                      {category}
                    </span>
                    
                    {/* Active State Indicator */}
                    {isSelected && (
                      <motion.div
                        className="mt-1 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="text-white/80 text-xs font-medium">Active</span>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Selection Checkmark */}
                  {isSelected && (
                    <motion.div
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </AnimatePresence>
          
          {/* Enhanced Footer Stats */}
          <motion.div
            className="mt-6 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-blue-400 text-2xl font-bold mb-1">50+</div>
              <div className="text-slate-300 text-sm font-medium">Compounds Available</div>
              <div className="text-slate-400 text-xs mt-1">Updated daily</div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
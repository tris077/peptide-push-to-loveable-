import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/peptides";
import { Brain, Dumbbell, Flame, Sparkles, RotateCcw, Atom, Zap, Shield, Activity } from "lucide-react";

interface EnhancedFilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const EnhancedFilterSidebar = ({ selectedCategory, onCategoryChange }: EnhancedFilterSidebarProps) => {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('cognitive') || category.toLowerCase().includes('nootropic')) return Brain;
    if (category.toLowerCase().includes('muscle') || category.toLowerCase().includes('growth')) return Dumbbell;
    if (category.toLowerCase().includes('fat') || category.toLowerCase().includes('weight')) return Flame;
    if (category.toLowerCase().includes('hair') || category.toLowerCase().includes('cosmetic')) return Sparkles;
    if (category.toLowerCase().includes('recovery')) return RotateCcw;
    return Atom;
  };

  const getCategoryColor = (category: string, index: number) => {
    const colors = [
      { bg: 'from-blue-500 to-cyan-500', text: 'text-blue-100', border: 'border-blue-300/50' },
      { bg: 'from-purple-500 to-pink-500', text: 'text-purple-100', border: 'border-purple-300/50' },
      { bg: 'from-green-500 to-emerald-500', text: 'text-green-100', border: 'border-green-300/50' },
      { bg: 'from-orange-500 to-red-500', text: 'text-orange-100', border: 'border-orange-300/50' },
      { bg: 'from-indigo-500 to-blue-500', text: 'text-indigo-100', border: 'border-indigo-300/50' },
      { bg: 'from-pink-500 to-rose-500', text: 'text-pink-100', border: 'border-pink-300/50' },
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-80 h-fit bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl sticky top-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: [-100, 400] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <CardHeader className="relative z-10 pb-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <motion.div 
                className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-glow"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <div className="text-white">Filter Categories</div>
                <div className="text-cyan-400 text-sm font-normal">Select your focus area</div>
              </div>
            </CardTitle>
          </motion.div>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-4">
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
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full group flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-500 relative overflow-hidden ${
                    isSelected
                      ? `bg-gradient-to-r ${colorScheme.bg} shadow-2xl border-2 ${colorScheme.border}` 
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <motion.div
                      className="absolute left-0 top-0 w-1 h-full bg-white"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${colorScheme.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  
                  <motion.div 
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isSelected 
                        ? 'bg-white/20 shadow-lg' 
                        : 'bg-white/10 group-hover:bg-white/20'
                    }`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Icon className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-cyan-400 group-hover:text-white'} transition-colors duration-300`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <span className={`font-bold text-lg transition-colors duration-300 ${
                      isSelected ? 'text-white' : 'text-white group-hover:text-cyan-400'
                    }`}>
                      {category}
                    </span>
                    
                    {/* Active State Glow */}
                    {isSelected && (
                      <motion.div
                        className="mt-1 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="text-white/80 text-xs">Active Filter</span>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Particle Effect */}
                  {isSelected && (
                    <motion.div
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Activity className="h-5 w-5 text-white/60" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </AnimatePresence>
          
          {/* Footer Stats */}
          <motion.div
            className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-cyan-400 text-2xl font-bold">247</div>
              <div className="text-white/60 text-sm">Compounds Available</div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
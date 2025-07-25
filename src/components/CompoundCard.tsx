import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Peptide } from "@/data/peptides";
import { useNavigate } from "react-router-dom";

interface CompoundCardProps {
  peptide: Peptide;
}

export const CompoundCard = ({ peptide }: CompoundCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group relative overflow-hidden bg-white border border-border/20 shadow-premium hover:shadow-elevated hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer animate-fade-in min-h-[480px] flex flex-col">
      {/* Enhanced glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/30 pointer-events-none rounded-lg" />
      
      <CardHeader className="relative z-10 p-4 sm:p-6 flex flex-col items-center text-center flex-shrink-0">
        {peptide.trending && (
          <div className="absolute top-3 right-3 z-20">
            <Badge variant="accent" className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold shadow-glow animate-pulse-glow rounded-full">
              <TrendingUp className="h-3 w-3" />
              <span className="hidden sm:inline">Trending</span>
              <span className="sm:hidden">🔥</span>
            </Badge>
          </div>
        )}
        
        {/* Enhanced 3D preview with biotech aesthetic */}
        <div className="relative w-full h-40 sm:h-44 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 sm:mb-6 overflow-hidden group-hover:scale-105 transition-all duration-700 shadow-biotech group-hover:shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/60" />
          <div className="absolute inset-0 animate-rotate-slow opacity-10">
            <div className="w-full h-full border-2 border-white/20 rounded-full" />
          </div>
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elevated group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 animate-float">
            <span className="text-2xl sm:text-3xl font-bold text-primary">
              {peptide.name.charAt(0)}
            </span>
          </div>
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-xs text-white/90 font-bold bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
            3D Model
          </div>
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
        </div>
        
        <CardTitle className="text-lg sm:text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight mb-3 text-center">
          {peptide.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 flex flex-col items-center text-center space-y-4 p-4 sm:p-6 pt-0 flex-grow">
        {/* Enhanced category tags with biotech styling */}
        <div className="flex flex-wrap justify-center gap-2">
          {peptide.category.slice(0, 3).map((cat, index) => {
            const gradients = [
              'bg-gradient-accent text-white border-accent/30 shadow-glow',
              'bg-gradient-mint text-primary border-accent/30 shadow-glow-mint',
              'bg-gradient-lavender text-white border-accent/30 shadow-glow-lavender'
            ];
            return (
              <Badge 
                key={cat} 
                variant="secondary" 
                className={`text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-110 animate-scale-in truncate max-w-[110px] ${
                  gradients[index] || 'bg-muted/70 text-muted-foreground hover:bg-muted/90'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                title={cat}
              >
                {cat}
              </Badge>
            );
          })}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed text-center max-w-[280px]">
          {peptide.shortDescription}
        </p>
        
        <div className="flex flex-col items-center gap-3 pt-4 mt-auto">
          <div className="text-sm text-muted-foreground">
            <span className="font-bold text-primary">Half-life:</span>
            <span className="ml-2 font-semibold">{peptide.halfLife}</span>
          </div>
          <Button 
            variant="accent" 
            size="sm"
            onClick={() => navigate(`/compound/${peptide.id}`)}
            className="flex items-center justify-center gap-2 shadow-biotech hover:shadow-glow transition-all duration-500 hover:scale-105 bg-gradient-accent text-white border-0 px-6 py-2.5 rounded-full font-bold text-sm group max-w-[160px]"
          >
            <span className="truncate">Explore</span>
            <ExternalLink className="h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
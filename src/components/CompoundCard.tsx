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
    <Card className="group relative overflow-hidden bg-white border border-border/20 shadow-premium hover:shadow-elevated hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer animate-fade-in min-h-[340px] flex flex-col">
      {/* Enhanced glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/30 pointer-events-none rounded-lg" />
      
      <CardHeader className="relative z-10 p-3 sm:p-4 flex flex-col items-center text-center flex-shrink-0">
        {peptide.trending && (
          <div className="absolute top-1 right-1 z-20">
            <Badge variant="accent" className="flex items-center gap-1 px-2 py-1 text-xs font-bold shadow-glow animate-pulse-glow rounded-full">
              🔥
              <span className="hidden sm:inline text-xs">Trending</span>
            </Badge>
          </div>
        )}
        
        {/* Enhanced 3D preview with biotech aesthetic */}
        <div className="relative w-full h-32 sm:h-36 bg-gradient-accent rounded-xl flex items-center justify-center mb-3 sm:mb-4 overflow-hidden group-hover:scale-105 transition-all duration-700 shadow-biotech group-hover:shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/60" />
          <div className="absolute inset-0 animate-rotate-slow opacity-10">
            <div className="w-full h-full border-2 border-white/20 rounded-full" />
          </div>
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elevated group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 animate-float">
            <span className="text-xl sm:text-2xl font-bold text-primary">
              {peptide.name.charAt(0)}
            </span>
          </div>
          <div className="absolute bottom-1 right-2 text-xs text-white/90 font-bold bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full">
            Struct
          </div>
          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />
        </div>
        
        <CardTitle className="text-base sm:text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight mb-2 text-center">
          {peptide.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 flex flex-col items-center text-center space-y-3 p-3 sm:p-4 pt-0 flex-grow">
        {/* Enhanced category tags with biotech styling */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {peptide.category.slice(0, 2).map((cat, index) => {
            const gradients = [
              'bg-gradient-accent text-white border-accent/30 shadow-glow',
              'bg-gradient-mint text-primary border-accent/30 shadow-glow-mint'
            ];
            return (
              <Badge 
                key={cat} 
                variant="secondary" 
                className={`text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-110 animate-scale-in truncate max-w-[100px] ${
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
        
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed text-center max-w-[250px]">
          {peptide.shortDescription}
        </p>
        
        <div className="flex flex-col items-center pt-3 mt-auto">
          <Button 
            variant="accent" 
            size="sm"
            onClick={() => navigate(`/compound/${peptide.id}`)}
            className="flex items-center justify-center gap-1.5 shadow-biotech hover:shadow-glow transition-all duration-500 hover:scale-105 bg-gradient-accent text-white border-0 px-4 py-2 rounded-full font-bold text-xs group max-w-[140px] w-full"
          >
            <span className="truncate">Explore Compound</span>
            <ExternalLink className="h-3 w-3 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
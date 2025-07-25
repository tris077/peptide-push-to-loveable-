import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Peptide } from "@/data/peptides";
import { useNavigate } from "react-router-dom";

interface CompoundCardProps {
  peptide: Peptide;
}

export const CompoundCard = ({ peptide }: CompoundCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group relative overflow-hidden bg-white border border-border/20 shadow-premium hover:shadow-elevated hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer animate-fade-in h-[320px] flex flex-col animate-card-hover">
      {/* Enhanced glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/30 pointer-events-none rounded-lg" />
      
      <CardHeader className="relative z-10 p-3 flex flex-col items-center text-center flex-shrink-0">
        {/* Fixed Trending Badge */}
        {peptide.trending && (
          <div className="absolute top-2 right-2 z-20">
            <Badge className="flex items-center gap-1 px-2 py-1 text-xs font-bold bg-gradient-accent text-white shadow-glow animate-pulse-glow rounded-full border-0">
              🔥
              <span className="text-xs">Trending</span>
            </Badge>
          </div>
        )}
        
        {/* Compact 3D preview */}
        <div className="relative w-full h-24 bg-gradient-accent rounded-xl flex items-center justify-center mb-3 overflow-hidden group-hover:scale-105 transition-all duration-700 shadow-biotech group-hover:shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/60" />
          <div className="absolute inset-0 animate-rotate-slow opacity-10">
            <div className="w-full h-full border-2 border-white/20 rounded-full" />
          </div>
          <div className="relative w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elevated group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 animate-float">
            <span className="text-lg font-bold text-primary">
              {peptide.name.charAt(0)}
            </span>
          </div>
          <div className="absolute bottom-1 right-2 text-xs text-white/90 font-bold bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full">
            Struct
          </div>
          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />
        </div>
        
        <CardTitle className="text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight mb-2 text-center line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
          {peptide.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 flex flex-col items-center text-center space-y-3 p-3 pt-0 flex-grow">
        {/* Compact category tags */}
        <div className="flex flex-wrap justify-center gap-1">
          {peptide.category.slice(0, 2).map((cat, index) => {
            const gradients = [
              'bg-gradient-accent text-white border-accent/30 shadow-glow',
              'bg-gradient-mint text-primary border-accent/30 shadow-glow-mint'
            ];
            return (
              <Badge 
                key={cat} 
                variant="secondary" 
                className={`text-xs font-bold px-2 py-0.5 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-110 animate-scale-in truncate max-w-[80px] ${
                  gradients[index] || 'bg-muted/70 text-muted-foreground hover:bg-muted/90'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                title={cat}
              >
                {cat}
              </Badge>
            );
          })}
          {peptide.category.length > 2 && (
            <Badge className="text-xs px-2 py-0.5 bg-muted/70 text-muted-foreground rounded-full">
              +{peptide.category.length - 2}
            </Badge>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed text-center flex-grow min-h-[3rem]">
          {peptide.shortDescription}
        </p>
        
        <div className="flex flex-col items-center pt-2 mt-auto w-full">
          <Button 
            variant="accent" 
            size="sm"
            onClick={() => navigate(`/compound/${peptide.id}`)}
            className="flex items-center justify-center gap-1.5 shadow-biotech hover:shadow-glow transition-all duration-500 hover:scale-105 bg-gradient-accent text-white border-0 px-3 py-2 rounded-full font-bold text-xs group w-full max-w-[140px]"
          >
            <span className="truncate">Explore</span>
            <ExternalLink className="h-3 w-3 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
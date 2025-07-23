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
    <Card className="group relative overflow-hidden bg-white border border-border/20 shadow-premium hover:shadow-elevated hover:border-accent/30 transition-all duration-500 hover:scale-[1.03] cursor-pointer animate-fade-in">
      {/* Enhanced glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/30 pointer-events-none rounded-lg" />
      
      <CardHeader className="relative z-10 p-8">
        {peptide.trending && (
          <div className="absolute -top-3 -right-3 z-20">
            <Badge variant="accent" className="flex items-center gap-2 px-4 py-2 text-sm font-bold shadow-glow animate-pulse-glow">
              <TrendingUp className="h-4 w-4" />
              Trending
            </Badge>
          </div>
        )}
        
        {/* Enhanced 3D preview with biotech aesthetic */}
        <div className="relative w-full h-52 bg-gradient-accent rounded-3xl flex items-center justify-center mb-8 overflow-hidden group-hover:scale-105 transition-all duration-700 shadow-biotech group-hover:shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/60" />
          <div className="absolute inset-0 animate-rotate-slow opacity-10">
            <div className="w-full h-full border-2 border-white/20 rounded-full" />
          </div>
          <div className="relative w-32 h-32 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elevated group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 animate-float">
            <span className="text-5xl font-bold text-primary">
              {peptide.name.charAt(0)}
            </span>
          </div>
          <div className="absolute bottom-5 right-5 text-sm text-white/90 font-bold bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            3D Model
          </div>
          <div className="absolute top-5 left-5 w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
        </div>
        
        <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight mb-2">
          {peptide.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-6 p-8 pt-0">
        {/* Enhanced category tags with biotech styling */}
        <div className="flex flex-wrap gap-3">
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
                className={`text-sm font-bold px-5 py-2 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-110 animate-scale-in ${
                  gradients[index] || 'bg-muted/70 text-muted-foreground hover:bg-muted/90'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cat}
              </Badge>
            );
          })}
        </div>
        
        <p className="text-base text-muted-foreground line-clamp-2 leading-relaxed">
          {peptide.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div className="text-sm text-muted-foreground">
            <span className="font-bold text-primary">Half-life:</span>
            <span className="ml-2 font-semibold">{peptide.halfLife}</span>
          </div>
          <Button 
            variant="accent" 
            size="default"
            onClick={() => navigate(`/compound/${peptide.id}`)}
            className="flex items-center gap-3 shadow-biotech hover:shadow-glow transition-all duration-500 hover:scale-110 bg-gradient-accent text-white border-0 px-8 py-3 rounded-full font-bold text-base group"
          >
            Explore Compound
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
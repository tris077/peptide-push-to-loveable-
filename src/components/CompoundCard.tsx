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
    <Card className="group relative overflow-hidden bg-gradient-card backdrop-blur-xs border-0 shadow-glass hover:shadow-elevated transition-all duration-500 hover:scale-[1.02] cursor-pointer animate-fade-in">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-transparent pointer-events-none" />
      
      <CardHeader className="relative z-10">
        {peptide.trending && (
          <div className="absolute -top-2 -right-2 z-20">
            <Badge variant="accent" className="flex items-center gap-1 px-3 py-1 text-xs font-semibold shadow-glow animate-pulse-glow">
              <TrendingUp className="h-3 w-3" />
              Trending
            </Badge>
          </div>
        )}
        
        {/* Enhanced 3D preview placeholder */}
        <div className="relative w-full h-40 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/60" />
          <div className="relative w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-premium group-hover:rotate-12 transition-transform duration-500">
            <span className="text-3xl font-bold text-primary">
              {peptide.name.charAt(0)}
            </span>
          </div>
          <div className="absolute bottom-3 right-3 text-xs text-white/80 font-medium">
            3D Model
          </div>
        </div>
        
        <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
          {peptide.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        {/* Enhanced category tags */}
        <div className="flex flex-wrap gap-2">
          {peptide.category.slice(0, 3).map((cat, index) => (
            <Badge 
              key={cat} 
              variant="secondary" 
              className={`text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                index === 0 ? 'bg-accent/10 text-accent border-accent/20' : 
                index === 1 ? 'bg-primary/10 text-primary border-primary/20' : 
                'bg-muted/80'
              }`}
            >
              {cat}
            </Badge>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {peptide.description}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="text-xs text-muted-foreground">
            <span className="font-semibold text-primary">Half-life:</span>
            <span className="ml-1 font-medium">{peptide.halfLife}</span>
          </div>
          <Button 
            variant="research" 
            size="sm"
            onClick={() => navigate(`/compound/${peptide.id}`)}
            className="flex items-center gap-2 shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            View Details
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
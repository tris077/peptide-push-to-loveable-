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
        
        {/* Enhanced 3D preview with better visual appeal */}
        <div className="relative w-full h-48 bg-gradient-accent rounded-3xl flex items-center justify-center mb-8 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-premium">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/70" />
          <div className="relative w-28 h-28 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elevated group-hover:rotate-12 transition-transform duration-500">
            <span className="text-4xl font-bold text-primary">
              {peptide.name.charAt(0)}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 text-sm text-white/90 font-semibold">
            3D Model
          </div>
        </div>
        
        <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight mb-2">
          {peptide.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-6 p-8 pt-0">
        {/* Enhanced category tags with better spacing */}
        <div className="flex flex-wrap gap-3">
          {peptide.category.slice(0, 3).map((cat, index) => (
            <Badge 
              key={cat} 
              variant="secondary" 
              className={`text-sm font-semibold px-4 py-2 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                index === 0 ? 'bg-accent/15 text-accent border-accent/30 hover:bg-accent/25' : 
                index === 1 ? 'bg-primary/15 text-primary border-primary/30 hover:bg-primary/25' : 
                'bg-muted/60 text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat}
            </Badge>
          ))}
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
            className="flex items-center gap-2 shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-105 bg-gradient-accent text-white border-0 px-6 py-3 rounded-2xl font-semibold"
          >
            View Details
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
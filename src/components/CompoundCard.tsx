import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Peptide } from "@/data/peptides";
import { useNavigate } from "react-router-dom";
import semaglutideBottle from "@/assets/semaglutide-bottle.png";
import semaxBottle from "@/assets/semax-bottle.png";
import bpc157BottleReal from "@/assets/bpc157-bottle-real.png";
import bpc157Bottle from "@/assets/bpc157-bottle.png";

interface CompoundCardProps {
  peptide: Peptide;
}

export const CompoundCard = ({ peptide }: CompoundCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group relative overflow-hidden bg-white border border-border/10 shadow-premium hover:shadow-elevated hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer animate-fade-in h-[320px] flex flex-col animate-card-hover rounded-2xl">
      {/* Enhanced glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/40 pointer-events-none rounded-2xl" />
      
      <CardHeader className="relative z-10 p-3 flex flex-col items-center text-center flex-shrink-0">
        {/* Premium Trending Badge */}
        {peptide.trending && (
          <div className="absolute top-3 right-3 z-20">
            <Badge className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg rounded-full border-0 animate-pulse">
              ⭐
              <span className="text-xs font-semibold">Trending</span>
            </Badge>
          </div>
        )}
        
        {/* Product preview with bottle image */}
        <div className="relative w-full h-24 bg-gradient-accent rounded-xl flex items-center justify-center mb-3 overflow-hidden group-hover:scale-105 transition-all duration-700 shadow-biotech group-hover:shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/60" />
          
          {/* Product bottle image or fallback */}
          {peptide.id === 'semaglutide' ? (
            <img 
              src={semaglutideBottle} 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : peptide.name.toLowerCase() === 'semax' ? (
            <img 
              src="/lovable-uploads/3307778d-234d-4681-9a59-8f907f4fd062.png" 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : peptide.name.toLowerCase().includes('bpc-157') || peptide.name.toLowerCase().includes('bpc 157') ? (
            <img 
              src="/lovable-uploads/ad6335ee-1c5a-480f-acd3-7d5bf90f3cb0.png" 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : peptide.name.toLowerCase().includes('melanotan') ? (
            <img 
              src="/lovable-uploads/552767df-922a-49f5-939d-74fbb95daf5f.png" 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : peptide.name.toLowerCase().includes('tb-500') || peptide.name.toLowerCase().includes('tb500') ? (
            <img 
              src="/lovable-uploads/cdbd26cd-11de-4e75-87fa-e0a7d41fea3d.png" 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : (
            <>
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
            </>
          )}
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
            className="flex items-center justify-center gap-2 shadow-biotech hover:shadow-glow transition-all duration-500 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-4 py-2.5 rounded-xl font-bold text-xs group w-full max-w-[180px]"
          >
            <span>Explore Compound</span>
            <ExternalLink className="h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
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

  // Enhanced color schemes for more variety
  const getCardColorScheme = (index: number) => {
    const schemes = [
      { bg: 'from-blue-500/10 via-cyan-500/5 to-blue-600/10', border: 'border-blue-200/50', accent: 'from-blue-500 to-cyan-500' },
      { bg: 'from-purple-500/10 via-pink-500/5 to-purple-600/10', border: 'border-purple-200/50', accent: 'from-purple-500 to-pink-500' },
      { bg: 'from-green-500/10 via-emerald-500/5 to-green-600/10', border: 'border-green-200/50', accent: 'from-green-500 to-emerald-500' },
      { bg: 'from-orange-500/10 via-red-500/5 to-orange-600/10', border: 'border-orange-200/50', accent: 'from-orange-500 to-red-500' },
      { bg: 'from-indigo-500/10 via-blue-500/5 to-indigo-600/10', border: 'border-indigo-200/50', accent: 'from-indigo-500 to-blue-500' },
      { bg: 'from-teal-500/10 via-cyan-500/5 to-teal-600/10', border: 'border-teal-200/50', accent: 'from-teal-500 to-cyan-500' }
    ];
    return schemes[index % schemes.length];
  };

  const colorScheme = getCardColorScheme(peptide.id.charCodeAt(0));

  return (
    <Card className={`group relative overflow-hidden bg-white border ${colorScheme.border} shadow-premium hover:shadow-elevated hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer animate-fade-in h-[320px] flex flex-col animate-card-hover rounded-2xl`}>
      {/* Enhanced glassmorphism overlay with dynamic colors */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} pointer-events-none rounded-2xl`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
        <div className="absolute bottom-6 right-6 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <CardHeader className="relative z-10 p-3 flex flex-col items-center text-center flex-shrink-0">
        {/* Premium Trending Badge - Repositioned to not cover title */}
        {peptide.trending && (
          <div className="absolute -top-3 -right-3 z-20">
            <Badge className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg rounded-full border-2 border-white/90 animate-pulse">
              🔥
              <span className="text-xs font-semibold">Trending</span>
            </Badge>
          </div>
        )}
        
        {/* Product preview with bottle image */}
        <div className={`relative w-full h-24 bg-gradient-to-br ${colorScheme.accent} rounded-xl flex items-center justify-center mb-3 overflow-hidden group-hover:scale-105 transition-all duration-700 shadow-biotech group-hover:shadow-glow`}>
          <div className={`absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/60`} />
          
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
          ) : peptide.name.toLowerCase().includes('ghrp-6') || peptide.name.toLowerCase().includes('ghrp6') ? (
            <img 
              src="/lovable-uploads/54a83b31-103c-46a2-8452-a9d563ca6f25.png" 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : peptide.name.toLowerCase().includes('pt-141') || peptide.name.toLowerCase().includes('pt141') ? (
            <img 
              src="/lovable-uploads/5077b3ea-d5b2-4bd8-b326-76e5962b0944.png" 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : peptide.name.toLowerCase().includes('cjc-1295') || peptide.name.toLowerCase().includes('cjc1295') ? (
            <img 
              src="/lovable-uploads/799dad08-7f19-4c74-8697-b4101c682ec0.png" 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : peptide.name.toLowerCase().includes('ipamorelin') ? (
            <img 
              src="/lovable-uploads/3942de24-8fff-4107-983c-f61c4b0a3aa7.png" 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : peptide.name.toLowerCase().includes('ghk-cu') || peptide.name.toLowerCase().includes('ghkcu') ? (
            <img 
              src="/lovable-uploads/8b994fa1-23b7-4de9-83e7-1c82dde51936.png" 
              alt={`${peptide.name} bottle`}
              className="relative w-16 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-700"
            />
          ) : peptide.name.toLowerCase().includes('mod-grf') || peptide.name.toLowerCase().includes('modgrf') ? (
            <img 
              src="/lovable-uploads/4edd5a43-ed07-40cc-9023-884aa26ae44a.png" 
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
        
        <CardTitle className="text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight mb-2 text-center line-clamp-2 min-h-[2.5rem] flex items-center justify-center px-2">
          {peptide.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 flex flex-col items-center text-center space-y-3 p-3 pt-0 flex-grow">
        {/* Enhanced category tags with better text handling */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {peptide.category.slice(0, 2).map((cat, index) => {
            const gradients = [
              'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-300/50 shadow-lg shadow-blue-500/25',
              'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-300/50 shadow-lg shadow-purple-500/25',
              'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-300/50 shadow-lg shadow-green-500/25',
              'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-300/50 shadow-lg shadow-orange-500/25',
              'bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-indigo-300/50 shadow-lg shadow-indigo-500/25',
              'bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-teal-300/50 shadow-lg shadow-teal-500/25'
            ];
            return (
              <Badge 
                key={cat} 
                variant="secondary" 
                className={`text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-110 animate-scale-in ${
                  gradients[index % gradients.length] || 'bg-muted/70 text-muted-foreground hover:bg-muted/90'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                title={cat}
              >
                <span className="whitespace-nowrap">{cat}</span>
              </Badge>
            );
          })}
          {peptide.category.length > 2 && (
            <Badge className="text-xs px-2 py-1 bg-muted/70 text-muted-foreground rounded-full border border-muted-foreground/20">
              +{peptide.category.length - 2}
            </Badge>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed text-center flex-grow min-h-[3rem] px-2">
          {peptide.shortDescription}
        </p>
        
        <div className="flex flex-col items-center pt-2 mt-auto w-full">
          <Button 
            variant="accent" 
            size="sm"
            onClick={() => navigate(`/compound/${peptide.id}`)}
            className={`flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-r ${colorScheme.accent} text-white border-0 px-4 py-2.5 rounded-xl font-bold text-xs group w-full max-w-[180px]`}
          >
            <span>Explore Compound</span>
            <ExternalLink className="h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
import { Badge } from "@/components/ui/badge";
import { Syringe, Pill, Zap, Brain, Dumbbell, Heart } from "lucide-react";
import bpc157 from "@/assets/bpc-157.jpg";
import tb500 from "@/assets/tb-500.jpg";
import ipamorelin from "@/assets/ipamorelin.jpg";
import melanotanii from "@/assets/melanotan-ii.jpg";
import noopept from "@/assets/noopept.jpg";
import epitalon from "@/assets/epitalon.jpg";
import pt141 from "@/assets/pt-141.jpg";
import hexarelin from "@/assets/hexarelin.jpg";

interface PeptideCardProps {
  name: string;
  category: "Muscle" | "Brain" | "Aesthetic" | "Recovery" | "Performance";
  route: "Injection" | "Oral" | "Nasal" | "Topical";
  description: string;
  insight?: string;
  image?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PeptideCard = ({ 
  name, 
  category, 
  route, 
  description, 
  insight,
  image,
  className = "",
  style
}: PeptideCardProps) => {
  const getRouteIcon = (route: string) => {
    switch (route.toLowerCase()) {
      case "injection": return <Syringe className="w-4 h-4" />;
      case "oral": return <Pill className="w-4 h-4" />;
      case "nasal": return <Zap className="w-4 h-4" />;
      case "topical": return <Heart className="w-4 h-4" />;
      default: return <Pill className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "muscle": return <Dumbbell className="w-5 h-5" />;
      case "brain": return <Brain className="w-5 h-5" />;
      case "aesthetic": return <Heart className="w-5 h-5" />;
      case "recovery": return <Zap className="w-5 h-5" />;
      case "performance": return <Dumbbell className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getImage = (imageName?: string) => {
    const imageMap: Record<string, string> = {
      "bpc-157": bpc157,
      "tb-500": tb500,
      "ipamorelin": ipamorelin,
      "melanotan-ii": melanotanii,
      "noopept": noopept,
      "epitalon": epitalon,
      "pt-141": pt141,
      "hexarelin": hexarelin
    };
    return imageName ? imageMap[imageName] : undefined;
  };

  return (
    <div className={`group relative bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 hover:border-primary/30 ${className}`} style={style}>
      {/* Image Header */}
      {image && getImage(image) && (
        <div className="relative h-40 overflow-hidden">
          <img 
            src={getImage(image)} 
            alt={`${name} molecular structure`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getCategoryIcon(category)}
                <h3 className="font-bold text-lg text-white drop-shadow-lg">{name}</h3>
              </div>
              <div className="flex items-center space-x-1 text-white/80">
                {getRouteIcon(route)}
                <span className="text-xs">{route}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-4">

        {/* Tags */}
        <div className="flex items-center space-x-2 mb-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">{category}</Badge>
          <Badge variant="outline" className="border-primary/30 text-muted-foreground hover:border-primary transition-colors">{route}</Badge>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          {description}
        </p>

        {/* Research Insight */}
        {insight && (
          <div className="mt-4 p-3 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 backdrop-blur-sm">
            <p className="text-xs text-muted-foreground italic">
              💡 {insight}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeptideCard;
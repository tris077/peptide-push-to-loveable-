import { Badge } from "@/components/ui/badge";
import { Syringe, Pill, Zap, Brain, Dumbbell, Heart } from "lucide-react";

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
    // For now, return undefined to avoid broken image imports
    // In the future, you can add actual peptide images to the public folder
    return undefined;
  };

  return (
    <div className={`group relative bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 hover:border-primary/30 ${className}`} style={style}>
      {/* Image Header or Placeholder */}
      <div className="relative h-40 overflow-hidden">
        {image && getImage(image) ? (
          <>
            <img 
              src={getImage(image)} 
              alt={`${name} molecular structure`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </>
        ) : (
          // Placeholder with gradient background and peptide initials
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">{name.substring(0, 2)}</span>
              </div>
              <p className="text-primary font-semibold text-sm">{name}</p>
            </div>
          </div>
        )}
        
        {/* Header overlay with peptide info */}
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
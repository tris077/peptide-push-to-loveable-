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
    <Card className="group hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-subtle border-primary/10">
      <CardHeader className="relative">
        {peptide.trending && (
          <div className="absolute top-4 right-4">
            <Badge variant="accent" className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Trending
            </Badge>
          </div>
        )}
        
        <div className="w-full h-32 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">
              {peptide.name.charAt(0)}
            </span>
          </div>
        </div>
        
        <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
          {peptide.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {peptide.category.slice(0, 3).map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {peptide.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Half-life:</span> {peptide.halfLife}
            </div>
            <Button 
              variant="research" 
              size="sm"
              onClick={() => navigate(`/compound/${peptide.id}`)}
              className="flex items-center gap-1"
            >
              View Details
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
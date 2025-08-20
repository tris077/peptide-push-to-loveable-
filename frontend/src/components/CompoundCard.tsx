import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";
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
    <Card className="compound-card h-full">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Trending Indicator - Tiny up-arrow chip only */}
        {peptide.trending && (
          <div className="absolute top-3 right-3 z-10">
            <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium border border-blue-200">
              <TrendingUp className="h-3 w-3" />
              <span>Trending</span>
            </div>
          </div>
        )}
        
        {/* Product Image */}
        <div className="relative w-full h-40 rounded-t-lg overflow-hidden">
          {peptide.id === 'semaglutide' ? (
            <img 
              src={semaglutideBottle} 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase() === 'semax' ? (
            <img 
              src="/lovable-uploads/3307778d-234d-4681-9a59-8f907f4fd062.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase().includes('bpc-157') || peptide.name.toLowerCase().includes('bpc 157') ? (
            <img 
              src="/lovable-uploads/ad6335ee-1c5a-480f-acd3-7d5bf90f3cb0.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase().includes('melanotan') ? (
            <img 
              src="/lovable-uploads/552767df-922a-49f5-939d-74fbb95daf5f.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase().includes('tb-500') || peptide.name.toLowerCase().includes('tb500') ? (
            <img 
              src="/lovable-uploads/cdbd26cd-11de-4e75-87fa-e0a7d41fea3d.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase().includes('ghrp-6') || peptide.name.toLowerCase().includes('ghrp6') ? (
            <img 
              src="/lovable-uploads/54a83b31-103c-46a2-8452-a9d563ca6f25.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase().includes('pt-141') || peptide.name.toLowerCase().includes('pt141') ? (
            <img 
              src="/lovable-uploads/5077b3ea-d5b2-4bd8-b326-76e5962b0944.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase().includes('cjc-1295') || peptide.name.toLowerCase().includes('cjc1295') ? (
            <img 
              src="/lovable-uploads/799dad08-7f19-4c74-8697-b4101c682ec0.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase().includes('ipamorelin') ? (
            <img 
              src="/lovable-uploads/3942de24-8fff-4107-983c-f61c4b0a3aa7.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase().includes('ghk-cu') || peptide.name.toLowerCase().includes('ghkcu') ? (
            <img 
              src="/lovable-uploads/8b994fa1-23b7-4de9-83e7-1c82dde51936.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : peptide.name.toLowerCase().includes('mod-grf') || peptide.name.toLowerCase().includes('modgrf') ? (
            <img 
              src="/lovable-uploads/4edd5a43-ed07-40cc-9023-884aa26ae44a.png" 
              alt={`${peptide.name} bottle`}
              className="w-full h-full object-contain bg-gray-50"
            />
          ) : (
            <div className="w-full h-full bg-gray-50 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-500">
                  {peptide.name.charAt(0)}
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Content - Consistent padding and spacing */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title */}
          <CardTitle className="text-lg font-semibold text-text-primary mb-2 line-clamp-1">
            {peptide.name}
          </CardTitle>

          {/* Description - 1 sentence, 2 lines max */}
          <p className="text-text-secondary text-sm line-clamp-2 mb-4 flex-1">
            {peptide.shortDescription}
          </p>

          {/* Categories - 2 compact tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {peptide.category.slice(0, 2).map((cat, idx) => (
              <Badge 
                key={cat} 
                variant="secondary" 
                className="badge-neutral text-xs"
              >
                {cat}
              </Badge>
            ))}
          </div>

          {/* View Details Link */}
          <div className="mt-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/compound/${peptide.id}`)}
              className="w-full btn-ghost p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              View Details
              <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
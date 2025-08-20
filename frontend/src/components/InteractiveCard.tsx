import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ChevronRight, TrendingUp } from "lucide-react";
import { Peptide } from "@/data/peptides";
import { ProductViewer360 } from "./ProductViewer360";
import semaglutideBottle from "@/assets/semaglutide-bottle.png";
import bpc157BottleReal from "@/assets/bpc157-bottle-real.png";

interface InteractiveCardProps {
  peptide: Peptide;
  viewMode?: "grid" | "list";
  onFavorite?: (peptideId: string) => void;
  isFavorited?: boolean;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  peptide,
  viewMode = "grid",
  onFavorite,
  isFavorited = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="compound-card h-full relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardContent className="p-0 h-full flex flex-col relative z-10">
          {/* Enhanced Trending Indicator */}
          {peptide.trending && (
            <div className="absolute top-3 right-3 z-20">
              <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-xs font-bold border border-white/20 shadow-lg animate-bounce-gentle">
                <TrendingUp className="h-3 w-3 animate-pulse" />
                <span>🔥 Hot</span>
              </div>
            </div>
          )}

          {/* Favorite Button */}
          {onFavorite && (
            <motion.div
              className="absolute top-3 left-3 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onFavorite(peptide.id)}
                className="w-8 h-8 p-0 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200"
              >
                <Heart
                  className={`h-4 w-4 transition-all duration-200 ${
                    isFavorited ? 'fill-current text-red-500' : 'text-gray-400'
                  }`}
                />
              </Button>
            </motion.div>
          )}

          {viewMode === "list" ? (
            // List View Layout
            <div className="flex items-center gap-6 p-6">
              {/* Image */}
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <ProductViewer360
                  productName={peptide.name}
                  images={
                    peptide.id === 'semaglutide' ? [semaglutideBottle] :
                    peptide.name.toLowerCase() === 'semax' ? ['/lovable-uploads/3307778d-234d-4681-9a59-8f907f4fd062.png'] : 
                    peptide.name.toLowerCase().includes('bpc-157') || peptide.name.toLowerCase().includes('bpc 157') ? ['/lovable-uploads/ad6335ee-1c5a-480f-acd3-7d5bf90f3cb0.png'] :
                    peptide.name.toLowerCase().includes('melanotan') ? ['/lovable-uploads/552767df-922a-49f5-939d-74fbb95daf5f.png'] :
                    peptide.name.toLowerCase().includes('tb-500') || peptide.name.toLowerCase().includes('tb500') ? ['/lovable-uploads/cdbd26cd-11de-4e75-87fa-e0a7d41fea3d.png'] :
                    peptide.name.toLowerCase().includes('ghrp-6') || peptide.name.toLowerCase().includes('ghrp6') ? ['/lovable-uploads/54a83b31-103c-46a2-8452-a9d563ca6f25.png'] :
                    peptide.name.toLowerCase().includes('pt-141') || peptide.name.toLowerCase().includes('pt141') ? ['/lovable-uploads/5077b3ea-d5b2-4bd8-b326-76e5962b0944.png'] :
                    peptide.name.toLowerCase().includes('cjc-1295') || peptide.name.toLowerCase().includes('cjc1295') ? ['/lovable-uploads/799dad08-7f19-4c74-8697-b4101c682ec0.png'] :
                    peptide.name.toLowerCase().includes('ipamorelin') ? ['/lovable-uploads/3942de24-8fff-4107-983c-f61c4b0a3aa7.png'] :
                    peptide.name.toLowerCase().includes('ghk-cu') || peptide.name.toLowerCase().includes('ghkcu') ? ['/lovable-uploads/8b994fa1-23b7-4de9-83e7-1c82dde51936.png'] :
                    peptide.name.toLowerCase().includes('mod-grf') || peptide.name.toLowerCase().includes('modgrf') ? ['/lovable-uploads/4edd5a43-ed07-40cc-9023-884aa26ae44a.png'] :
                    ['/placeholder-molecule.svg']
                  }
                  size="medium"
                  autoRotate={false}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-text-primary mb-2 truncate">
                      {peptide.name}
                    </h3>
                    <p className="text-text-secondary text-sm line-clamp-2 mb-3">
                      {peptide.shortDescription}
                    </p>
                    
                    {/* Categories - 2 compact tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {peptide.category.slice(0, 2).map((cat, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="badge-neutral text-xs"
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-4 flex-shrink-0 btn-secondary"
                  >
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Grid View Layout - Consistent height
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="relative w-full h-40 rounded-t-lg overflow-hidden">
                <ProductViewer360
                  productName={peptide.name}
                  images={
                    peptide.id === 'semaglutide' ? [semaglutideBottle] :
                    peptide.name.toLowerCase() === 'semax' ? ['/lovable-uploads/3307778d-234d-4681-9a59-8f907f4fd062.png'] : 
                    peptide.name.toLowerCase().includes('bpc-157') || peptide.name.toLowerCase().includes('bpc 157') ? ['/lovable-uploads/ad6335ee-1c5a-480f-acd3-7d5bf90f3cb0.png'] :
                    peptide.name.toLowerCase().includes('melanotan') ? ['/lovable-uploads/552767df-922a-49f5-939d-74fbb95daf5f.png'] :
                    peptide.name.toLowerCase().includes('tb-500') || peptide.name.toLowerCase().includes('tb500') ? ['/lovable-uploads/cdbd26cd-11de-4e75-87fa-e0a7d41fea3d.png'] :
                    peptide.name.toLowerCase().includes('ghrp-6') || peptide.name.toLowerCase().includes('ghrp6') ? ['/lovable-uploads/54a83b31-103c-46a2-8452-a9d563ca6f25.png'] :
                    peptide.name.toLowerCase().includes('pt-141') || peptide.name.toLowerCase().includes('pt141') ? ['/lovable-uploads/5077b3ea-d5b2-4bd8-b326-76e5962b0944.png'] :
                    peptide.name.toLowerCase().includes('cjc-1295') || peptide.name.toLowerCase().includes('cjc1295') ? ['/lovable-uploads/799dad08-7f19-4c74-8697-b4101c682ec0.png'] :
                    peptide.name.toLowerCase().includes('ipamorelin') ? ['/lovable-uploads/3942de24-8fff-4107-983c-f61c4b0a3aa7.png'] :
                    peptide.name.toLowerCase().includes('ghk-cu') || peptide.name.toLowerCase().includes('ghkcu') ? ['/lovable-uploads/8b994fa1-23b7-4de9-83e7-1c82dde51936.png'] :
                    peptide.name.toLowerCase().includes('mod-grf') || peptide.name.toLowerCase().includes('modgrf') ? ['/lovable-uploads/4edd5a43-ed07-40cc-9023-884aa26ae44a.png'] :
                    ['/placeholder-molecule.svg']
                  }
                  size="medium"
                  autoRotate={isHovered}
                  className="w-full h-full"
                />
              </div>

              {/* Content - Consistent padding and spacing */}
              <div className="p-4 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-lg font-semibold text-text-primary mb-2 line-clamp-1">
                  {peptide.name}
                </h3>

                {/* Description - 1 sentence, 2 lines max */}
                <p className="text-text-secondary text-sm line-clamp-2 mb-4 flex-1">
                  {peptide.shortDescription}
                </p>

                {/* Categories - 2 compact tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {peptide.category.slice(0, 2).map((cat, idx) => (
                    <Badge
                      key={idx}
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
                    className="w-full btn-ghost p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Atom, Dna, Heart, ChevronRight } from "lucide-react";
import { Peptide } from "@/data/peptides";
import { useNavigate } from "react-router-dom";
import { ProductViewer360 } from "./ProductViewer360";
import { useAuth } from "@/contexts/AuthContext";
import { favoritesService } from "@/services/favoritesService";
import semaglutideBottle from "@/assets/semaglutide-bottle.png";
import bpc157BottleReal from "@/assets/bpc157-bottle-real.png";

interface InteractiveCardProps {
  peptide: Peptide;
  index: number;
  viewMode?: "grid" | "list";
}

export const InteractiveCard = ({ peptide, index, viewMode = "grid" }: InteractiveCardProps) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  // Check if peptide is favorited on component mount
  useEffect(() => {
    if (isAuthenticated && user) {
      const favorited = favoritesService.isFavorited(user.id.toString(), peptide.id);
      setIsFavorited(favorited);
    }
  }, [isAuthenticated, user, peptide.id]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!isAuthenticated) {
      // Show sign-in prompt or redirect to auth
      navigate("/");
      return;
    }

    if (isFavorited) {
      favoritesService.removeFromFavorites(user!.id.toString(), peptide.id);
      setIsFavorited(false);
    } else {
      favoritesService.addToFavorites(user!.id.toString(), peptide);
      setIsFavorited(true);
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('cognitive') || category.toLowerCase().includes('nootropic')) return Atom;
    if (category.toLowerCase().includes('muscle') || category.toLowerCase().includes('growth')) return Dna;
    return Atom;
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: viewMode === "list" ? 0 : rotateX,
        rotateY: viewMode === "list" ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={viewMode === "list" ? undefined : handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative cursor-pointer ${viewMode === "list" ? "w-full" : ""}`}
    >
      <Card className={`group relative overflow-hidden bg-white/95 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu ${
        viewMode === "list" ? "p-6" : "p-6"
      }`}>
        {/* Background Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(index)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
                       {/* Favorite Button */}
               <motion.div
                 className="absolute top-4 right-4 z-20"
                 initial={{ scale: 0, rotate: -180 }}
                 animate={{ scale: 1, rotate: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
               >
                 <Button
                   onClick={handleFavoriteClick}
                   variant="ghost"
                   size="sm"
                   className={`w-9 h-9 p-0 rounded-full transition-all duration-300 ${
                     isFavorited
                       ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg'
                       : 'bg-white/90 text-gray-600 hover:bg-white hover:text-pink-500'
                   }`}
                 >
                   <Heart
                     className={`h-4 w-4 transition-all duration-300 ${
                       isFavorited ? 'fill-current' : ''
                     }`}
                   />
                 </Button>
               </motion.div>

                       {/* Trending Badge */}
               {peptide.trending && (
                 <motion.div
                   className="absolute -top-3 -left-3 z-20"
                   initial={{ scale: 0, rotate: -180 }}
                   animate={{ scale: 1, rotate: 0 }}
                   transition={{ duration: 0.5, delay: 0.3 }}
                 >
                   <Badge className="flex items-center gap-1.5 px-2 py-1 text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg rounded-full border-2 border-white/90">
                     🔥
                     <span className="text-xs font-semibold">Trending</span>
                   </Badge>
                 </motion.div>
               )}

        {viewMode === "list" ? (
          // List View Layout
          <div className="flex items-center gap-6">
            {/* Image */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
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
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                    {peptide.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {peptide.shortDescription}
                  </p>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {peptide.category.slice(0, 3).map((cat, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 border-gray-200"
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
                  className="ml-4 flex-shrink-0 border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  View Details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Grid View Layout
          <>
            {/* Header */}
            <div className="relative mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                {peptide.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {peptide.shortDescription}
              </p>
            </div>

            {/* Image */}
            <motion.div 
              className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
              style={{
                transform: "translateZ(20px)",
              }}
            >
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
            </motion.div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {peptide.category.slice(0, 3).map((cat, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs px-3 py-1 bg-gray-100 text-gray-700 border-gray-200 hover:scale-105 transition-transform duration-200"
                  title={cat}
                >
                  <span className="whitespace-nowrap">{cat}</span>
                </Badge>
              ))}
            </div>

            {/* Use Cases Preview */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2 font-medium">Primary Uses:</p>
              <p className="text-sm text-gray-700 line-clamp-2">
                {peptide.useCases.slice(0, 2).join(", ")}
              </p>
            </div>

            {/* Action Button */}
            <Button
              variant="outline"
              size="sm"
              className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors"
            >
              View Details
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </>
        )}
      </Card>
    </motion.div>
  );
};
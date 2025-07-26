import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Atom, Dna } from "lucide-react";
import { Peptide } from "@/data/peptides";
import { useNavigate } from "react-router-dom";
import { ProductViewer360 } from "./ProductViewer360";
import semaglutideBottle from "@/assets/semaglutide-bottle.png";
import bpc157BottleReal from "@/assets/bpc157-bottle-real.png";

interface InteractiveCardProps {
  peptide: Peptide;
  index: number;
}

export const InteractiveCard = ({ peptide, index }: InteractiveCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

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
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative cursor-pointer"
    >
      <Card className="group relative overflow-hidden bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-4xl transition-all duration-700 transform-gpu">
        {/* Background Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(index)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Trending Badge */}
        {peptide.trending && (
          <motion.div 
            className="absolute top-4 right-4 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Badge className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg rounded-full border-0 animate-pulse">
              🔥
              <span className="text-xs font-semibold">Trending</span>
            </Badge>
          </motion.div>
        )}

        <CardHeader className="relative z-10 p-8">
          {/* 3D Product Viewer */}
          <motion.div 
            className="relative w-full h-56 mb-8 rounded-3xl overflow-hidden"
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
              size="large"
              autoRotate={isHovered}
              className="w-full h-full"
            />
          </motion.div>

          {/* 2D Molecular Structure Slot */}
          <motion.div 
            className="absolute top-4 right-4 w-20 h-20 bg-white/95 backdrop-blur-sm rounded-lg border border-white/40 shadow-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 z-20 overflow-hidden"
            whileHover={{ y: -2 }}
          >
            {(() => {
              const name = peptide.name;
              if (name === 'PT-141') return '/lovable-uploads/5106d93b-4c6b-40d7-8cc9-26800d356828.png';
              if (name === 'BPC-157') return '/lovable-uploads/b396ffed-0b60-4a5f-b3b4-072b05b10296.png';
              if (name === 'GHK-Cu') return '/lovable-uploads/beb4b855-5ce0-4fcd-afa5-57807145def4.png';
              if (name === 'TB-500') return '/lovable-uploads/a159e5d0-f3ea-43fa-8614-40fcba7438c1.png';
              if (name === 'CJC-1295') return '/lovable-uploads/3c6b6e15-7b63-44a1-aa71-2e503b66f33a.png';
              if (name === 'Semax') return '/lovable-uploads/f86407d6-977c-4cb6-aa31-56e144554b4c.png';
              if (name === 'GHRP-6') return '/lovable-uploads/1ec2d93b-a3e2-4e0c-9611-3fc7dc45f860.png';
              if (name === 'Ipamorelin') return '/lovable-uploads/4f8a1e98-5f84-4b4c-bf9b-da3b7b12b873.png';
              if (name === 'Semaglutide') return '/lovable-uploads/a7b57a95-b3ce-4e1d-afee-8e731808b8d3.png';
              if (name === 'Melanotan II') return '/lovable-uploads/69c3b21b-0266-4657-a701-650c198dc13b.png';
              return null;
            })() ? (
              <img 
                src={(() => {
                  const name = peptide.name;
                  if (name === 'PT-141') return '/lovable-uploads/5106d93b-4c6b-40d7-8cc9-26800d356828.png';
                  if (name === 'BPC-157') return '/lovable-uploads/b396ffed-0b60-4a5f-b3b4-072b05b10296.png';
                  if (name === 'GHK-Cu') return '/lovable-uploads/beb4b855-5ce0-4fcd-afa5-57807145def4.png';
                  if (name === 'TB-500') return '/lovable-uploads/a159e5d0-f3ea-43fa-8614-40fcba7438c1.png';
                  if (name === 'CJC-1295') return '/lovable-uploads/3c6b6e15-7b63-44a1-aa71-2e503b66f33a.png';
                  if (name === 'Semax') return '/lovable-uploads/f86407d6-977c-4cb6-aa31-56e144554b4c.png';
                  if (name === 'GHRP-6') return '/lovable-uploads/1ec2d93b-a3e2-4e0c-9611-3fc7dc45f860.png';
                  if (name === 'Ipamorelin') return '/lovable-uploads/4f8a1e98-5f84-4b4c-bf9b-da3b7b12b873.png';
                  if (name === 'Semaglutide') return '/lovable-uploads/a7b57a95-b3ce-4e1d-afee-8e731808b8d3.png';
                  if (name === 'Melanotan II') return '/lovable-uploads/69c3b21b-0266-4657-a701-650c198dc13b.png';
                })()}
                alt={`${peptide.name} molecular structure`}
                className="w-full h-full object-contain p-1"
              />
            ) : (
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-primary/30 rounded-md flex items-center justify-center mb-1">
                  <span className="text-xs font-mono font-bold text-accent">2D</span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">Struct</span>
              </div>
            )}
          </motion.div>

          <CardTitle 
            className="text-2xl font-bold text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500 leading-tight mb-4"
            style={{ transform: "translateZ(10px)" }}
          >
            {peptide.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 space-y-6 p-8 pt-0">
          {/* Enhanced category tags */}
          <motion.div 
            className="flex flex-wrap gap-3"
            style={{ transform: "translateZ(15px)" }}
          >
            {peptide.category.slice(0, 3).map((cat, catIndex) => {
              const Icon = getCategoryIcon(cat);
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <Badge 
                    className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-110 bg-gradient-to-r ${getCategoryColor(catIndex)} text-white border-0 shadow-lg hover:shadow-glow`}
                  >
                    <Icon className="h-4 w-4" />
                    {cat}
                  </Badge>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p 
            className="text-base text-muted-foreground line-clamp-2 leading-relaxed"
            style={{ transform: "translateZ(5px)" }}
          >
            {peptide.shortDescription}
          </motion.p>

          <motion.div 
            className="flex justify-center pt-6 border-t border-border/30"
            style={{ transform: "translateZ(10px)" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => navigate(`/compound/${peptide.id}`)}
                className={`flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-r ${getCategoryColor(index)} text-white border-0 px-8 py-3 rounded-full font-bold text-base group`}
              >
                Explore Compound
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </CardContent>

        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(index)} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
      </Card>
    </motion.div>
  );
};
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
                peptide.name.toLowerCase() === 'semax' ? ['/lovable-uploads/fb6b73f7-aa3e-4943-91d4-50ad0e32186b.png'] : 
                ['/placeholder-molecule.svg']
              }
              size="large"
              autoRotate={isHovered}
              className="w-full h-full"
            />
          </motion.div>

          {/* 2D Molecular Structure Slot */}
          <motion.div 
            className="absolute top-4 right-4 w-20 h-20 bg-white/95 backdrop-blur-sm rounded-lg border border-white/40 shadow-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 z-20"
            whileHover={{ y: -2 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-primary/30 rounded-md flex items-center justify-center mb-1">
                <span className="text-xs font-mono font-bold text-accent">2D</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">Struct</span>
            </div>
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
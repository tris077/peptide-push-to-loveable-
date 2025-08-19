import { CompoundCard } from "./CompoundCard";
import { Peptide } from "@/data/peptides";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TrendingCarouselProps {
  peptides: Peptide[];
}

export const TrendingCarousel = ({ peptides }: TrendingCarouselProps) => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {peptides.map((peptide, index) => (
            <CarouselItem key={peptide.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative h-full"
              >
                <div className="absolute top-2 right-2 z-30">
                  <motion.div
                    className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-lg border-2 border-white/90 backdrop-blur-sm"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    🔥 <span className="hidden sm:inline">Trending</span>
                  </motion.div>
                </div>
                <div className="h-full overflow-hidden">
                  <CompoundCard peptide={peptide} />
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm border border-white/20 text-white shadow-premium hover:bg-black hover:shadow-glow hover:scale-110 transition-all duration-300" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm border border-white/20 text-white shadow-premium hover:bg-black hover:shadow-glow hover:scale-110 transition-all duration-300" />
      </Carousel>
    </div>
  );
};
import { CompoundCard } from "./CompoundCard";
import { Peptide } from "@/data/peptides";
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
          {peptides.map((peptide) => (
            <CarouselItem key={peptide.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <CompoundCard peptide={peptide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 shadow-premium hover:bg-white hover:shadow-glow transition-all duration-300" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 shadow-premium hover:bg-white hover:shadow-glow transition-all duration-300" />
      </Carousel>
    </div>
  );
};
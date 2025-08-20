import { CompoundCard } from "./CompoundCard";
import { Peptide } from "@/data/peptides";

interface TrendingCarouselProps {
  peptides: Peptide[];
}

export const TrendingCarousel = ({ peptides }: TrendingCarouselProps) => {
  const trendingPeptides = peptides.filter(peptide => peptide.trending);

  if (trendingPeptides.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      {/* Simple title */}
      <h3 className="text-xl font-semibold text-text-primary mb-6">
        Popular right now
      </h3>
      
      {/* Horizontal scrollable row */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {trendingPeptides.map((peptide) => (
          <div key={peptide.id} className="flex-shrink-0 w-80">
            <CompoundCard peptide={peptide} />
          </div>
        ))}
      </div>
    </section>
  );
};
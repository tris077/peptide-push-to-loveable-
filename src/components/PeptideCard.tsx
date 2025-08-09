import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface PeptideItem {
  name: string;
  slug?: string;
  tags: string[];
  route: string;
  why: string;
}

const TAG_STYLES: Record<string, string> = {
  tanning: "bg-orange-500/15 text-orange-200 border-orange-400/30",
  "fat loss": "bg-teal-500/15 text-teal-200 border-teal-400/30",
  repair: "bg-green-500/15 text-green-200 border-green-400/30",
  "growth signaling": "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
  "growth factor": "bg-indigo-500/15 text-indigo-200 border-indigo-400/30",
  focus: "bg-blue-500/15 text-blue-200 border-blue-400/30",
  anxiolytic: "bg-yellow-500/20 text-yellow-200 border-yellow-400/30",
  sleep: "bg-purple-500/15 text-purple-200 border-purple-400/30",
  "skin or hair": "bg-pink-500/15 text-pink-200 border-pink-400/30",
};

const PeptideCard = ({ item }: { item: PeptideItem }) => {
  const slug = item.slug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white text-lg">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap gap-1">
          {item.tags.map((t) => (
            <span key={t} className={`text-xs px-2 py-0.5 rounded-full border ${TAG_STYLES[t] || "bg-white/10 text-white/70 border-white/20"}`}>
              {t}
            </span>
          ))}
        </div>
        <p className="text-white/80 text-sm">Typical research route: {item.route}</p>
        <p className="text-white/90 text-sm">{item.why}</p>
        <div className="flex items-center gap-3 text-sm pt-1">
          <Link className="text-cyan-300 hover:underline" to={`/compound/${slug}`}>View compound</Link>
          <Link className="text-white/60 hover:underline" to={`/compound/${slug}#side-effects`}>Side effects</Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PeptideCard;

import { peptidesData } from "@/data/peptides";
import type { Peptide } from "@/data/peptides";
import type { GoalId } from "@/components/GoalChips";

export interface CatalogItem {
  id: string;
  name: string;
  slug: string;
  categories: string[];
  admin: string[];
  tags: string[];
}

export const GOAL_TAGS: Record<GoalId, string[]>= {
  tanning: ["tanning"],
  injury: ["repair"],
  recomp: ["growth signaling", "fat loss"],
  "fat-loss": ["fat loss"],
  focus: ["focus"],
  mood: ["anxiolytic"],
  sleep: ["sleep"],
  "skin-hair": ["skin or hair"],
};

export const GOAL_LABEL: Record<GoalId, string> = {
  tanning: "Tanning and pigmentation",
  injury: "Injury recovery",
  recomp: "Recomp and lean mass",
  "fat-loss": "Fat loss and appetite",
  focus: "Focus and study",
  mood: "Stress and mood",
  sleep: "Sleep and recovery",
  "skin-hair": "Skin and hair quality",
};

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const mapCategoriesToTags = (cats: string[], name: string): string[] => {
  const tags = new Set<string>();
  for (const c of cats) {
    const lc = c.toLowerCase();
    if (lc.includes("tanning") || lc.includes("pigment")) tags.add("tanning");
    if (lc.includes("fat")) tags.add("fat loss");
    if (lc.includes("recomposition")) tags.add("fat loss");
    if (lc.includes("wound") || lc.includes("recovery") || lc.includes("repair")) tags.add("repair");
    if (lc.includes("muscle")) tags.add("growth signaling");
    if (lc.includes("growth")) tags.add("growth signaling");
    if (lc.includes("skin") || lc.includes("hair") || lc.includes("anti-aging")) tags.add("skin or hair");
    if (lc.includes("mood") || lc.includes("anxi")) tags.add("anxiolytic");
    if (lc.includes("cognition") || lc.includes("focus")) tags.add("focus");
    if (lc.includes("sleep")) tags.add("sleep");
  }
  if (/ghk|igf|egf|fgf/i.test(name)) tags.add("growth factor");
  return Array.from(tags);
};

export const loadCatalog = (): CatalogItem[] => {
  return peptidesData.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.id || slugify(p.name),
    categories: p.category,
    admin: p.administration || [],
    tags: mapCategoriesToTags(p.category, p.name),
  }));
};

export const preselectCandidates = (goalId: GoalId, max: number = 10): CatalogItem[] => {
  const desired = new Set(GOAL_TAGS[goalId]);
  const catalog = loadCatalog();
  let pool = catalog.filter((c) => c.tags.some((t) => desired.has(t)));
  if (pool.length < 6) {
    // broaden slightly: include items sharing at least one category keyword
    const key = Array.from(desired)[0]?.split(" ")[0] || "";
    if (key) pool = catalog.filter((c) => c.tags.some((t) => t.includes(key)));
  }
  return pool.slice(0, Math.min(max, pool.length));
};

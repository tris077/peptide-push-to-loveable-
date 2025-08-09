import { GOAL_LABEL, GOAL_TAGS, preselectCandidates } from "@/lib/catalog";
import type { GoalId } from "@/components/GoalChips";
import type { StackResponse } from "@/components/ChatWindow";

export async function stackCreate({ goalId, userNotes }: { goalId: GoalId; userNotes?: string }): Promise<StackResponse> {
  // 1) Local preselection
  const candidates = preselectCandidates(goalId, 10);
  if (!candidates.length) {
    throw new Error("No matching compounds in the catalog.");
  }

  // 2) Stubbed model selection: choose 4-8 deterministically
  const count = Math.min(8, Math.max(4, Math.floor(candidates.length / 2)));
  const selected = candidates.slice(0, count);

  const items = selected.map((c) => ({
    name: c.name,
    slug: c.slug,
    tags: c.tags.slice(0, 2),
    route: c.admin?.[0] || "Subcutaneous",
    why: oneSentenceWhy(goalId, c.name),
  }));

  const synergy = buildSynergy(goalId, items.map((i) => i.name));
  const disclaimer =
    "Educational research context only. Verify legality in your region. Human use may be restricted or illegal.";

  const summary = `Built a research-only stack for ${GOAL_LABEL[goalId]} using complementary signals. ${userNotes ? "Notes considered." : ""}`.trim();

  // NOTE: This is a local stub. To integrate OpenAI, replace this selection with a single call to gpt-4o-mini
  // using response_format: { type: 'json_object' } and pass only these candidates.

  return { goalId, summary, items, synergy, disclaimer };
}

function oneSentenceWhy(goalId: GoalId, name: string): string {
  const map: Record<GoalId, string> = {
    tanning: `${name} supports melanocortin signaling relevant to pigmentation research.`,
    injury: `${name} is explored for tissue repair pathways and modulation of inflammation in models.`,
    recomp: `${name} is studied for growth signaling that may aid body composition research.`,
    "fat-loss": `${name} relates to appetite or metabolic signaling studied for weight management research.`,
    focus: `${name} is investigated for effects on neuroplasticity, attention, or cognitive pathways.`,
    mood: `${name} interacts with stress or mood-related pathways under research settings.`,
    sleep: `${name} is associated with recovery or sleep architecture mechanisms in research.`,
    "skin-hair": `${name} is researched for skin or hair tissue remodeling and regenerative signaling.`,
  };
  return map[goalId];
}

function buildSynergy(goalId: GoalId, names: string[]): string {
  const joined = names.slice(0, 3).join(", ") + (names.length > 3 ? ", …" : "");
  const map: Record<GoalId, string> = {
    tanning: `Combines complementary melanocortin and supportive pathways to promote uniform pigmentation signals (${joined}).`,
    injury: `Blends repair mediators that may support angiogenesis, collagen dynamics, and inflammation balance (${joined}).`,
    recomp: `Aligns GH/IGF and metabolic cues to support lean mass and composition research (${joined}).`,
    "fat-loss": `Pairs appetite and metabolic signaling for coordinated energy balance research (${joined}).`,
    focus: `Stacks neuromodulatory and neurotrophic signals for attention and plasticity research (${joined}).`,
    mood: `Combines stress-adaptive and calming pathways for mood-related research (${joined}).`,
    sleep: `Coordinates recovery-linked signals that may influence sleep quality and restoration (${joined}).`,
    "skin-hair": `Unites regenerative and matrix remodeling signals for skin and hair quality research (${joined}).`,
  };
  return map[goalId];
}

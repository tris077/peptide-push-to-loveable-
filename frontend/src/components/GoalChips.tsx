import { Button } from "@/components/ui/button";
import { Sun, Bandage, Dumbbell, Flame, Brain, Smile, Moon, Sparkles } from "lucide-react";

export type GoalId =
  | "tanning"
  | "injury"
  | "recomp"
  | "fat-loss"
  | "focus"
  | "mood"
  | "sleep"
  | "skin-hair";

export const GOAL_DEFS: Record<GoalId, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  tanning: { label: "Tanning and pigmentation", icon: Sun },
  injury: { label: "Injury recovery", icon: Bandage },
  recomp: { label: "Recomp and lean mass", icon: Dumbbell },
  "fat-loss": { label: "Fat loss and appetite", icon: Flame },
  focus: { label: "Focus and study", icon: Brain },
  mood: { label: "Stress and mood", icon: Smile },
  sleep: { label: "Sleep and recovery", icon: Moon },
  "skin-hair": { label: "Skin and hair quality", icon: Sparkles },
};

interface GoalChipsProps {
  onChoose: (id: GoalId) => void;
  active: GoalId | null;
}

const GoalChips = ({ onChoose, active }: GoalChipsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(GOAL_DEFS) as GoalId[]).map((id) => {
        const Def = GOAL_DEFS[id];
        const Icon = Def.icon;
        const isActive = active === id;
        return (
          <Button
            key={id}
            type="button"
            variant={isActive ? "accent" : "secondary"}
            size="sm"
            className="rounded-full"
            onClick={() => onChoose(id)}
          >
            <Icon className="w-4 h-4 mr-2" />
            {Def.label}
          </Button>
        );
      })}
    </div>
  );
};

export default GoalChips;

import { useEffect, useMemo, useRef, useState } from "react";
import GoalChips, { GOAL_DEFS, GoalId } from "@/components/GoalChips";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { SendHorizontal } from "lucide-react";
import { stackCreate } from "@/lib/stackService";

export type ChatMessage = { role: "user" | "assistant"; content: string };
export type StackResponse = {
  goalId: string;
  summary: string;
  items: { name: string; slug?: string; tags: string[]; route: string; why: string }[];
  synergy: string;
  disclaimer: string;
};

interface ChatWindowProps {
  onResult: (result: StackResponse) => void;
  onError?: (msg: string) => void;
}

const ChatWindow = ({ onResult, onError }: ChatWindowProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const cacheRef = useRef<Map<string, StackResponse>>(new Map());
  const [activeGoal, setActiveGoal] = useState<GoalId | null>(null);

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  const handleSend = async (goalId: GoalId, autoText?: string) => {
    if (pending) return;
    const text = (autoText ?? input).trim();
    if (!text) return;

    // Append user message
    const userMsg: ChatMessage = { role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setPending(true);

    // Streaming indicator
    const thinkingMsg: ChatMessage = { role: "assistant", content: "Thinking…" };
    setMessages((m) => [...m, thinkingMsg]);

    try {
      const useCache = !autoText && text.length === 0 ? false : autoText !== undefined && !input.trim();
      const cacheKey = goalId;

      if (autoText && cacheRef.current.has(cacheKey)) {
        const cached = cacheRef.current.get(cacheKey)!;
        // Replace thinking with summary
        setMessages((m) => [...m.slice(0, -1), { role: "assistant", content: cached.summary }] );
        onResult(cached);
        setPending(false);
        inputRef.current?.focus();
        return;
      }

      const res = await stackCreate({ goalId, userNotes: text });
      cacheRef.current.set(cacheKey, res);
      setMessages((m) => [...m.slice(0, -1), { role: "assistant", content: res.summary }] );
      onResult(res);
    } catch (e: any) {
      setMessages((m) => m.slice(0, -1)); // remove thinking
      onError?.("Could not generate a stack. Try again.");
      toast({ description: "Could not generate a stack. Try again." });
    } finally {
      setPending(false);
      inputRef.current?.focus();
    }
  };

  const onChip = (goalId: GoalId) => {
    const label = GOAL_DEFS[goalId].label;
    setActiveGoal(goalId);
    setInput(label);
    handleSend(goalId, label);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const gid: GoalId | null = activeGoal ?? ("custom" as any);
    if (!gid || gid === ("custom" as any)) {
      onError?.("Please pick a goal chip first.");
      toast({ description: "Please pick a goal chip first." });
      return;
    }
    handleSend(gid);
  };

  return (
    <div className="bg-black/30 border border-white/10 rounded-xl p-4 shadow-lg">
      <div className="mb-3">
        <h1 className="text-xl font-bold text-white">Stack Creator (Research-only)</h1>
        <p className="text-sm text-white/60">Describe your goal or pick a chip to get started.</p>
      </div>

      {/* Transcript */}
      <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "ml-auto max-w-[80%] rounded-2xl bg-white/10 text-white p-3 shadow"
                : "mr-auto max-w-[85%] rounded-2xl bg-gradient-to-r from-cyan-500/15 to-blue-500/15 text-cyan-100 p-3 shadow"
            }
          >
            {m.content}
          </div>
        ))}
      </div>

      {/* Chips */}
      <div className="mt-4">
        <GoalChips onChoose={(id) => onChip(id)} active={activeGoal} />
      </div>

      {/* Composer */}
      <form onSubmit={onSubmit} className="mt-3">
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                const gid = activeGoal;
                if (!gid) {
                  onError?.("Please pick a goal chip first.");
                  toast({ description: "Please pick a goal chip first." });
                  return;
                }
                handleSend(gid);
              }
            }}
            placeholder="Add any notes (optional). Press Enter to send."
            className="flex-1 min-h-[56px] max-h-40 resize-y rounded-lg bg-black/40 border border-white/10 text-white p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          />
          <Button type="submit" disabled={pending || !activeGoal} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            <SendHorizontal className="w-4 h-4 mr-2" />
            Send
          </Button>
        </div>
      </form>

      <p className="mt-2 text-xs text-white/60">
        Educational research context only. Human use may be restricted or illegal in your region.
      </p>
    </div>
  );
};

export default ChatWindow;

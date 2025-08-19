import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, ClipboardList } from "lucide-react";
import type { StackResponse } from "@/components/ChatWindow";

const PeptideCard = React.lazy(() => import("@/components/PeptideCard"));

interface ResultTabsProps {
  result?: StackResponse;
  fallbackDisclaimer: string;
}

const ResultTabs: React.FC<ResultTabsProps> = ({ result, fallbackDisclaimer }) => {
  const items = result?.items ?? [];
  const disclaimer = result?.disclaimer || fallbackDisclaimer;

  const copyChecklist = async () => {
    if (!result) return;
    const lines = result.items.map((it, i) => `- ${it.name} — ${it.why} (route: ${it.route})`);
    const text = [result.summary, "", ...lines, "", "Synergy: " + result.synergy, "", disclaimer].join("\n");
    await navigator.clipboard.writeText(text);
  };

  const exportMarkdown = () => {
    if (!result) return;
    const md = `# Stack: ${result.goalId}\n\n${result.summary}\n\n## Overview\n${result.items
      .map((it) => `- **${it.name}** — ${it.why} (route: ${it.route})`)
      .join("\n")}\n\n## How this stack works\n${result.synergy}\n\n---\n${disclaimer}\n`;
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `peplike-${result.goalId}-stack.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-black/30 border border-white/10 rounded-xl p-4 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-white">Results</h2>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={copyChecklist} disabled={!result}>
            <ClipboardList className="w-4 h-4 mr-2" /> Copy checklist
          </Button>
          <Button variant="secondary" size="sm" onClick={exportMarkdown} disabled={!result}>
            <Download className="w-4 h-4 mr-2" /> Export Markdown
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          {!items.length ? (
            <p className="text-white/60 text-sm">No results yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Suspense fallback={<p className="text-white/60 text-sm">Loading…</p>}>
                {items.map((it) => (
                  <PeptideCard key={it.slug || it.name} item={it} />
                ))}
              </Suspense>
            </div>
          )}
        </TabsContent>
        <TabsContent value="details">
          {!items.length ? (
            <p className="text-white/60 text-sm">No details available.</p>
          ) : (
            <div className="space-y-3">
              <div>
                <h3 className="text-white font-semibold mb-1">How this stack works</h3>
                <p className="text-white/80 text-sm">{result?.synergy}</p>
              </div>
              {items.map((it) => (
                <article key={it.slug || it.name} className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-white font-semibold">{it.name}</h4>
                  <p className="text-white/80 text-sm">{it.why}</p>
                </article>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <p className="mt-3 text-xs text-white/60">{disclaimer}</p>
    </div>
  );
};

export default ResultTabs;

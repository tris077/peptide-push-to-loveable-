import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import ChatWindow, { StackResponse } from "@/components/ChatWindow";
import ResultTabs from "@/components/ResultTabs";

const DEFAULT_DISCLAIMER = "Educational research context only. Verify legality in your region. Human use may be restricted or illegal.";

const StackCreatorPage = () => {
  const [result, setResult] = useState<StackResponse | undefined>();

  useEffect(() => {
    document.title = "Peplike Stack Creator | Research-only";
    const meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = "Build research-only peptide stacks with Peplike's Stack Creator.";
      document.head.appendChild(m);
    } else {
      meta.setAttribute("content", "Build research-only peptide stacks with Peplike's Stack Creator.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 pt-16">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chat Column */}
        <section className="lg:col-span-7">
          <ChatWindow onResult={(res) => setResult(res)} onError={(msg)=> toast({ description: msg })} />
        </section>

        {/* Results Column */}
        <aside className="lg:col-span-5">
          <ResultTabs result={result} fallbackDisclaimer={DEFAULT_DISCLAIMER} />
        </aside>
      </div>
    </div>
  );
};

export default StackCreatorPage;

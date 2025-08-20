import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "../components/Navigation";
import PeptideCard from "../components/PeptideCard";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  peptides?: any[];
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: "1",
    type: "ai",
    content: "Hello! I'm your AI peptide research assistant. Tell me about your goals and I'll recommend optimal peptide stacks with detailed synergy analysis.",
  }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const goalChips = ["Muscle Growth", "Cognitive Enhancement", "Fat Loss", "Recovery", "Anti-Aging", "Performance"];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response with peptide recommendations
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "Based on your goals, I recommend the following peptide stack with optimal synergy:",
        peptides: [
          {
            name: "BPC-157",
            category: "Recovery",
            route: "Injection",
            description: "Promotes healing and tissue repair through enhanced angiogenesis and cellular regeneration.",
            insight: "Works synergistically with TB-500 for comprehensive tissue repair and recovery acceleration."
          },
          {
            name: "TB-500",
            category: "Recovery", 
            route: "Injection",
            description: "Accelerates wound healing and reduces inflammation while promoting cellular migration.",
            insight: "Complements BPC-157 by targeting different healing pathways for maximum recovery benefits."
          }
        ]
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleChipClick = (goal: string) => {
    setInput(goal);
    setIsExpanded(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value.length > 0 && !isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isExpanded 
        ? 'bg-gradient-to-t from-[hsl(var(--peplike-blue))] via-[hsl(var(--peplike-purple))] to-[hsl(var(--peplike-pink))]' 
        : 'bg-gradient-radial from-[hsl(var(--peplike-blue)/0.9)] via-[hsl(var(--peplike-purple)/0.95)] to-[hsl(var(--peplike-pink)/0.9)]'
    }`} 
    style={!isExpanded ? {
      background: `radial-gradient(ellipse 120% 60% at 50% 0%, 
        hsl(var(--peplike-blue)) 0%, 
        hsl(var(--peplike-purple)) 35%, 
        hsl(var(--peplike-pink)) 70%, 
        hsl(var(--peplike-blue)) 100%)`
    } : {}}>
      <Navigation />
      
      {!isExpanded ? (
        // Initial Hero State
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-4xl">
            {/* Logo and Heading */}
            <div className="text-center mb-12 animate-fade-in">
              <img 
                src="/lovable-uploads/6ca13bba-366e-4ba7-9afd-19a7fae4bfc2.png" 
                alt="Peplike AI"
                className="h-48 w-auto mx-auto drop-shadow-2xl"
              />
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Build something
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Create peptide stacks and research by chatting with AI
              </p>
            </div>

            {/* Compact Chat Interface */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 animate-scale-in">
              {/* Goal Chips */}
              <div className="px-6 py-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {goalChips.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => handleChipClick(goal)}
                      className="px-4 py-2 rounded-full bg-white/50 hover:bg-white/70 text-gray-700 text-sm font-medium transition-all duration-200 border border-gray-200/50 hover-scale"
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-6 border-t border-gray-100/50">
                <div className="flex space-x-3">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask Peplike AI to create a peptide stack..."
                    className="flex-1 h-14 rounded-2xl border-gray-200/50 focus:border-[hsl(var(--peplike-purple))] focus:ring-[hsl(var(--peplike-purple)/0.2)] bg-white/80 placeholder:text-gray-500 text-base"
                  />
                  <Button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-purple))] hover:from-[hsl(var(--peplike-purple))] hover:to-[hsl(var(--peplike-pink))] text-white border-0 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Expanded Full Screen Chat
        <div className="pt-20 h-screen flex flex-col animate-fade-in">
          <div className="flex-1 max-w-6xl mx-auto w-full px-4 flex flex-col">
            {/* Compact Header */}
            <div className="text-center py-4 mb-4">
              <div className="flex items-center justify-center space-x-3">
                <img 
                  src="/lovable-uploads/6ca13bba-366e-4ba7-9afd-19a7fae4bfc2.png" 
                  alt="Peplike AI"
                  className="h-12 w-auto"
                />
                <h1 className="text-2xl font-bold text-white">Peplike AI</h1>
              </div>
            </div>

            {/* Full Screen Chat Interface */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 flex-1 flex flex-col">
              {/* Messages Area - Expanded */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={message.type === "user" ? "chat-bubble-user" : "chat-bubble-ai"}>
                      <div className="flex items-start space-x-2">
                        {message.type === "ai" && (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-purple))] flex items-center justify-center flex-shrink-0 mt-1">
                            <Sparkles className="w-3 h-3 text-white" />
                          </div>
                        )}
                        <div>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          
                          {/* Peptide Cards */}
                          {message.peptides && (
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                              {message.peptides.map((peptide, index) => (
                                <PeptideCard key={index} {...peptide} className="!shadow-sm" />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="chat-bubble-ai">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-purple))] flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-white animate-pulse" />
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area - Fixed at bottom */}
              <div className="border-t border-gray-100/50 p-6">
                <div className="flex space-x-3">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask Peplike AI to create a peptide stack..."
                    className="flex-1 h-14 rounded-2xl border-gray-200/50 focus:border-[hsl(var(--peplike-purple))] focus:ring-[hsl(var(--peplike-purple)/0.2)] bg-white/80 placeholder:text-gray-500 text-base"
                  />
                  <Button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-purple))] hover:from-[hsl(var(--peplike-purple))] hover:to-[hsl(var(--peplike-pink))] text-white border-0 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
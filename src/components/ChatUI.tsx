import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Trash2, RotateCcw, User, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
  id: string;
}

const ChatUI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const sendToAI = async (messageHistory: Message[]) => {
    const response = await fetch("/functions/v1/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        messages: messageHistory.map(({ role, content }) => ({ role, content }))
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to get response");
    }

    const data = await response.json();
    return data.content;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      id: generateId()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await sendToAI(newMessages);
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
        id: generateId()
      };
      setMessages([...newMessages, assistantMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get response",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (messageId: string) => {
    const messageIndex = messages.findIndex(m => m.id === messageId);
    if (messageIndex === -1) return;

    const message = messages[messageIndex];
    let newMessages = [...messages];

    if (message.role === "assistant") {
      // Find the user message that came before this assistant message
      let userMessageIndex = messageIndex - 1;
      while (userMessageIndex >= 0 && newMessages[userMessageIndex].role !== "user") {
        userMessageIndex--;
      }
      
      if (userMessageIndex >= 0) {
        // Remove both user and assistant messages
        newMessages.splice(userMessageIndex, messageIndex - userMessageIndex + 1);
      } else {
        // Just remove the assistant message if no user message found
        newMessages.splice(messageIndex, 1);
      }
    } else {
      // For user messages, find and remove the associated assistant message too
      let assistantMessageIndex = messageIndex + 1;
      while (assistantMessageIndex < newMessages.length && newMessages[assistantMessageIndex].role !== "assistant") {
        assistantMessageIndex++;
      }
      
      if (assistantMessageIndex < newMessages.length) {
        // Remove both user and assistant messages
        newMessages.splice(messageIndex, assistantMessageIndex - messageIndex + 1);
      } else {
        // Just remove the user message if no assistant message found
        newMessages.splice(messageIndex, 1);
      }
    }

    setMessages(newMessages);
  };

  const handleRewrite = async (messageId: string) => {
    const messageIndex = messages.findIndex(m => m.id === messageId);
    if (messageIndex === -1 || messages[messageIndex].role !== "assistant" || isLoading) return;

    // Find the conversation up to the user message that produced this assistant reply
    let userMessageIndex = messageIndex - 1;
    while (userMessageIndex >= 0 && messages[userMessageIndex].role !== "user") {
      userMessageIndex--;
    }

    if (userMessageIndex < 0) return;

    const conversationUpToUser = messages.slice(0, userMessageIndex + 1);
    setIsLoading(true);

    try {
      const response = await sendToAI(conversationUpToUser);
      const newMessages = [...messages];
      newMessages[messageIndex] = {
        ...newMessages[messageIndex],
        content: response
      };
      setMessages(newMessages);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to rewrite response",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    "Find peptides for muscle recovery",
    "Research nootropics for focus", 
    "Anti-aging compounds database",
    "Create a research stack"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center pt-20 pb-8"
          >
            <motion.div 
              className="flex items-center justify-center gap-3 mb-4"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-pink-400 via-yellow-400 to-orange-400 rounded-3xl flex items-center justify-center shadow-xl shadow-pink-300/60"
                animate={{ 
                  boxShadow: [
                    "0 25px 50px -12px rgba(236, 72, 153, 0.4)",
                    "0 25px 50px -12px rgba(251, 191, 36, 0.6)",
                    "0 25px 50px -12px rgba(249, 115, 22, 0.4)",
                    "0 25px 50px -12px rgba(236, 72, 153, 0.4)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <Bot className="h-6 w-6 text-white drop-shadow-lg" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl font-bold text-gray-900 mb-2 drop-shadow-sm"
              animate={{ 
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="bg-gradient-to-r from-gray-800 via-purple-700 to-pink-700 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Peplike AI
              </motion.span>
              <motion.span
                className="inline-block ml-2"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                ✨
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-800 font-semibold text-base drop-shadow-sm"
              animate={{ 
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Research compounds, peptides, and optimization insights
            </motion.p>
          </motion.div>
        )}

        {/* Chat Messages */}
        <div className="space-y-4 mb-6 min-h-[40vh] pt-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user" 
                      ? "bg-gray-100" 
                      : "bg-gradient-to-br from-cyan-400 to-blue-600"
                  }`}>
                    {message.role === "user" ? 
                      <User className="h-4 w-4 text-gray-600" /> : 
                      <Bot className="h-4 w-4 text-white" />
                    }
                  </div>
                  
                  <div className={`relative group ${
                    message.role === "user" 
                      ? "bg-gray-50 text-gray-800 rounded-2xl rounded-br-md" 
                      : "bg-white text-gray-800 rounded-2xl rounded-bl-md border border-gray-100"
                  } px-4 py-3 shadow-sm`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    
                    {/* Message Controls */}
                    <div className={`absolute top-2 ${message.role === "user" ? "left-2" : "right-2"} opacity-0 group-hover:opacity-100 transition-opacity flex gap-1`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-gray-400 hover:text-red-500 hover:bg-red-50"
                        onClick={() => handleDelete(message.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                      
                      {message.role === "assistant" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 text-gray-400 hover:text-blue-500 hover:bg-blue-50"
                          onClick={() => handleRewrite(message.id)}
                          disabled={isLoading}
                        >
                          <RotateCcw className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 justify-start"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl rounded-bl-md border border-gray-100 px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm pb-6 pt-4">
          <div className="flex gap-3 items-end">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about compounds, peptides, or research..."
              className="resize-none bg-gray-50 border-0 rounded-2xl text-sm focus:ring-1 focus:ring-blue-200 shadow-sm"
              rows={1}
              style={{ minHeight: "44px", maxHeight: "120px" }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="h-11 w-11 p-0 bg-gray-800 hover:bg-gray-700 text-white rounded-xl shadow-sm"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
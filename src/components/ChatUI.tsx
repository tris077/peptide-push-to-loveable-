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
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-50 to-cyan-100 pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Chat Messages */}
        <div className="space-y-6 mb-8 min-h-[60vh]">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user" 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                      : "bg-gradient-to-r from-cyan-500 to-blue-500"
                  }`}>
                    {message.role === "user" ? 
                      <User className="h-4 w-4 text-white" /> : 
                      <Bot className="h-4 w-4 text-white" />
                    }
                  </div>
                  
                  <Card className={`${
                    message.role === "user" 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
                      : "bg-white/80 text-gray-800"
                  } border-0 shadow-lg group`}>
                    <CardContent className="p-4 relative">
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      
                      {/* Message Controls */}
                      <div className={`absolute top-2 ${message.role === "user" ? "left-2" : "right-2"} opacity-0 group-hover:opacity-100 transition-opacity flex gap-1`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`h-6 w-6 p-0 ${message.role === "user" ? "text-white/70 hover:text-white hover:bg-white/20" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}
                          onClick={() => handleDelete(message.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                        
                        {message.role === "assistant" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                            onClick={() => handleRewrite(message.id)}
                            disabled={isLoading}
                          >
                            <RotateCcw className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 justify-start"
            >
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <Card className="bg-white/80 border-0 shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="resize-none bg-white/80 border-gray-200 rounded-2xl text-base"
              rows={3}
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
              className="h-auto px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-2xl"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Action Pills */}
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="bg-white/60 hover:bg-white/80 border-gray-200 text-gray-700 rounded-full px-4 py-2"
                  onClick={() => setInput(action)}
                >
                  {action}
                </Button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
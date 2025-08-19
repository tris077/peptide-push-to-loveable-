import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bot, User, Send, Settings, Crown, Sparkles, Brain, Zap, Microscope, FlaskConical } from "lucide-react";
// import { SubscriptionModal } from "./SubscriptionModal";
import { useAuth } from "@/contexts/AuthContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

interface GPTType {
  description: string;
  icon?: React.ComponentType<any>;
  color?: string;
}

export const ChatUI = () => {
  const { user, isAuthenticated } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGPT, setSelectedGPT] = useState("research_expert");
  const [availableGPTs, setAvailableGPTs] = useState<Record<string, GPTType>>({});
  // const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Check if user can access AI - temporarily removed paywall for testing
  const canAccessAI = isAuthenticated; // user?.subscription_tier !== 'free';

  const quickActions = [
    "What peptides are best for muscle growth?",
    "Explain BPC-157 mechanism of action",
    "How to calculate peptide dosages?",
    "What are the side effects of Semaglutide?"
  ];

  useEffect(() => {
    // Fetch available GPT types
    const fetchGPTTypes = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/chat/gpt-types");
        if (response.ok) {
          const data = await response.json();
          setAvailableGPTs(data);
        }
      } catch (error) {
        console.error("Failed to fetch GPT types:", error);
      }
    };

    fetchGPTTypes();
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Temporarily removed paywall check
    // if (!canAccessAI) {
    //   setShowSubscriptionModal(true);
    //   return;
    // }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:8000/api/v1/chat/chat?gpt_type=${selectedGPT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input.trim(),
          session_id: "test_session",
          context: "peptide_research"
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response || "I'm sorry, I couldn't process your request.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getGPTIcon = (gptType: string) => {
    const icons: Record<string, React.ComponentType<any>> = {
      research_expert: Brain,
      medical_advisor: Microscope,
      research_assistant: FlaskConical,
      default: Bot
    };
    return icons[gptType] || icons.default;
  };

  const getGPTColor = (gptType: string) => {
    const colors: Record<string, string> = {
      research_expert: "from-blue-500 to-indigo-600",
      medical_advisor: "from-emerald-500 to-teal-600",
      research_assistant: "from-purple-500 to-pink-600",
      default: "from-gray-500 to-slate-600"
    };
    return colors[gptType] || colors.default;
  };

  // Temporarily removed subscription paywall check
  // if (isAuthenticated && user?.subscription_tier === 'free') {
  //   return (
  //     // ... paywall content removed
  //   );
  // }

  // Show sign-in prompt if user is not authenticated
  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900'} flex flex-col`}>
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl"
          >
            {/* Peplike AI Logo */}
            <motion.div 
              className="flex items-center justify-center gap-3 mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl ${isDarkMode ? 'shadow-blue-500/25' : 'shadow-blue-500/20'}`}>
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Peplike AI
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                  Research Intelligence Platform
                </p>
              </div>
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-4">
              Welcome to Peplike AI
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
              Sign in to access our advanced AI research assistant and unlock the power of peptide research insights.
            </p>

            <div className={`p-8 rounded-3xl border-2 ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-blue-200/50'} backdrop-blur-xl shadow-2xl mb-8`}>
              <h3 className="text-xl font-semibold mb-4">What you'll get:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Advanced peptide research insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Personalized compound recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span>Unlimited AI conversations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span>Priority support & updates</span>
                </div>
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Sign in to continue to the AI assistant
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900'} flex flex-col`}>
      {/* Header */}
      <motion.header 
        className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-xl border-b shadow-sm`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Peplike AI Logo */}
            <motion.button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className={`w-8 h-8 bg-gradient-to-br from-sky-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
                {/* New Logo Design - Clean Implementation */}
                <div className="relative w-5 h-5">
                  {/* Abstract double helix/A-shape design */}
                  <div className="absolute inset-0 w-1 h-full">
                    <div className="w-full h-full bg-gradient-to-b from-pink-400 to-blue-500 rounded-full transform rotate-12" />
                  </div>
                  <div className="absolute inset-0 w-1 h-full">
                    <div className="w-full h-full bg-gradient-to-b from-pink-400 to-blue-500 rounded-full transform -rotate-12" />
                  </div>
                  {/* Two white dots positioned at top-right and bottom-left */}
                  <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full" />
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full" />
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Peplike AI
              </span>
            </motion.button>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* GPT Type Selector */}
              <select
                value={selectedGPT}
                onChange={(e) => setSelectedGPT(e.target.value)}
                className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-400' 
                    : 'bg-white border-gray-200 text-gray-700 focus:border-blue-400'
                } focus:outline-none focus:ring-1 focus:ring-blue-500/20`}
              >
                {Object.entries(availableGPTs).map(([key, gpt]) => (
                  <option key={key} value={key}>
                    {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {isDarkMode ? <Zap className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 py-6">
        {/* Welcome Message */}
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 flex-1 flex flex-col justify-center"
          >
            {/* Simple Greeting */}
            <motion.h2 
              className="text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hey, {user?.full_name?.split(' ')[0] || 'there'}. Ready to dive in?
            </motion.h2>

            {/* Quick Actions */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className={`p-3 rounded-lg border text-left transition-all duration-200 hover:scale-102 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600 hover:border-blue-400 hover:bg-gray-700/50' 
                      : 'bg-white/60 border-gray-200 hover:border-blue-400 hover:bg-blue-50/50'
                  } backdrop-blur-sm shadow-sm hover:shadow-md`}
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <p className="text-sm text-gray-600 dark:text-gray-300">{action}</p>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Messages */}
        <div className="flex-1 space-y-6 mb-6 overflow-y-auto">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-3xl ${message.role === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                  {/* Message Bubble */}
                  <div className={`flex items-start gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'user' 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600' 
                          : `bg-gradient-to-r ${getGPTColor(selectedGPT)}`
                      } shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {message.role === 'user' ? (
                        <User className="h-5 w-5 text-white" />
                      ) : (
                        React.createElement(getGPTIcon(selectedGPT), { className: "h-5 w-5 text-white" })
                      )}
                    </motion.div>

                    {/* Message Content */}
                    <div className={`rounded-2xl px-6 py-4 shadow-lg ${
                      message.role === 'user'
                        ? isDarkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-600 text-white'
                        : isDarkMode
                          ? 'bg-gray-800 text-white border border-gray-700'
                          : 'bg-white text-gray-800 border border-gray-200'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      
                      {/* Timestamp */}
                      {message.timestamp && (
                        <p className={`text-xs mt-2 ${
                          message.role === 'user' 
                            ? 'text-blue-100' 
                            : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading Indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="max-w-3xl">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${getGPTColor(selectedGPT)} shadow-lg`}>
                    {React.createElement(getGPTIcon(selectedGPT), { className: "h-5 w-5 text-white" })}
                  </div>
                  <div className={`rounded-2xl px-6 py-4 ${
                    isDarkMode 
                      ? 'bg-gray-800 border border-gray-700' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Peplike AI is thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <motion.div
          className={`sticky bottom-0 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-xl border-t ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          } -mx-6 px-6 py-4`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Sleek Chat Input Container */}
            <div className={`relative rounded-full ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-800 via-gray-750 to-gray-800' 
                : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50'
            } transition-all duration-200`}>
              
              {/* Input Field */}
              <div className="flex items-center gap-3 p-4">
                {/* Plus Icon for Attachments */}
                <button className={`p-2 rounded-full transition-all duration-200 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
                    : 'text-blue-500 hover:text-blue-600 hover:bg-blue-100'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>

                {/* Text Input */}
                <div className="flex-1">
                  <Textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask anything"
                    className={`w-full resize-none border-0 bg-transparent text-sm leading-relaxed placeholder-gray-400 focus:outline-none focus:ring-0 ${
                      isDarkMode 
                        ? 'text-white placeholder-gray-400' 
                        : 'text-gray-900 placeholder-gray-500'
                    }`}
                    rows={1}
                    style={{ minHeight: '20px', maxHeight: '100px' }}
                  />
                </div>

                {/* Send Button */}
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                    !input.trim() || isLoading
                      ? isDarkMode
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : isDarkMode
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
                  }`}
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Subtle Help Text */}
            <div className="flex items-center justify-between mt-2 px-1">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Press Enter to send
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                <span>Powered by</span>
                <div className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-blue-500" />
                  <span className="font-medium text-blue-600 dark:text-blue-400">Peplike AI</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Temporarily removed subscription modal */}
      {/* <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
      /> */}
      
      <div ref={messagesEndRef} />
    </div>
  );
};
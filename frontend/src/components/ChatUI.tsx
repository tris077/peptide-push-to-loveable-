import React, { useState, useRef, useEffect } from 'react';
import { Send, Zap, Brain, Heart, TrendingUp, Clock, Star } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatUI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m Peplike AI, your peptide research assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `I understand you're asking about "${inputText}". Let me provide you with some research insights and recommendations based on the latest scientific literature.`,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const categories = [
    { name: 'Muscle Growth', icon: Zap, color: 'from-blue-500 to-purple-500' },
    { name: 'Cognitive Enhancement', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Fat Loss', icon: TrendingUp, color: 'from-green-500 to-blue-500' },
    { name: 'Recovery', icon: Heart, color: 'from-red-500 to-orange-500' },
    { name: 'Anti-Aging', icon: Clock, color: 'from-yellow-500 to-red-500' },
    { name: 'Performance', icon: Star, color: 'from-indigo-500 to-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-24 bg-white/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-32 right-20 w-24 h-20 bg-white/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-24 bg-white/10 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">P</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Peplike AI</h1>
          <h2 className="text-3xl font-semibold text-white mb-2">Build something</h2>
          <p className="text-xl text-white/90">Create peptide stacks and research by chatting with AI</p>
        </div>

        {/* Main Chat Interface */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:border-gray-300 transition-colors duration-200 text-sm font-medium"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto mb-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <div className={`text-xs mt-2 ${
                    message.isUser ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Peplike AI to create a peptide stack..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-100 transition-all duration-300 pr-12"
                disabled={isLoading}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-3">Quick actions:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200">
                "Create a muscle growth stack"
              </button>
              <button className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200">
                "Explain BPC-157 benefits"
              </button>
              <button className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200">
                "Research peptide safety"
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
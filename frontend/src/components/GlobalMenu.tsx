import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Layers, 
  Info, 
  MessageCircle,
  Settings,
  User,
  Sparkles
} from "lucide-react";

export const GlobalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Research Library", path: "/", icon: Home },
    { name: "AI Chat", path: "/chat", icon: MessageCircle },
    { name: "Fundamentals", path: "/fundamentals", icon: BookOpen },
    { name: "About", path: "/about", icon: Info },
  ];

  const isActiveRoute = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-surface/80 backdrop-blur-sm border border-border/50 hover:bg-surface-hover"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-surface/95 backdrop-blur-xl border-r border-border/50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-texture opacity-20"></div>
        
        <div className="p-6 relative z-10">
          {/* Enhanced Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                {/* Use the exact logo image the user provided */}
                <img
                  src="/logo.png?v=5"
                  alt="Peplike AI Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Peplike AI
                </h2>
                <div className="flex items-center space-x-1">
                  <Sparkles className="h-3 w-3 text-blue-500 animate-pulse" />
                  <p className="text-sm text-text-secondary">Research Platform</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    isActiveRoute(item.path)
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-xs text-text-tertiary">
              <p>Peplike AI Research Platform</p>
              <p className="mt-1">Discover the future of peptides</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "./AuthModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  User, 
  Settings, 
  LogOut, 
  BookOpen,
  Layers,
  Info,
  Home,
  Sparkles
} from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  const navigationItems = [
    { name: "Research Library", href: "/", icon: Home },
    { name: "AI Chat", href: "/chat", icon: BookOpen },
    { name: "Fundamentals", href: "/fundamentals", icon: BookOpen },
    { name: "About", href: "/about", icon: Info },
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <nav className="bg-surface/95 border-b border-border/50 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="absolute inset-0 bg-texture opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  {/* Use the exact logo image the user provided */}
                  <img
                    src="/logo.png?v=5"
                    alt="Peplike AI Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                    style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                    onLoad={() => console.log('Logo loaded successfully!')}
                    onError={(e) => {
                      console.error('Logo failed to load:', e);
                      const target = e.target as HTMLImageElement;
                      target.style.border = '2px solid red';
                      target.style.backgroundColor = '#f0f0f0';
                      console.log('Current src:', target.src);
                      console.log('Current pathname:', window.location.pathname);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900">
                    Peplike AI
                  </span>
                  <div className="flex items-center space-x-1 opacity-75">
                    <Sparkles className="h-3 w-3 text-blue-500 animate-pulse" />
                    <span className="text-xs text-gray-500">Research Platform</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Primary Navigation - Center/Right */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActiveRoute(item.href)
                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* CTA Button - Right */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>{user.username || user.email}</span>
                  </button>

                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-lg py-1 z-50">
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                      >
                        Profile
                      </a>
                      <a
                        href="/settings"
                        className="block px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                      >
                        Settings
                      </a>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};
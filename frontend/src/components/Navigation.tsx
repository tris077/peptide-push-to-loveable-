import { Link, useLocation } from "react-router-dom";
import { MessageSquare, BookOpen, GraduationCap, Users, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navItems = [
    { path: "/", label: "Home", icon: null },
    { path: "/chatbot", label: "Chatbot", icon: MessageSquare },
    { path: "/library", label: "Library", icon: BookOpen },
    { path: "/fundamentals", label: "Fundamentals", icon: GraduationCap },
    { path: "/about", label: "About", icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6ca13bba-366e-4ba7-9afd-19a7fae4bfc2.png" 
              alt="Peplike AI"
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.slice(1).map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              // Different gradient combinations for each nav item
              const gradients = [
                "hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white",
                "hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:text-white", 
                "hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-500 hover:text-white",
                "hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white"
              ];
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${gradients[index]} ${
                    isActive 
                      ? "bg-gradient-to-r from-[hsl(var(--peplike-blue))] via-[hsl(var(--peplike-purple))] to-[hsl(var(--peplike-pink))] text-white font-semibold shadow-lg" 
                      : "text-gray-600 hover:shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Menu / Auth */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700 hidden sm:block">
                  Welcome, {user.email}
                </span>
                <Button
                  onClick={signOut}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>
            ) : (
              <Link to="/chatbot">
                <Button className="bg-gradient-to-r from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-purple))] text-white hover:from-[hsl(var(--peplike-purple))] hover:to-[hsl(var(--peplike-pink))]">
                  Get Started
                </Button>
              </Link>
            )}
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
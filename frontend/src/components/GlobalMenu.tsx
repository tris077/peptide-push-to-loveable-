import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  Home,
  BookOpen,
  Calculator,
  Info,
  User,
  Heart,
  Settings,
  Crown,
  Sparkles
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const GlobalMenu = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Research Library", path: "/", description: "Browse all peptides" },
    { icon: BookOpen, label: "AI Chat", path: "/chat", description: "AI-powered research assistant" },
    { icon: Calculator, label: "Fundamentals", path: "/fundamentals", description: "Calculators & tools" },
    { icon: Info, label: "About", path: "/about", description: "Learn about Peplike" },
    { icon: Settings, label: "Settings", path: "/settings", description: "App preferences & subscription" },
  ];

  const userMenuItems = [
    { icon: User, label: "Profile", path: "/profile", description: "Manage your account" },
    { icon: Heart, label: "Favorites", path: "/favorites", description: "Your saved peptides" },
  ];

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path);
    navigate(path);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="fixed top-4 left-2 z-[9999] bg-white/90 backdrop-blur-md border border-blue-200 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200 rounded-full p-2.5 shadow-sm"
          aria-label="Open navigation menu"
          title="Navigation Menu"
        >
          <Menu className="h-5 w-5 text-blue-600" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-80 bg-white/95 backdrop-blur-xl border border-gray-200 text-gray-800 shadow-2xl"
        sideOffset={8}
      >
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900 text-lg">Navigation Menu</h3>
          <p className="text-sm text-gray-600">Quick access to all pages</p>
        </div>

        {/* Main Navigation */}
        <div className="p-2">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 py-2">
            Main Pages
          </div>
          {menuItems.map((item) => (
            <DropdownMenuItem
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className="cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </div>

        {/* User Menu (if authenticated) */}
        {isAuthenticated && (
          <>
            <DropdownMenuSeparator />
            <div className="p-2">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 py-2">
                Your Account
              </div>
              {userMenuItems.map((item) => (
                <DropdownMenuItem
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{item.label}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

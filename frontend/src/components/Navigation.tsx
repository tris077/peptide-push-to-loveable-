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
import { Badge } from "@/components/ui/badge";
import { AuthModal } from "./AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Menu, 
  User, 
  BookOpen, 
  Info, 
  Mail, 
  Plus,
  Sparkles,
  LogOut,
  Crown,
  Settings,
  Heart
} from "lucide-react";

export const Navigation = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-xl border-b border-gray-200/30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer ml-12"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-sky-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* New Logo Design - Clean Implementation */}
              <div className="relative w-6 h-6">
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
            </motion.div>
            <span className="text-2xl font-black">
              <span className="text-charcoal-800">Peplike</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> AI</span>
            </span>
          </motion.div>

          {/* Spacer - removed desktop navigation since we have global menu */}
          <div className="flex-1"></div>

          {/* Auth Section */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-2 hover:bg-gray-100/50 rounded-full px-4 py-2"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{user?.full_name || user?.username}</span>
                    {user?.subscription_tier !== 'free' && (
                      <Crown className="h-4 w-4 text-yellow-500" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                
                <DropdownMenuContent 
                  align="end" 
                  className="w-64 bg-white/95 backdrop-blur-xl border border-gray-200 text-gray-800 shadow-xl"
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="font-semibold text-gray-900">{user?.full_name || user?.username}</div>
                    <div className="text-sm text-gray-600">{user?.email}</div>
                    {user?.subscription_tier !== 'free' && (
                      <div className="flex items-center gap-2 mt-2">
                        <Crown className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs text-yellow-600 font-medium">
                          {user?.subscription_tier === 'premium' ? 'Premium' : 'Basic'} Subscriber
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <DropdownMenuItem 
                    onClick={() => navigate("/profile")}
                    className="cursor-pointer p-3 hover:bg-gray-50"
                  >
                    <User className="h-4 w-4 mr-3 text-gray-600" />
                    Profile
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
                    onClick={() => navigate("/favorites")}
                    className="cursor-pointer p-3 hover:bg-gray-50"
                  >
                    <Heart className="h-4 w-4 mr-3 text-gray-600" />
                    Favorites
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
                    onClick={() => navigate("/settings")}
                    className="cursor-pointer p-3 hover:bg-gray-50"
                  >
                    <Settings className="h-4 w-4 mr-3 text-gray-600" />
                    Settings & Subscription
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="cursor-pointer p-3 hover:bg-red-50 text-red-600"
                  >
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => setShowAuthModal(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu - Simplified since we have global menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="relative text-gray-700 hover:bg-gray-100/50 rounded-full p-3 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
              align="end" 
              className="w-64 bg-black/95 backdrop-blur-xl border border-white/20 text-white"
            >
              {/* Mobile-specific quick actions can go here if needed */}
              <DropdownMenuItem 
                onClick={() => navigate("/")}
                className="cursor-pointer p-4 hover:bg-white/10 focus:bg-white/10"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Home</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Back to main page
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>

              {!isAuthenticated && (
                <DropdownMenuItem 
                  onClick={() => setShowAuthModal(true)}
                  className="cursor-pointer p-4 hover:bg-white/10 focus:bg-white/10"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Sign In</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Access your research library
                      </p>
                    </div>
                  </div>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};
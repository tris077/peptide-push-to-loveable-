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
import { 
  Menu, 
  User, 
  BookOpen, 
  Info, 
  Mail, 
  Plus,
  Sparkles
} from "lucide-react";

export const Navigation = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-5 w-5 text-white" />
          </motion.div>
          <span className="text-2xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
            Peplike
          </span>
        </motion.div>

        {/* Right Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className="relative text-white hover:bg-white/10 rounded-full p-3"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent 
            align="end" 
            className="w-64 bg-black/95 backdrop-blur-xl border border-white/20 text-white"
          >
            <DropdownMenuItem 
              onClick={() => navigate("/prerequisites")}
              className="cursor-pointer p-4 hover:bg-white/10 focus:bg-white/10"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Prerequisites</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Foundational steps for optimization
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="bg-white/10" />
            
            <DropdownMenuItem 
              onClick={() => navigate("/about")}
              className="cursor-pointer p-4 hover:bg-white/10 focus:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Info className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold">About Us</span>
                  <p className="text-xs text-gray-400">Learn about our mission</p>
                </div>
              </div>
            </DropdownMenuItem>
            
            <DropdownMenuItem 
              onClick={() => navigate("/contact")}
              className="cursor-pointer p-4 hover:bg-white/10 focus:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold">Contact Us</span>
                  <p className="text-xs text-gray-400">Get in touch with our team</p>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
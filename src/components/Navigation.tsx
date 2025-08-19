import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Search,
  Heart,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0.3, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}
      style={{
        backgroundColor: `hsl(0 0% 100% / ${backgroundOpacity.get()})`,
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-soft bg-gradient-hero"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/lovable-uploads/e823604a-40ad-41ea-8d57-7199e69776df.png"
              alt="Peplike AI Logo"
              className="w-6 h-6"
            />
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Peplike AI
          </span>
        </motion.div>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-3 rounded-lg hover:bg-secondary transition-fast"
            onClick={() => navigate("/directory")}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Directory
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-3 rounded-lg hover:bg-secondary transition-fast"
            onClick={() => navigate("/chat")}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Chat AI
          </Button>
          <div className="w-px h-6 bg-border mx-2" />
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0 rounded-lg hover:bg-secondary transition-fast"
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0 rounded-lg hover:bg-secondary transition-fast"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0 rounded-lg hover:bg-secondary transition-fast"
          >
            <User className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className="relative text-foreground hover:bg-secondary rounded-lg p-2 transition-fast"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent 
            align="end" 
            className="w-72 glass-card border-border/50 shadow-floating"
          >
            <DropdownMenuItem 
              onClick={() => navigate("/directory")}
              className="cursor-pointer p-4 hover:bg-secondary/50 focus:bg-secondary/50 transition-fast"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Research Library</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Browse all compounds and peptides
                  </p>
                </div>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem 
              onClick={() => navigate("/chat")}
              className="cursor-pointer p-4 hover:bg-secondary/50 focus:bg-secondary/50 transition-fast"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-soft">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">AI Assistant</span>
                    <Badge className="bg-accent-purple/20 text-accent-purple border-accent-purple/20 text-xs">New</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Chat with Peplike AI for research
                  </p>
                </div>
              </div>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-border" />

            <DropdownMenuItem 
              onClick={() => navigate("/prerequisites")}
              className="cursor-pointer p-4 hover:bg-secondary/50 focus:bg-secondary/50 transition-fast"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 bg-gradient-soft rounded-lg flex items-center justify-center shadow-soft">
                  <BookOpen className="h-5 w-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-foreground">Prerequisites</span>
                  <p className="text-xs text-muted-foreground">
                    Foundational steps for optimization
                  </p>
                </div>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem 
              onClick={() => navigate("/fundamentals")}
              className="cursor-pointer p-4 hover:bg-secondary/50 focus:bg-secondary/50 transition-fast"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 bg-gradient-soft rounded-lg flex items-center justify-center shadow-soft">
                  <BookOpen className="h-5 w-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-foreground">Fundamentals</span>
                  <p className="text-xs text-muted-foreground">
                    Technical reference for research
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="bg-border" />
            
            <DropdownMenuItem 
              onClick={() => navigate("/about")}
              className="cursor-pointer p-4 hover:bg-secondary/50 focus:bg-secondary/50 transition-fast"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-soft rounded-lg flex items-center justify-center shadow-soft">
                  <Info className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">About Us</span>
                  <p className="text-xs text-muted-foreground">Learn about our mission</p>
                </div>
              </div>
            </DropdownMenuItem>
            
            <DropdownMenuItem 
              onClick={() => navigate("/contact")}
              className="cursor-pointer p-4 hover:bg-secondary/50 focus:bg-secondary/50 transition-fast"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-soft rounded-lg flex items-center justify-center shadow-soft">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">Contact Us</span>
                  <p className="text-xs text-muted-foreground">Get in touch with our team</p>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.nav>
  );
};
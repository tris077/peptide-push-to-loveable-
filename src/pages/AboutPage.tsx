import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Sparkles,
  Microscope,
  Shield,
  Zap,
  ChevronRight,
  FlaskConical
} from "lucide-react";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden">
      <Navigation />
      
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(185_100%_65%_/_0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(260_60%_75%_/_0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(220_100%_70%_/_0.1),transparent_70%)]" />
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-60" />
      </div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:bg-white/10 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Directory
            </Button>

            <div className="text-center">
              <motion.div 
                className="relative w-24 h-24 mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/25"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-12 w-12 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              
              <motion.h1 
                className="text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                About Peplike
              </motion.h1>
              <motion.p 
                className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Advancing biotech research through comprehensive peptide and nootropic compound intelligence
              </motion.p>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <Card className="relative bg-gradient-to-r from-slate-800/50 via-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
              <CardContent className="relative pt-12 pb-12 px-8">
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    className="flex space-x-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, staggerChildren: 0.1 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Microscope className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                    >
                      <FlaskConical className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Shield className="h-6 w-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.p 
                  className="text-xl text-white leading-relaxed max-w-4xl mx-auto text-center font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  Peplike democratizes access to high-quality biotech compound information. Our comprehensive directory provides 
                  researchers with <span className="text-cyan-300 font-semibold">verified data</span> on peptides, nootropics, and research chemicals, 
                  bridging the gap between cutting-edge science and practical applications.
                </motion.p>
                
                {/* Stats Row */}
                <motion.div 
                  className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-cyan-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">500+</div>
                    <div className="text-slate-300 text-sm font-medium">Compounds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">99.9%</div>
                    <div className="text-slate-300 text-sm font-medium">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">24/7</div>
                    <div className="text-slate-300 text-sm font-medium">Updates</div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-center"
          >
            <Card className="relative bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(185_100%_65%_/_0.1),transparent_70%)]" />
              <CardContent className="relative py-16 px-12">
                <motion.div
                  className="flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                >
                  Join the Research Revolution
                </motion.h2>
                <motion.p 
                  className="text-xl text-white mb-10 max-w-2xl mx-auto font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  Start exploring our comprehensive compound directory and build your research stack today.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => navigate("/")}
                    className="relative group bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-cyan-500/25 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Compounds
                      <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
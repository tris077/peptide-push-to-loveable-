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
             <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
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
              className="text-gray-700 hover:bg-gray-100 mb-6"
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
                className="text-6xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                About Peplike
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium"
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
            <Card className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5" />
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
                  className="text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto text-center font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  Peplike democratizes access to high-quality biotech compound information. Our comprehensive directory provides 
                  researchers with <span className="text-blue-600 font-semibold">verified data</span> on peptides, nootropics, and research chemicals, 
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
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50+</div>
                    <div className="text-gray-700 text-sm font-medium">Compounds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">99.9%</div>
                    <div className="text-gray-700 text-sm font-medium">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
                    <div className="text-gray-700 text-sm font-medium">Updates</div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mb-12"
          >
            <Card className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5" />
              <CardContent className="relative py-12 px-8">
                <div className="text-center mb-8">
                  <motion.div
                    className="flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                  >
                    Get in Touch
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-700 max-w-2xl mx-auto font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                  >
                    Have questions about our research platform? We're here to help.
                  </motion.p>
                </div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  <div className="text-center p-6 bg-gray-50/80 rounded-xl border border-gray-200/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Research Support</h3>
                    <p className="text-gray-600 text-sm">Get help with compound research and stack building</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gray-50/80 rounded-xl border border-gray-200/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Microscope className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Issues</h3>
                    <p className="text-gray-600 text-sm">Report bugs or request new features</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gray-50/80 rounded-xl border border-gray-200/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Partnership</h3>
                    <p className="text-gray-600 text-sm">Collaborate with us on research initiatives</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="text-center mt-8 pt-8 border-t border-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 }}
                >
                  <p className="text-gray-700 mb-4">Contact us at:</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button 
                      variant="outline" 
                      className="border-blue-500/30 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
                    >
                      support@peplike.com
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-indigo-500/30 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400"
                    >
                      research@peplike.com
                    </Button>
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
            <Card className="relative bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-200/50 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(220_100%_70%_/_0.1),transparent_70%)]" />
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
                  className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                >
                  Join the Research Revolution
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium"
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
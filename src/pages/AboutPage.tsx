import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Sparkles
} from "lucide-react";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <Navigation />
      
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(185_100%_65%_/_0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(260_60%_75%_/_0.2),transparent_50%)]" />
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
                className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-10 w-10 text-white" />
              </motion.div>
              
              <h1 className="text-5xl font-black text-white mb-4">About Peplike</h1>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto leading-relaxed">
                Advancing biotech research through comprehensive peptide and nootropic compound intelligence
              </p>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-xl">
              <CardContent className="pt-8 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Peplike democratizes access to high-quality biotech compound information. Our comprehensive directory provides 
                  researchers with verified data on peptides, nootropics, and research chemicals, bridging the gap between 
                  cutting-edge science and practical applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border-cyan-500/20 shadow-xl">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-white mb-4">Join the Research Revolution</h2>
                <p className="text-xl text-cyan-400 mb-8 max-w-2xl mx-auto">
                  Start exploring our comprehensive compound directory and build your research stack today.
                </p>
                <Button 
                  onClick={() => navigate("/")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-glow px-8 py-4 rounded-full font-bold text-lg"
                >
                  Explore Compounds
                  <Sparkles className="h-5 w-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
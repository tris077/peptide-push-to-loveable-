import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Moon, 
  Sun, 
  Utensils, 
  Dumbbell, 
  Sparkles, 
  Shield, 
  Target,
  Zap,
  Brain,
  Heart,
  Droplets,
  AlertTriangle
} from "lucide-react";
import Navigation from "@/components/Navigation";

export default function PrerequisitesPage() {
  const navigate = useNavigate();

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Enhanced Hero Header */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900/80 to-purple-900/70 text-white"
        {...fadeInVariants}
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(240_100%_70%_/_0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(280_60%_65%_/_0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(200_100%_70%_/_0.1),transparent_70%)]" />
          
          {/* Floating geometric shapes */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-24 h-24 border-2 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360, y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-16 h-16 border border-cyan-300/30 rounded-lg transform rotate-45"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
          />
        </div>

        <div className="relative container mx-auto px-4 py-16">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-white hover:bg-white/20 transition-all duration-300 rounded-full px-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Directory
            </Button>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div 
              className="relative w-24 h-24 mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Target className="h-12 w-12 text-white" />
              </motion.div>
              <motion.div
                className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Prerequisites
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Foundational steps to maximize peptide research outcomes — not medical advice.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-elevated rounded-xl">
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed text-lg">
                Peptides perform best when your baseline health and appearance factors are already optimized. Sleep, nutrition, recovery, and aesthetic upkeep all influence results. Neglecting these will limit progress.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Prerequisites Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sleep Basics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-elevated rounded-xl h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Moon className="h-5 w-5 text-white" />
                  </div>
                  Sleep Basics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                      Schedule
                    </Badge>
                    <span className="text-sm">Consistent timing (±30min)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                      Light
                    </Badge>
                    <span className="text-sm">Sunlight within 30 mins of waking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                      Evening
                    </Badge>
                    <span className="text-sm">Limit bright light 1–2 hrs pre-bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 border-cyan-200">
                      Temperature
                    </Badge>
                    <span className="text-sm">Room temp 65–67°F</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      Duration
                    </Badge>
                    <span className="text-sm">7–9 hrs nightly</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Diet Basics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-elevated rounded-xl h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Utensils className="h-5 w-5 text-white" />
                  </div>
                  Diet Basics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      Balance
                    </Badge>
                    <span className="text-sm">Protein, fats, fiber-rich carbs every meal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                      Timing
                    </Badge>
                    <span className="text-sm">Avoid carbs alone; don't skip meals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                      Post-Training
                    </Badge>
                    <span className="text-sm">Time higher carbs post-training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-200">
                      Anti-inflammatory
                    </Badge>
                    <span className="text-sm">Berries, leafy greens, fish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                      Micronutrients
                    </Badge>
                    <span className="text-sm">Mg, Zn, B-complex, D3+K2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Training & Recovery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-elevated rounded-xl h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Dumbbell className="h-5 w-5 text-white" />
                  </div>
                  Training & Recovery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                      Resistance
                    </Badge>
                    <span className="text-sm">2–5×/week for lean mass</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-200">
                      Cardio
                    </Badge>
                    <span className="text-sm">3–5×/week (≥15 min) for circulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                      Recovery
                    </Badge>
                    <span className="text-sm">Rest days for muscle repair and CNS recovery</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skin & Hair Health */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-elevated rounded-xl h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  Skin & Hair Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                      Protection
                    </Badge>
                    <span className="text-sm">Daily SPF for UV protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800 border-pink-200">
                      Exfoliation
                    </Badge>
                    <span className="text-sm">Gentle exfoliation 1–2×/week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                      Hydration
                    </Badge>
                    <span className="text-sm">Adequate water & collagen support (C, protein)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      Hair Care
                    </Badge>
                    <span className="text-sm">Mild cleansers, avoid harsh shampoos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                      Acne Control
                    </Badge>
                    <span className="text-sm">Diet, hygiene, and stress management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Enhancement Pathways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-elevated rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                Basic Enhancement Pathways (Brief)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <Brain className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-semibold text-sm">BDNF</div>
                    <div className="text-xs text-muted-foreground">Learning speed, memory, mood regulation</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <div>
                    <div className="font-semibold text-sm">Neurotransmitter Modulation</div>
                    <div className="text-xs text-muted-foreground">Focus, motivation, relaxation balance</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <Target className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-semibold text-sm">Cholinergics</div>
                    <div className="text-xs text-muted-foreground">Attention and memory consolidation</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <div>
                    <div className="font-semibold text-sm">Antioxidants</div>
                    <div className="text-xs text-muted-foreground">Cell protection, clarity, slow aging</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <Brain className="h-5 w-5 text-cyan-500" />
                  <div>
                    <div className="font-semibold text-sm">Neurogenesis</div>
                    <div className="text-xs text-muted-foreground">Boost adaptability, resilience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <Heart className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="font-semibold text-sm">Growth Factors</div>
                    <div className="text-xs text-muted-foreground">Tissue repair, skin, hair growth</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Safety & Legal Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <Card className="bg-gradient-card backdrop-blur-lg border-red-200/50 shadow-elevated rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-red-600 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                Safety & Legal Reminder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                All compounds listed on Peplike are for research purposes unless approved in your jurisdiction. 
                Human use may be restricted or illegal. Always verify legality and consult a licensed professional 
                before any intervention.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
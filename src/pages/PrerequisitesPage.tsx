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
import { Navigation } from "@/components/Navigation";

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
      
      {/* Hero Header */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-accent/80 to-primary/70 text-primary-foreground"
        {...fadeInVariants}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 border-2 border-current rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-24 h-24 border border-current rounded-full"
          />
        </div>

        <div className="relative container mx-auto px-4 py-12">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Directory
            </Button>
          </motion.div>

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent">
              Prerequisites
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Foundational steps to maximize peptide research outcomes — not medical advice.
            </p>
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
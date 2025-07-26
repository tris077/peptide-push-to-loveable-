import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { peptidesData } from "@/data/peptides";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductViewer360 } from "./ProductViewer360";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Clock, 
  Syringe, 
  Shield, 
  Pill, 
  Calendar,
  Target,
  AlertTriangle,
  Bookmark,
  Share2,
  ChevronRight,
  Zap,
  Brain,
  Heart
} from "lucide-react";

export const CompoundDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const peptide = peptidesData.find(p => p.id === id);

  if (!peptide) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 text-center shadow-elevated border border-border/20"
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Compound Not Found</h2>
          <p className="text-muted-foreground mb-6">The requested compound could not be found.</p>
          <Button onClick={() => navigate("/")} className="bg-gradient-accent text-white hover:shadow-glow transition-all duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Header with Molecular Background */}
      <motion.div 
        style={{ opacity }}
        className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-accent/80 to-primary/70 text-primary-foreground"
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

        <div className="relative container mx-auto px-6 py-12">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-7"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Directory
            </Button>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Category Tags */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-5"
          >
            {peptide.category.map((cat, index) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-accent text-white border-white/20 shadow-glow animate-pulse-glow px-4 py-2 text-sm font-medium"
                >
                  {cat === "Nootropic" && <Brain className="h-3 w-3 mr-1" />}
                  {cat === "Neuroprotective" && <Shield className="h-3 w-3 mr-1" />}
                  {cat === "Cognitive Enhancement" && <Zap className="h-3 w-3 mr-1" />}
                  {cat}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-7"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent">
              {peptide.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              {peptide.shortDescription}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column - Overview & Images (8 columns) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                    <Brain className="h-5 w-5 text-accent" />
                    Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground leading-relaxed text-base">{peptide.fullDescription}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Images and Safety Row */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Product Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold text-primary text-center">
                      Product Preview
                    </CardTitle>
                  </CardHeader>
                   <CardContent className="p-2">
                     <div className="aspect-square bg-gradient-to-br from-background to-muted rounded-lg border border-border/10 shadow-inner flex items-center justify-center overflow-hidden">
                       <motion.img 
                         src={
                           peptide.id === 'semaglutide' ? '/src/assets/semaglutide-bottle.png' :
                           peptide.name.toLowerCase() === 'semax' ? '/lovable-uploads/fb6b73f7-aa3e-4943-91d4-50ad0e32186b.png' : 
                           '/placeholder-molecule.svg'
                         }
                         alt={`${peptide.name} product`}
                         className={`object-contain drop-shadow-lg ${
                           peptide.id === 'semaglutide' ? 'w-full h-full scale-95' : 'w-full h-full scale-90'
                         }`}
                         whileHover={{ scale: 1.02 }}
                         transition={{ duration: 0.2 }}
                       />
                     </div>
                   </CardContent>
                </Card>
              </motion.div>

              {/* Molecular Structure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-background rounded-lg border border-border/20 overflow-hidden flex items-center justify-center">
                      <motion.img 
                        src={peptide.structure2D || '/placeholder-molecule.svg'}
                        alt={`${peptide.name} molecular structure`}
                        className="w-4/5 h-4/5 object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Safety Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Card className="bg-gradient-card backdrop-blur-lg border-orange-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold text-orange-600 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Safety Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2 text-xs">
                    <div>
                      <h4 className="font-medium text-foreground mb-1 text-xs">Warnings</h4>
                      <div className="space-y-1">
                        {peptide.warnings.slice(0, 2).map((warning, index) => (
                          <div key={index} className="flex items-start gap-1 p-1 bg-orange-50/50 rounded-sm border border-orange-200/50">
                            <AlertTriangle className="h-2.5 w-2.5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-orange-800 leading-tight">{warning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1 text-xs">Side Effects</h4>
                      <div className="space-y-1">
                        {peptide.sideEffects.slice(0, 2).map((effect, index) => (
                          <div key={index} className="flex items-start gap-1 p-1 bg-red-50/50 rounded-sm border border-red-200/50">
                            <AlertTriangle className="h-2.5 w-2.5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-red-800 leading-tight">{effect}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Information Cards (4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Quick Specs Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-accent/20 shadow-elevated sticky top-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                    <Target className="h-5 w-5 text-accent" />
                    Quick Specs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-2">
                    {peptide.molecularFormula && (
                      <div className="flex justify-between items-center p-2 bg-accent/10 rounded-lg border border-accent/20">
                        <span className="text-sm font-medium text-muted-foreground">Formula</span>
                        <span className="font-mono text-accent font-bold text-sm">{peptide.molecularFormula}</span>
                      </div>
                    )}
                    {peptide.molecularWeight && (
                      <div className="flex justify-between items-center p-2 bg-accent/10 rounded-lg border border-accent/20">
                        <span className="text-sm font-medium text-muted-foreground">MW</span>
                        <span className="font-mono font-bold text-sm">{peptide.molecularWeight}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center p-2 bg-accent/10 rounded-lg border border-accent/20">
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Syringe className="h-3 w-3" />
                        Route
                      </span>
                      <span className="font-bold text-sm">{peptide.administration[0]}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-accent/10 rounded-lg border border-accent/20">
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        Legal Status
                      </span>
                      <span className="font-bold text-sm">{peptide.legalStatus}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-accent/10 rounded-lg border border-accent/20">
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Year Discovered
                      </span>
                      <span className="font-bold text-sm">{peptide.yearDiscovered}</span>
                    </div>
                  </div>

                  <Separator className="my-3" />

                  <Button className="w-full bg-gradient-accent text-white hover:shadow-glow transition-all duration-300 font-semibold">
                    Add to Research Stack
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits & Applications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                    <Heart className="h-4 w-4 text-accent" />
                    Benefits & Applications
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Primary Use Cases
                    </h4>
                    <div className="space-y-1">
                      {peptide.useCases.slice(0, 3).map((useCase, index) => (
                        <div key={index} className="flex items-center gap-2 p-1.5 bg-accent/5 rounded-md">
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          <span className="text-xs text-foreground">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Key Benefits
                    </h4>
                    <div className="space-y-1">
                      {peptide.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 p-1.5 bg-green-500/5 rounded-md">
                          <div className="w-1 h-1 bg-green-500 rounded-full" />
                          <span className="text-xs text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mechanism of Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                    <Target className="h-4 w-4 text-accent" />
                    Mechanism of Action
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground leading-relaxed text-sm">{peptide.mechanismOfAction}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        
        {/* Buy Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-6"
        >
          {/* Buy Links (External — Not Affiliated) */}
          <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-accent" />
                Buy Links (External — Not Affiliated)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              {/* Multi-Link Buy Panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Swiss Chems */}
                <motion.a
                  href="https://swisschems.is"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="group flex items-center justify-between p-3 bg-accent/5 rounded-xl border border-accent/20 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-300/30 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Swiss Chems</h5>
                      <span className="text-xs font-medium text-muted-foreground/80 uppercase tracking-wider">Trusted ✅</span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-accent group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>

                {/* Straight Labs */}
                <motion.a
                  href="https://straightlabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.25 }}
                  className="group flex items-center justify-between p-3 bg-accent/5 rounded-xl border border-accent/20 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-300/30 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Straight Labs</h5>
                      <span className="text-xs font-medium text-muted-foreground/80 uppercase tracking-wider">Trusted ✅</span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-accent group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>

                {/* Chemyo */}
                <motion.a
                  href="https://chemyo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="group flex items-center justify-between p-3 bg-accent/5 rounded-xl border border-accent/20 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-300/30 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Chemyo</h5>
                      <span className="text-xs font-medium text-muted-foreground/80 uppercase tracking-wider">Best Price 💰</span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-accent group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>

                {/* Peptide Sciences */}
                <motion.a
                  href="https://peptidesciences.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35 }}
                  className="group flex items-center justify-between p-3 bg-accent/5 rounded-xl border border-accent/20 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-300/30 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Peptide Sciences</h5>
                      <span className="text-xs font-medium text-muted-foreground/80 uppercase tracking-wider">Trusted ✅</span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-accent group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>
              </div>
              
              {/* Legal Footnote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="pt-2"
              >
                <p className="text-xs text-muted-foreground/70 text-center leading-relaxed">
                  External sources. For research purposes only. Always verify legality in your region.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
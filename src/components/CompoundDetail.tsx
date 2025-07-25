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
        className="relative overflow-hidden bg-gradient-primary text-primary-foreground"
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

        <div className="relative container mx-auto px-6 py-16">
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
            className="flex flex-wrap gap-3 mb-6"
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
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent">
              {peptide.name}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              {peptide.shortDescription}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Overview Section - Moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2 justify-center">
                <Brain className="h-5 w-5 text-accent" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <p className="text-foreground leading-relaxed text-base max-w-4xl mx-auto">{peptide.fullDescription}</p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid xl:grid-cols-12 gap-6">
          {/* Left Side - Visual Content (7 columns) */}
          <div className="xl:col-span-7 space-y-4">
            {/* Product Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-primary text-center">
                    Product Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="aspect-[4/3] bg-gradient-to-br from-background to-muted rounded-lg border border-border/10 shadow-inner flex items-center justify-center overflow-hidden">
                    <motion.img 
                      src={peptide.name.toLowerCase() === 'semax' ? '/lovable-uploads/fb6b73f7-aa3e-4943-91d4-50ad0e32186b.png' : '/placeholder-molecule.svg'}
                      alt={`${peptide.name} product`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 2D Molecular Structure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-primary text-center">
                    2D Molecular Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="aspect-[4/3] bg-background rounded-lg border border-border/20 overflow-hidden flex items-center justify-center">
                    <motion.img 
                      src={peptide.structure2D || '/placeholder-molecule.svg'}
                      alt={`${peptide.name} molecular structure`}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Sidebar - Key Information (5 columns) */}
          <div className="xl:col-span-5 space-y-4">
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
                        <Clock className="h-3 w-3" />
                        Half-life
                      </span>
                      <span className="font-bold text-sm">{peptide.halfLife}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-accent/10 rounded-lg border border-accent/20">
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Syringe className="h-3 w-3" />
                        Route
                      </span>
                      <span className="font-bold text-sm">{peptide.administration[0]}</span>
                    </div>
                  </div>

                  <Separator className="my-3" />

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-accent text-white hover:shadow-glow transition-all duration-300 font-semibold">
                    Add to Research Stack
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mechanism of Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
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

        {/* Use Cases & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6"
        >
          <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                <Heart className="h-4 w-4 text-accent" />
                Benefits & Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Primary Use Cases
                  </h4>
                  <div className="space-y-1">
                    {peptide.useCases.map((useCase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 + index * 0.05 }}
                        className="flex items-center gap-2 p-1.5 bg-accent/5 rounded-md hover:bg-accent/10 transition-colors duration-200"
                      >
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        <span className="text-xs text-foreground">{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Key Benefits
                  </h4>
                  <div className="space-y-1">
                    {peptide.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + index * 0.05 }}
                        className="flex items-center gap-2 p-1.5 bg-green-500/5 rounded-md hover:bg-green-500/10 transition-colors duration-200"
                      >
                        <div className="w-1 h-1 bg-green-500 rounded-full" />
                        <span className="text-xs text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Safety & Research Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid lg:grid-cols-2 gap-4 mt-6"
        >
          {/* Safety Information */}
          <Card className="bg-gradient-card backdrop-blur-lg border-orange-200/50 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-orange-600 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Safety Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div>
                <h4 className="font-medium text-foreground mb-2 text-sm">Important Warnings</h4>
                <div className="space-y-1">
                  {peptide.warnings.map((warning, index) => (
                    <div key={index} className="flex items-start gap-2 p-1.5 bg-orange-50/50 rounded-md border border-orange-200/50">
                      <AlertTriangle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-orange-800">{warning}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2 text-sm">Side Effects</h4>
                <div className="space-y-1">
                  {peptide.sideEffects.map((effect, index) => (
                    <div key={index} className="flex items-start gap-2 p-1.5 bg-red-50/50 rounded-md border border-red-200/50">
                      <AlertTriangle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-red-800">{effect}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Sources */}
          <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-accent" />
                Research Sources
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="space-y-2">
                {peptide.sources.map((source, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="group p-2 bg-accent/5 rounded-lg border border-accent/20 hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-foreground text-sm">{source.name}</h5>
                        <p className="text-xs text-muted-foreground">{source.disclaimer}</p>
                      </div>
                      <ExternalLink className="h-3 w-3 text-accent group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Separator className="my-3" />
              
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Legal Status:</strong> {peptide.legalStatus}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  <strong>Year Discovered:</strong> {peptide.yearDiscovered}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
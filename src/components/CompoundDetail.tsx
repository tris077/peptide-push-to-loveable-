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
      <div className="container mx-auto px-6 py-16">
        <div className="grid xl:grid-cols-12 gap-8">
          {/* Left Side - Interactive Viewer (8 columns) */}
          <div className="xl:col-span-8 space-y-8">
            {/* Premium 3D-Style Viewer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-accent/20 shadow-elevated hover:shadow-glow transition-all duration-500 overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="p-2 bg-gradient-accent rounded-full"
                    >
                      <span className="text-white text-lg">🧬</span>
                    </motion.div>
                    360° Interactive Viewer
                    <Badge variant="secondary" className="ml-auto bg-accent/20 text-accent border-accent/30">
                      Premium
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="relative">
                    {/* Enhanced Product Viewer */}
                    <div className="aspect-square bg-gradient-subtle rounded-2xl p-8 border border-accent/10 shadow-inner">
                      <ProductViewer360
                        productName={peptide.name}
                        images={peptide.name.toLowerCase() === 'semax' ? ['/lovable-uploads/fb6b73f7-aa3e-4943-91d4-50ad0e32186b.png'] : ['/placeholder-molecule.svg']}
                        size="large"
                        autoRotate={true}
                        className="mx-auto drop-shadow-2xl"
                      />
                    </div>

                    {/* Floating Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button size="sm" className="bg-white/90 text-primary shadow-lg hover:shadow-xl transition-all duration-300">
                        <Zap className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 2D Molecular Structure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-accent/20 shadow-elevated group hover:shadow-glow transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary flex items-center gap-3">
                    <div className="p-2 bg-gradient-accent rounded-full">
                      <span className="text-white">⚗️</span>
                    </div>
                    2D Molecular Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative group">
                    <div className="aspect-video bg-white/95 backdrop-blur-sm rounded-xl border border-accent/20 overflow-hidden shadow-inner">
                      <motion.img 
                        src="/placeholder-molecule.svg" 
                        alt={`${peptide.name} molecular structure`}
                        className="w-full h-full object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Animated Skeleton Loader */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-subtle/50">
                        <motion.div
                          className="flex items-center gap-3 text-muted-foreground"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                          <span className="font-medium">Loading molecular structure...</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Sidebar - Key Information (4 columns) */}
          <div className="xl:col-span-4 space-y-6">
            {/* Quick Specs Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-accent/20 shadow-elevated sticky top-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                    <Target className="h-5 w-5 text-accent" />
                    Quick Specs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    {peptide.molecularFormula && (
                      <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                        <span className="text-sm font-medium text-muted-foreground">Formula</span>
                        <span className="font-mono text-accent font-bold text-sm">{peptide.molecularFormula}</span>
                      </div>
                    )}
                    {peptide.molecularWeight && (
                      <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                        <span className="text-sm font-medium text-muted-foreground">MW</span>
                        <span className="font-mono font-bold text-sm">{peptide.molecularWeight}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Half-life
                      </span>
                      <span className="font-bold text-sm">{peptide.halfLife}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Syringe className="h-3 w-3" />
                        Route
                      </span>
                      <span className="font-bold text-sm">{peptide.administration[0]}</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-accent text-white hover:shadow-glow transition-all duration-300 font-semibold">
                    Add to Research Stack
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Detailed Information Sections */}
        <div className="mt-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Overview */}
            <Card className="bg-gradient-card backdrop-blur-lg border-accent/20 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{peptide.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Mechanism of Action */}
            <Card className="bg-gradient-card backdrop-blur-lg border-accent/20 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Mechanism of Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{peptide.mechanismOfAction}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Use Cases & Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Card className="bg-gradient-card backdrop-blur-lg border-accent/20 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                  <Heart className="h-5 w-5 text-accent" />
                  Benefits & Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Primary Use Cases
                  </h4>
                  <div className="space-y-2">
                    {peptide.useCases.map((useCase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3 + index * 0.1 }}
                        className="flex items-center gap-2 p-3 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-sm text-foreground">{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {peptide.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        className="flex items-center gap-2 p-3 bg-green-500/5 rounded-lg hover:bg-green-500/10 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Safety & Research Sources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Safety Information */}
            <Card className="bg-gradient-card backdrop-blur-lg border-orange-200/50 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-orange-600 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Safety Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Important Warnings</h4>
                  <div className="space-y-2">
                    {peptide.warnings.map((warning, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-orange-50/50 rounded-lg border border-orange-200/50">
                        <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-orange-800">{warning}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Potential Side Effects</h4>
                  <div className="space-y-2">
                    {peptide.sideEffects.map((effect, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-red-50/50 rounded-lg border border-red-200/50">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-red-800">{effect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Sources */}
            <Card className="bg-gradient-card backdrop-blur-lg border-accent/20 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Research Sources
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4" />
                  For research purposes only
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {peptide.sources.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-accent/5 rounded-lg border border-accent/20 hover:bg-accent/10 transition-all duration-200"
                  >
                    <div>
                      <p className="font-medium text-foreground">{link.name}</p>
                      <p className="text-xs text-muted-foreground">{link.disclaimer}</p>
                    </div>
                    <Button variant="outline" size="sm" className="bg-white hover:bg-accent hover:text-white transition-all duration-200">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit
                    </Button>
                  </motion.div>
                ))}
                
                <Separator className="my-4" />
                
                <div className="text-center text-sm text-muted-foreground space-y-1 p-4 bg-muted/20 rounded-lg">
                  <p className="flex items-center justify-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    External, unaffiliated sources
                  </p>
                  <p>Always verify quality and legality</p>
                  <p>Consult healthcare professionals before use</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
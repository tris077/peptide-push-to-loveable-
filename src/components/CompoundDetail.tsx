import { useParams, useNavigate } from "react-router-dom";
import { peptidesData } from "@/data/peptides";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  ExternalLink, 
  Clock, 
  Syringe, 
  Shield, 
  Pill, 
  Calendar,
  Target,
  AlertTriangle 
} from "lucide-react";

export const CompoundDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const peptide = peptidesData.find(p => p.id === id);

  if (!peptide) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Compound Not Found</h2>
          <p className="text-muted-foreground mb-4">The requested compound could not be found.</p>
          <Button onClick={() => navigate("/")} variant="hero">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Directory
          </Button>
          
          <div className="flex flex-wrap gap-4 items-center">
            {peptide.category.map((cat) => (
              <Badge key={cat} variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                {cat}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mt-4">{peptide.name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Visual Elements */}
          <div className="space-y-6">
            {/* 2D Molecular Structure - Primary Display */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <span className="text-2xl">🧬</span>
                  2D Molecular Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="group relative">
                  <div className="aspect-video bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center border border-accent/20 shadow-biotech overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mb-4 border border-accent/30">
                        <span className="text-2xl font-mono font-bold text-accent">{peptide.name}</span>
                      </div>
                      <p className="font-medium text-lg text-foreground">High-Resolution Structure</p>
                      <p className="text-sm text-muted-foreground mt-1">Molecular diagram placeholder</p>
                    </div>
                    {/* Hover Zoom Effect */}
                    <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
                  </div>
                  {/* Hover Expand Button */}
                  <button className="absolute top-4 right-4 bg-accent/20 hover:bg-accent/30 text-accent p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* 3D Model Placeholder */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  3D Interactive Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gradient-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/20">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                      <span className="text-4xl font-bold text-primary">
                        {peptide.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-muted-foreground">Interactive 3D model</p>
                    <p className="text-sm text-muted-foreground">Coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Molecular Structure */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-primary">Molecular Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">⚗️</div>
                    <p>Molecular diagram</p>
                    <p className="text-sm">Available soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Information Panel */}
          <div className="space-y-6">
            {/* Description */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-primary">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{peptide.description}</p>
              </CardContent>
            </Card>

            {/* Key Information */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-primary">Key Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <span className="font-medium">Half-life:</span>
                      <span className="ml-2 text-muted-foreground">{peptide.halfLife}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Syringe className="h-5 w-5 text-accent" />
                    <div>
                      <span className="font-medium">Administration:</span>
                      <span className="ml-2 text-muted-foreground">{peptide.administration.join(", ")}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-accent" />
                    <div>
                      <span className="font-medium">Legal Status:</span>
                      <span className="ml-2 text-muted-foreground">{peptide.legalStatus}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Pill className="h-5 w-5 text-accent" />
                    <div>
                      <span className="font-medium">Dosage Range:</span>
                      <span className="ml-2 text-muted-foreground">{peptide.dosageRange}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <span className="font-medium">Year Discovered:</span>
                      <span className="ml-2 text-muted-foreground">{peptide.yearDiscovered}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mechanism of Action */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Mechanism of Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{peptide.mechanismOfAction}</p>
              </CardContent>
            </Card>

            {/* Purchase Links */}
            <Card className="shadow-elegant border-accent/20">
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
                {peptide.buyLinks.map((link, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{link.name}</p>
                      <p className="text-xs text-muted-foreground">{link.disclaimer}</p>
                    </div>
                    <Button variant="research" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Site
                    </Button>
                  </div>
                ))}
                
                <Separator />
                
                <div className="text-center text-sm text-muted-foreground space-y-1">
                  <p>⚠️ These are external, unaffiliated sources</p>
                  <p>Always verify quality and legality in your jurisdiction</p>
                  <p>Consult healthcare professionals before use</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Microscope, 
  Users, 
  Shield, 
  Target,
  Award,
  Heart,
  Sparkles,
  FlaskConical,
  Brain,
  Zap,
  Globe
} from "lucide-react";

export default function AboutPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Microscope,
      title: "Research-Grade Quality",
      description: "Every compound in our directory meets the highest standards for research applications.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety data, side effects, and contraindications for informed research.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "Scientific Accuracy",
      description: "All information is verified by our team of biochemists and researchers.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connecting researchers worldwide with cutting-edge peptide and nootropic compounds.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Scientific Officer",
      bio: "Leading biochemist with 15+ years in peptide research and drug development.",
      icon: FlaskConical
    },
    {
      name: "Dr. Marcus Rodriguez",
      role: "Research Director",
      bio: "Pioneering researcher in nootropics and cognitive enhancement compounds.",
      icon: Brain
    },
    {
      name: "Dr. Elena Vasquez",
      role: "Safety & Compliance",
      bio: "Expert in pharmaceutical safety protocols and regulatory compliance.",
      icon: Shield
    }
  ];

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

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-xl">
              <CardHeader className="text-center pb-6">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 15 }}
                >
                  <Target className="h-8 w-8 text-white" />
                </motion.div>
                <CardTitle className="text-3xl font-bold text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Peplike was founded with a singular vision: to democratize access to high-quality biotech compound information. 
                  We believe that groundbreaking research happens when scientists have access to comprehensive, accurate, and 
                  up-to-date information about peptides, nootropics, and research chemicals. Our platform bridges the gap between 
                  cutting-edge science and practical research applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                        whileHover={{ rotate: 15 }}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-primary">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Research Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <CardHeader>
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1 }}
                      >
                        <member.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-primary">{member.name}</CardTitle>
                      <p className="text-accent font-semibold">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-xl">
              <CardHeader className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 15 }}
                >
                  <Heart className="h-8 w-8 text-white" />
                </motion.div>
                <CardTitle className="text-3xl font-bold text-primary">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Innovation</h3>
                    <p className="text-muted-foreground">Pushing the boundaries of biotech research with cutting-edge technology.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Excellence</h3>
                    <p className="text-muted-foreground">Maintaining the highest standards in data accuracy and platform reliability.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Community</h3>
                    <p className="text-muted-foreground">Building a global network of researchers and scientific innovators.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
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
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  HelpCircle,
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "research@peplike.com",
      description: "For general inquiries and support",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9:00 AM - 6:00 PM EST",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Biotech Boulevard, Research City, RC 12345",
      description: "Our research headquarters",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      description: "We respond to all inquiries within 24 hours",
      color: "from-orange-500 to-red-500"
    }
  ];

  const inquiryTypes = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our platform or services"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Collaboration and business partnership opportunities"
    },
    {
      icon: HelpCircle,
      title: "Technical Support",
      description: "Help with using our platform or reporting issues"
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
                <Mail className="h-10 w-10 text-white" />
              </motion.div>
              
              <h1 className="text-5xl font-black text-white mb-4">Contact Us</h1>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto leading-relaxed">
                Have questions about our platform? Need technical support? We're here to help.
              </p>
            </div>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-cyan-400" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Inquiry Type *
                      </label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/95 border-white/20 text-white">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="research">Research Collaboration</SelectItem>
                          <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Subject *
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief description of your inquiry"
                        required
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please provide details about your inquiry..."
                        required
                        rows={6}
                        className="bg-white/10 border-white/20 text-white resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-glow py-6 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                            whileHover={{ rotate: 15 }}
                          >
                            <info.icon className="h-6 w-6 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary mb-1">{info.title}</h3>
                            <p className="text-foreground font-semibold mb-1">{info.content}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Inquiry Types */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Card className="bg-gradient-card backdrop-blur-lg border-border/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">How Can We Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {inquiryTypes.map((type) => (
                      <div key={type.title} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <type.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{type.title}</h4>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Response Time Promise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg border-green-500/20 shadow-xl">
              <CardContent className="py-8">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">Quick Response Guarantee</h2>
                <p className="text-emerald-400 text-lg mb-4">
                  We respond to all inquiries within 24 hours during business days.
                </p>
                <p className="text-white/80">
                  For urgent technical issues, please include "URGENT" in your subject line.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
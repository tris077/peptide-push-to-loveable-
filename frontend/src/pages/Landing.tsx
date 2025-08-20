import { Link } from "react-router-dom";
import { MessageSquare, BookOpen, Layers, Zap, GraduationCap, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";

const Landing = () => {
  const { user, signOut } = useAuth();
  
  const quickCards = [
    {
      title: "Chatbot Research Assistant",
      description: "AI-powered peptide research and stack recommendations",
      icon: MessageSquare,
      link: "/chatbot",
      gradient: "from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-purple))]"
    },
    {
      title: "Peptide Library",
      description: "Comprehensive database of research peptides",
      icon: BookOpen,
      link: "/library",
      gradient: "from-[hsl(var(--peplike-purple))] to-[hsl(var(--peplike-pink))]"
    },
    {
      title: "Stack Generator",
      description: "Create optimized peptide combinations for your goals",
      icon: Layers,
      link: "/stacks",
      gradient: "from-[hsl(var(--peplike-pink))] to-[hsl(var(--peplike-blue))]"
    }
  ];

  const features = [
    {
      title: "AI Research",
      description: "Advanced AI analyzes peptide interactions and provides personalized recommendations",
      icon: Zap,
    },
    {
      title: "Fundamentals",
      description: "Learn the science behind peptides with comprehensive educational resources",
      icon: GraduationCap,
    },
    {
      title: "Synergy Analysis",
      description: "Understand how peptides work together for optimal results",
      icon: Search,
    },
    {
      title: "Easy Navigation",
      description: "Intuitive interface designed for researchers and enthusiasts alike",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Logo */}
          <div className="mb-8 animate-slide-up">
            <img 
              src="/lovable-uploads/6ca13bba-366e-4ba7-9afd-19a7fae4bfc2.png" 
              alt="Peplike AI"
              className="h-48 w-auto mx-auto mb-6 bg-transparent"
            />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              AI-Powered Peptide Research
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 animate-fade-in">
            Explore, analyze, and generate peptide stacks with cutting-edge AI tools.
          </p>

          {/* CTA Button */}
          <Link to={user ? "/chatbot" : "/chatbot"}>
            <Button className="gradient-button text-lg px-12 py-6 animate-slide-up">
              {user ? "Continue Researching" : "Start Researching"}
            </Button>
          </Link>
          
          {/* User Status */}
          {user && (
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-3">Welcome back, {user.email}</p>
              <Button 
                onClick={signOut}
                variant="outline" 
                className="text-sm px-6 py-2"
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>

        {/* Modern molecular background animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Subtle gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.02)] via-transparent to-[hsl(var(--peplike-purple)/0.03)]"></div>
          
          {/* Animated molecular connections */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--peplike-blue))" stopOpacity="0.1" />
                <stop offset="50%" stopColor="hsl(var(--peplike-purple))" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(var(--peplike-pink))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Connecting lines - animated */}
            <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDuration: "4s"}} />
            <line x1="75%" y1="15%" x2="85%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDuration: "5s", animationDelay: "1s"}} />
            <line x1="15%" y1="70%" x2="30%" y2="85%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDuration: "6s", animationDelay: "2s"}} />
            <line x1="70%" y1="65%" x2="85%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDuration: "4.5s", animationDelay: "0.5s"}} />
            <line x1="40%" y1="10%" x2="60%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDuration: "5.5s", animationDelay: "1.5s"}} />
            <line x1="25%" y1="50%" x2="45%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDuration: "4.8s", animationDelay: "0.8s"}} />
          </svg>
          
          {/* Floating molecular nodes */}
          <div className="absolute top-1/5 left-1/6 w-2 h-2 bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.6)] to-[hsl(var(--peplike-purple)/0.4)] rounded-full animate-pulse" style={{animationDuration: "3s"}}></div>
          <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-gradient-to-br from-[hsl(var(--peplike-purple)/0.5)] to-[hsl(var(--peplike-pink)/0.3)] rounded-full animate-pulse" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 bg-gradient-to-br from-[hsl(var(--peplike-pink)/0.4)] to-[hsl(var(--peplike-blue)/0.2)] rounded-full animate-pulse" style={{animationDuration: "5s", animationDelay: "2s"}}></div>
          <div className="absolute top-3/4 right-1/5 w-1 h-1 bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.7)] to-[hsl(var(--peplike-purple)/0.5)] rounded-full animate-pulse" style={{animationDuration: "3.5s", animationDelay: "0.5s"}}></div>
          <div className="absolute top-2/5 left-3/4 w-1.5 h-1.5 bg-gradient-to-br from-[hsl(var(--peplike-purple)/0.6)] to-[hsl(var(--peplike-pink)/0.4)] rounded-full animate-pulse" style={{animationDuration: "4.2s", animationDelay: "1.2s"}}></div>
          <div className="absolute bottom-1/4 right-2/3 w-2 h-2 bg-gradient-to-br from-[hsl(var(--peplike-pink)/0.5)] to-[hsl(var(--peplike-blue)/0.3)] rounded-full animate-pulse" style={{animationDuration: "4.8s", animationDelay: "0.3s"}}></div>
          
          {/* Subtle floating particles */}
          <div className="absolute top-1/3 left-1/2 w-0.5 h-0.5 bg-[hsl(var(--peplike-blue)/0.3)] rounded-full animate-bounce" style={{animationDuration: "6s", animationDelay: "1s"}}></div>
          <div className="absolute top-3/5 right-1/3 w-0.5 h-0.5 bg-[hsl(var(--peplike-purple)/0.4)] rounded-full animate-bounce" style={{animationDuration: "7s", animationDelay: "2s"}}></div>
          <div className="absolute bottom-2/5 left-2/5 w-0.5 h-0.5 bg-[hsl(var(--peplike-pink)/0.3)] rounded-full animate-bounce" style={{animationDuration: "5s", animationDelay: "0.5s"}}></div>
          
          {/* Ultra-subtle molecular grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--peplike-blue)) 1px, transparent 0)", backgroundSize: "60px 60px"}}></div>
        </div>
      </section>

      {/* Quick Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Get Started
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {quickCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Link key={index} to={card.link}>
                  <div className="peptide-card text-center group cursor-pointer">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 gradient-text">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="peptide-card text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.1)] to-[hsl(var(--peplike-purple)/0.1)] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[hsl(var(--peplike-purple))]" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8">
            <Link to="/chatbot" className="text-gray-600 hover:gradient-text transition-all duration-200">Chatbot</Link>
            <Link to="/library" className="text-gray-600 hover:gradient-text transition-all duration-200">Library</Link>
            <Link to="/fundamentals" className="text-gray-600 hover:gradient-text transition-all duration-200">Fundamentals</Link>
            <Link to="/about" className="text-gray-600 hover:gradient-text transition-all duration-200">About</Link>
            <span className="text-gray-600">Contact</span>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">© 2024 Peplike AI. Advancing peptide research through artificial intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
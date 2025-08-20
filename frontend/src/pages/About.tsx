import { Sparkles, Target, Zap, Users } from "lucide-react";
import Navigation from "../components/Navigation";

const About = () => {
  const timeline = [
    {
      phase: "Idea",
      title: "Vision Inception",
      description: "Recognizing the need for accessible, AI-powered peptide research tools",
      icon: Target,
    },
    {
      phase: "Development", 
      title: "Platform Creation",
      description: "Building sophisticated AI models and user-friendly research interfaces",
      icon: Zap,
    },
    {
      phase: "Launch",
      title: "AI-Powered Research Platform",
      description: "Delivering comprehensive peptide research capabilities to the scientific community",
      icon: Sparkles,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold gradient-text mb-8">About Peplike AI</h1>
          
          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Peplike AI bridges biotechnology and artificial intelligence, making peptide research accessible, visual, and insightful.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform combines cutting-edge AI with comprehensive peptide databases to provide researchers, 
              scientists, and enthusiasts with powerful tools for understanding peptide interactions, mechanisms, and applications.
            </p>
          </div>
        </div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="peptide-card">
            <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-purple))] flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text">AI-Powered Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced machine learning algorithms analyze peptide structures, interactions, and synergies to provide 
              personalized research recommendations and insights.
            </p>
          </div>

          <div className="peptide-card">
            <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[hsl(var(--peplike-purple))] to-[hsl(var(--peplike-pink))] flex items-center justify-center text-white">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text">Research Community</h3>
            <p className="text-gray-600 leading-relaxed">
              Built for researchers, scientists, and peptide enthusiasts who need reliable, comprehensive tools 
              for exploring peptide applications and mechanisms.
            </p>
          </div>

          <div className="peptide-card">
            <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[hsl(var(--peplike-pink))] to-[hsl(var(--peplike-blue))] flex items-center justify-center text-white">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text">Scientific Accuracy</h3>
            <p className="text-gray-600 leading-relaxed">
              All information is grounded in peer-reviewed research and scientific literature, ensuring 
              accurate and reliable peptide data for serious research applications.
            </p>
          </div>

          <div className="peptide-card">
            <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-pink))] flex items-center justify-center text-white">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text">User Experience</h3>
            <p className="text-gray-600 leading-relaxed">
              Intuitive interface design makes complex peptide research accessible through visual cards, 
              interactive chat, and streamlined navigation systems.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold gradient-text text-center mb-12">Our Journey</h2>
          
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-purple))] flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-[hsl(var(--peplike-purple)/0.3)] to-transparent mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.05)] to-[hsl(var(--peplike-purple)/0.05)] rounded-2xl p-6 border border-[hsl(var(--peplike-purple)/0.1)]">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="tag-chip">{item.phase}</span>
                        <h3 className="text-xl font-bold gradient-text">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Research Commitment */}
        <div className="bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.05)] to-[hsl(var(--peplike-purple)/0.05)] rounded-2xl p-8 border border-[hsl(var(--peplike-purple)/0.1)] mb-12">
          <h2 className="text-2xl font-bold gradient-text mb-4 text-center">Our Commitment to Research</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Peplike AI is dedicated to advancing peptide research through responsible AI development. We prioritize scientific accuracy, 
            research safety, and educational value in every feature we build. Our platform serves as a bridge between complex scientific 
            literature and practical research applications, making peptide science more accessible to the global research community.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="text-center pb-12">
          <h2 className="text-2xl font-bold mb-4">Join the Research Community</h2>
          <p className="text-gray-600 mb-6">
            Ready to explore the future of peptide research with AI-powered tools?
          </p>
          <button className="gradient-button">
            Start Researching Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
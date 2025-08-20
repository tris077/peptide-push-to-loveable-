import { BookOpen, Shield, Zap, Users, ChevronRight } from "lucide-react";
import Navigation from "../components/Navigation";

const Fundamentals = () => {
  const sections = [
    {
      title: "Peptides 101",
      description: "Understanding the basics of peptides, their structure, and biological functions",
      icon: BookOpen,
      content: [
        "What are peptides and how do they differ from proteins?",
        "Types of peptides: bioactive, synthetic, and naturally occurring",
        "How peptides interact with cellular receptors",
        "The role of peptides in biological processes"
      ]
    },
    {
      title: "Safety & Research Use",
      description: "Important considerations for peptide research and safety protocols",
      icon: Shield,
      content: [
        "Research-only disclaimer and legal considerations",
        "Proper storage and handling procedures", 
        "Understanding purity and quality standards",
        "Reconstitution and stability factors"
      ]
    },
    {
      title: "Mechanisms of Action",
      description: "How different peptides work at the molecular level",
      icon: Zap,
      content: [
        "Growth hormone releasing peptides (GHRPs)",
        "Healing and recovery peptides",
        "Nootropic peptides and brain function",
        "Metabolic and aesthetic peptides"
      ]
    },
    {
      title: "Research Applications",
      description: "Current research areas and scientific applications",
      icon: Users,
      content: [
        "Tissue repair and regeneration studies",
        "Cognitive enhancement research",
        "Metabolic and aging research",
        "Performance and recovery studies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">Fundamentals</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master the science behind peptides with comprehensive educational resources covering safety, mechanisms, and research applications.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-8 pb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="peptide-card">
                {/* Section Header */}
                <div className="gradient-border mb-4">
                  <div className="bg-white rounded-2xl p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(var(--peplike-blue))] to-[hsl(var(--peplike-purple))] flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold gradient-text">{section.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {section.description}
                </p>

                {/* Content List */}
                <div className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
                      <ChevronRight className="w-4 h-4 text-[hsl(var(--peplike-purple))] mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-sm gradient-text font-medium hover:underline">
                    Explore {section.title} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Principles Section */}
        <div className="bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.05)] to-[hsl(var(--peplike-purple)/0.05)] rounded-2xl p-8 border border-[hsl(var(--peplike-purple)/0.1)] mb-12">
          <h2 className="text-2xl font-bold gradient-text mb-6 text-center">Key Research Principles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.2)] to-[hsl(var(--peplike-purple)/0.2)] flex items-center justify-center">
                <Shield className="w-6 h-6 text-[hsl(var(--peplike-purple))]" />
              </div>
              <h3 className="font-semibold mb-2">Research Only</h3>
              <p className="text-sm text-gray-600">All peptides are intended for research purposes only, not for human consumption.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.2)] to-[hsl(var(--peplike-purple)/0.2)] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[hsl(var(--peplike-purple))]" />
              </div>
              <h3 className="font-semibold mb-2">Scientific Approach</h3>
              <p className="text-sm text-gray-600">Understanding mechanisms and interactions through scientific literature and research.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[hsl(var(--peplike-blue)/0.2)] to-[hsl(var(--peplike-purple)/0.2)] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[hsl(var(--peplike-purple))]" />
              </div>
              <h3 className="font-semibold mb-2">Quality Standards</h3>
              <p className="text-sm text-gray-600">Emphasis on purity, proper storage, and handling protocols for research applications.</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">Important Research Notice</h3>
          <p className="text-sm text-amber-700 leading-relaxed">
            The information provided is for educational and research purposes only. Peplike AI does not provide medical advice or recommend peptides for human use. 
            Always consult with qualified healthcare professionals and ensure compliance with local regulations when conducting peptide research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
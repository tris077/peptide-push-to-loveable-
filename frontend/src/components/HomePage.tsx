import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Zap, Heart, Brain, TrendingUp, Clock, Star } from 'lucide-react';

// Sample peptide data with images and proper information
const peptidesData = [
  {
    id: 1,
    name: 'BPC-157',
    icon: '/images/bpc-157.svg',
    route: 'Injection',
    categories: ['Recovery', 'Injection'],
    description: 'Body Protection Compound promotes healing and tissue repair through enhanced angiogenesis.',
    highlight: 'Most researched for gastric ulcers and tendon injuries with remarkable healing properties.',
    image: '/images/bpc-157.svg'
  },
  {
    id: 2,
    name: 'TB-500',
    icon: '/images/tb-500.svg',
    route: 'Injection',
    categories: ['Recovery', 'Injection'],
    description: 'Thymosin Beta-4 fragment accelerates wound healing and reduces inflammation.',
    highlight: 'Particularly effective for muscle, tendon, and ligament injuries in research studies.',
    image: '/images/tb-500.svg'
  },
  {
    id: 3,
    name: 'Ipamorelin',
    icon: '/images/ipamorelin.svg',
    route: 'Injection',
    categories: ['Performance', 'Injection'],
    description: 'Growth hormone releasing peptide that stimulates natural GH production.',
    highlight: 'Selective GHRP with minimal impact on cortisol and prolactin levels.',
    image: '/images/ipamorelin.svg'
  },
  {
    id: 4,
    name: 'Melanotan II',
    icon: '/images/melanotan-ii.svg',
    route: 'Injection',
    categories: ['Aesthetic', 'Injection'],
    description: 'Melanocyte stimulating hormone analog for tanning and appetite suppression.',
    highlight: 'Research shows potential for skin protection and metabolic benefits.',
    image: '/images/melanotan-ii.svg'
  },
  {
    id: 5,
    name: 'Noopept',
    icon: '/images/noopept.svg',
    route: 'Oral',
    categories: ['Brain', 'Oral'],
    description: 'Nootropic peptide that enhances cognitive function and memory formation.',
    highlight: 'Demonstrates neuroprotective effects in research studies.',
    image: '/images/noopept.svg'
  },
  {
    id: 6,
    name: 'Epitalon',
    icon: '/images/epitalon.svg',
    route: 'Injection',
    categories: ['Recovery', 'Injection'],
    description: 'Tetrapeptide that may influence telomerase activity and cellular aging.',
    highlight: 'Research suggests potential anti-aging and longevity benefits.',
    image: '/images/epitalon.svg'
  }
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedRoute, setSelectedRoute] = useState('All Routes');

  const filteredPeptides = peptidesData.filter(peptide => {
    const matchesSearch = peptide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         peptide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || 
                           peptide.categories.includes(selectedCategory);
    const matchesRoute = selectedRoute === 'All Routes' || 
                         peptide.route === selectedRoute;
    
    return matchesSearch && matchesCategory && matchesRoute;
  });

  const categories = ['All Categories', 'Recovery', 'Performance', 'Aesthetic', 'Brain'];
  const routes = ['All Routes', 'Injection', 'Oral'];

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(180deg, rgb(147 51 234) 0%, rgb(236 72 153) 50%, rgb(59 130 246) 100%)'}}>
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center mb-6">
              <span className="text-white font-bold text-4xl">P</span>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Research Library
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Comprehensive database of research peptides with scientific insights
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search peptides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input pl-12"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-dropdown"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedRoute}
                onChange={(e) => setSelectedRoute(e.target.value)}
                className="filter-dropdown"
              >
                {routes.map(route => (
                  <option key={route} value={route}>{route}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredPeptides.length} of {peptidesData.length} peptides
          </div>
        </div>

        {/* Peptide Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPeptides.map((peptide) => (
            <div key={peptide.id} className="peptide-card group relative">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{peptide.name.substring(0, 3)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gradient-primary">
                      {peptide.name}
                    </h3>
                  </div>
                </div>
                
                <div className="route-icon">
                  {peptide.route === 'Injection' ? '💉' : '💊'}
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-3">
                {peptide.categories.map((category) => (
                  <span key={category} className="category-tag">
                    {category}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {peptide.description}
              </p>

              {/* Highlight Box */}
              <div className="highlight-box">
                <div className="flex items-start space-x-2">
                  <Star className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-600">
                    {peptide.highlight}
                  </p>
                </div>
              </div>

              {/* Hover Effect - View Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-4">
                <button
                  onClick={() => navigate(`/peptide/${peptide.id}`)}
                  className="btn-secondary text-sm px-4 py-2"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPeptides.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No peptides found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
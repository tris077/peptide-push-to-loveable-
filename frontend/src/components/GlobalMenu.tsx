import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  MessageCircle, 
  Library, 
  Layers, 
  GraduationCap, 
  User,
  Menu,
  X,
  Home
} from 'lucide-react';

const GlobalMenu: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Chatbot', path: '/chat', icon: MessageCircle },
    { name: 'Library', path: '/library', icon: Library },
    { name: 'Stacks', path: '/stacks', icon: Layers },
    { name: 'Fundamentals', path: '/fundamentals', icon: GraduationCap },
    { name: 'About', path: '/about', icon: User },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  return (
    <div className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="relative">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">Peplike AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`nav-item ${isActive(item.path) ? 'nav-item-active' : 'text-gray-700'}`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* User Menu / Auth */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700 hidden sm:block">
                  Welcome, {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate('/chat')}
                className="btn-primary"
              >
                Get Started
              </button>
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'nav-item-active'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalMenu;

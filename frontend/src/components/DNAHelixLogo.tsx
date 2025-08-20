import React from 'react';

interface DNAHelixLogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export const DNAHelixLogo: React.FC<DNAHelixLogoProps> = ({ 
  size = 40, 
  className = "", 
  animated = true 
}) => {
  return (
    <div 
      className={`relative ${animated ? 'animate-bounce-gentle' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Use the exact logo image the user provided */}
      <img
        src="/logo.png"
        alt="Peplike AI Logo"
        width={size}
        height={size}
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback if image doesn't load - show text logo
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          // Show fallback text logo
          const fallback = target.parentElement?.querySelector('.fallback-logo');
          if (fallback) {
            (fallback as HTMLElement).style.display = 'block';
          }
        }}
      />
      
      {/* Fallback text logo that matches user's description exactly */}
      <div className="fallback-logo hidden flex items-center justify-center w-full h-full">
        <div className="flex items-center space-x-2">
          {/* DNA Helix Icon */}
          <div className="w-6 h-8 relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-400 rounded-full"></div>
            {/* Base pairs */}
            <div className="absolute top-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
            <div className="absolute top-3 left-0 right-0 h-0.5 bg-purple-500 rounded-full"></div>
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-pink-500 rounded-full"></div>
            <div className="absolute top-7 left-0 right-0 h-0.5 bg-purple-500 rounded-full"></div>
          </div>
          
          {/* Text */}
          <span className="text-sm font-bold text-gray-800">Peplike AI™</span>
        </div>
      </div>
    </div>
  );
};

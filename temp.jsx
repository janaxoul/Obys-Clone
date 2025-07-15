import React from 'react';

export default function PortfolioNav() { return ( <div className="relative min-h-screen bg-gray-100"> {/* Main content placeholder */} <div className="p-4">Main Content Here</div>

{/* Fixed Bottom Navigation */}
  <nav className="fixed bottom-0 left-0 w-full h-20 bg-gray-800 text-white flex justify-between items-center px-8 clip-path-custom shadow-lg">
    <a href="#" className="hover:text-orange-400">Home</a>
    <a href="#" className="hover:text-orange-400">About</a>

    {/* Center Circle Button */}
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
      <span className="text-2xl">+</span>
    </div>

    <a href="#" className="hover:text-orange-400">Projects</a>
    <a href="#" className="hover:text-orange-400">Contact</a>
  </nav>

  <style jsx>{`
    .clip-path-custom {
      clip-path: path('M0,0 H35% Q50%,40 65%,0 H100 V100 H0 Z');
    }
  `}</style>
</div>

); }


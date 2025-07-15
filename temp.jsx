import React from 'react';

export default function PortfolioNav() { return ( <div className="relative min-h-screen bg-gray-100 border-8 border-gray-800 rounded-xl overflow-hidden"> {/* Main content placeholder */} <div className="p-4">Main Content Here</div>

{/* Fixed Bottom Navigation */}
  <nav className="fixed bottom-0 left-0 w-full h-16 bg-gray-900 text-white flex justify-evenly items-center clip-path-nav shadow-xl border-t border-gray-700">
    <a href="#" className="hover:text-orange-400">Home</a>
    <a href="#" className="hover:text-orange-400">About</a>
    <a href="#" className="hover:text-orange-400">Projects</a>
    <a href="#" className="hover:text-orange-400">Contact</a>
  </nav>

  <style jsx>{`
    .clip-path-nav {
      clip-path: polygon(0% 0%, 5% 0%, 5% 20%, 95% 20%, 95% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  `}</style>
</div>

); }


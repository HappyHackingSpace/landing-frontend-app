import React from 'react';
import MobileNav from './MobileNav';
import Footer from './Footer';
import HeroCarousel from './HeroCarousel';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile-specific header/nav */}
      <div className="mobile-header bg-background border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">HHS Mobile</h1>
        <MobileNav />
      </div>
      
      <HeroCarousel />
      
      <main className="flex-1 px-4 py-6">
        <div className="mobile-specific-container">
          {/* Mobile-specific UI elements */}
          <div className="mobile-content">
            {children}
          </div>
        </div>
      </main>
      
      {/* Mobile-specific footer with navigation */}
      <div className="mobile-footer bg-background border-t fixed bottom-0 left-0 right-0 p-2">
        <div className="flex justify-around items-center">
          <button className="p-2 flex flex-col items-center text-xs">
            <span className="material-icons">home</span>
            Home
          </button>
          <button className="p-2 flex flex-col items-center text-xs">
            <span className="material-icons">search</span>
            Search
          </button>
          <button className="p-2 flex flex-col items-center text-xs">
            <span className="material-icons">person</span>
            Profile
          </button>
          <button className="p-2 flex flex-col items-center text-xs">
            <span className="material-icons">settings</span>
            Settings
          </button>
        </div>
      </div>
      
      {/* Regular footer is hidden on mobile */}
      <div className="hidden">
        <Footer />
      </div>
    </div>
  );
};

export default MobileLayout; 
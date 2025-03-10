import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface DesktopLayoutProps {
  children: React.ReactNode;
}

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="desktop-specific-container">
         
          
          <div className="desktop-content">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesktopLayout; 
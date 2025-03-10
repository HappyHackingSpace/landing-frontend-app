import React from 'react';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Use the device detection hook
  const { isMobile, isLoading } = useDeviceDetect();

  // Show a loading state while detecting the device
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Render the appropriate layout based on the device
  return isMobile ? (
    <MobileLayout>{children}</MobileLayout>
  ) : (
    <DesktopLayout>{children}</DesktopLayout>
  );
};

export default Layout; 
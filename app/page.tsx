'use client';

import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import MobileFeature from '@/components/MobileFeature';
import DesktopFeature from '@/components/DesktopFeature';
import { MarqueeDemo } from '@/components/magicui/MarqueeDemo';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { isMobile, isLoading } = useDeviceDetect();
  const t = useTranslation();

  // Show a loading state while detecting the device
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <span className="ml-3">{t.common.loading}</span>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header with fixed-width container */}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold">{t.home.title}</h1>
        <p className="mt-2 text-muted-foreground">
          {t.home.subtitle} - {isMobile ? t.home.mobileVersion : t.home.desktopVersion}
        </p>
      </div>

      {/* Full-width fluid Marquee */}
      <div className="w-full px-0 mb-12">
        <MarqueeDemo />
      </div>

      {/* Render device-specific components */}
      {isMobile ? <MobileFeature /> : <DesktopFeature />}
    </main>
  );
}
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const t = useTranslation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">{t.common.appName}</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            {t.navigation.home}
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            {t.navigation.about}
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            {t.navigation.services}
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            {t.navigation.contact}
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link href="/login">{t.navigation.login}</Link>
          </Button>
          <Button size="sm" asChild className="hidden md:flex">
            <Link href="/signup">{t.navigation.signup}</Link>
          </Button>
          
          {/* Mobile navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header; 
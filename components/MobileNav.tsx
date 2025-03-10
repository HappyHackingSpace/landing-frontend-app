import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from './ui/sheet';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

const MobileNav = () => {
  const t = useTranslation();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>{t.common.appName}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Link 
            href="/" 
            className="text-base font-medium transition-colors hover:text-primary"
          >
            {t.navigation.home}
          </Link>
          <Link 
            href="/about" 
            className="text-base font-medium transition-colors hover:text-primary"
          >
            {t.navigation.about}
          </Link>
          <Link 
            href="/services" 
            className="text-base font-medium transition-colors hover:text-primary"
          >
            {t.navigation.services}
          </Link>
          <Link 
            href="/contact" 
            className="text-base font-medium transition-colors hover:text-primary"
          >
            {t.navigation.contact}
          </Link>
          
          <div className="flex flex-col gap-4 mt-6 pt-6 border-t">
            <div className="flex items-start">
              <LanguageSelector />
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" asChild>
                <Link href="/login">{t.navigation.login}</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">{t.navigation.signup}</Link>
              </Button>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav; 
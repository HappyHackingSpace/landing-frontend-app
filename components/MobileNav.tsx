import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from './ui/sheet';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { getNavigationItems } from '@/lib/config/navigation';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MobileNav = () => {
  const t = useTranslation();
  const navigationItems = getNavigationItems(t);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
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
          {navigationItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              {item.items ? (
                <>
                  <button 
                    onClick={() => toggleSubmenu(index)}
                    className="flex justify-between items-center text-base font-medium transition-colors hover:text-primary py-2"
                  >
                    {item.label}
                    {openSubmenus[index] ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {openSubmenus[index] && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 border-l">
                      {item.items.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          href={subItem.href} 
                          className="text-sm font-medium transition-colors hover:text-primary py-1"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-base font-medium transition-colors hover:text-primary py-2"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          <div className="flex flex-col gap-4 mt-6 pt-6 border-t">
            <div className="flex items-start">
              <LanguageSelector />
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav; 
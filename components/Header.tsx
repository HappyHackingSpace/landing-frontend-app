import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import Logo from './custom/Logo';
import { getNavigationItems, NavigationItem } from '@/lib/config/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const t = useTranslation();
  const navigationItems = getNavigationItems(t);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                          {item.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.label}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <ThemeToggle />
          {/* <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link href="/login">{t.navigation.login}</Link>
          </Button>
          <Button size="sm" asChild className="hidden md:flex">
            <Link href="/signup">{t.navigation.signup}</Link>
          </Button> */}
          
          {/* Mobile navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header; 
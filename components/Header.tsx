import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">MyApp</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild className="hidden md:flex">
            <Link href="/signup">Sign Up</Link>
          </Button>
          
          {/* Mobile navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header; 
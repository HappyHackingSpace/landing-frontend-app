import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { getFooterItems } from '@/lib/config/navigation';
import Logo from './custom/Logo';

const Footer = () => {
  const t = useTranslation();
  const footerItems = getFooterItems(t);
  
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              {t.common.appName} - {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">{t.navigation.home}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/events" className="text-sm text-muted-foreground hover:text-foreground">
                    {t.navigation.events}
                  </Link>
                </li>
                <li>
                  <Link href="/live" className="text-sm text-muted-foreground hover:text-foreground">
                    {t.navigation.live}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                    {t.navigation.blog}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4">{t.navigation.hhs}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/philosophy" className="text-sm text-muted-foreground hover:text-foreground">
                    {t.navigation.philosophy}
                  </Link>
                </li>
                <li>
                  <Link href="/manifesto" className="text-sm text-muted-foreground hover:text-foreground">
                    {t.navigation.manifesto}
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground">
                    {t.navigation.team}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    {t.navigation.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">{t.navigation.branding}</h3>
            <ul className="space-y-3">
              {footerItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/stickers" className="text-sm text-muted-foreground hover:text-foreground">
                  {t.navigation.stickers}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
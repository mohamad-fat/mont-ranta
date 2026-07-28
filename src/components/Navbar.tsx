import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.accommodation'), path: '/accommodation' },
    { name: t('nav.packages'), path: '/packages' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img className="h-12 w-auto object-cover rounded-md" src="/assets/logo.jpeg" alt="Mont-Ranta Logo" />
              <span className="font-serif text-2xl font-semibold text-primary hidden sm:block">Mont-Ranta</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 space-x-reverse rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Button variant="ghost" onClick={toggleLanguage} aria-label="Toggle Language" className="mr-2 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span className="font-medium text-sm">{i18n.language === 'en' ? 'عربي' : 'Eng'}</span>
            </Button>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              {t('nav.bookNow')}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleLanguage} className="mr-2 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span className="font-medium text-sm">{i18n.language === 'en' ? 'عربي' : 'Eng'}</span>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-foreground hover:text-primary hover:bg-muted block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('nav.bookNow')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

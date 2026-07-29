import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
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
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-border/80 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative p-0.5 rounded-xl bg-gradient-to-tr from-amber-400/50 to-primary/40 group-hover:scale-105 transition-transform">
                  <img className="h-11 w-auto object-cover rounded-lg shadow-sm" src="./assets/logo.png" alt="Mont-Ranta Logo" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-primary tracking-tight group-hover:text-primary/90 transition-colors">
                    Mont-Ranta
                  </span>
                  <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-sans -mt-1 font-semibold">
                    Akkar Retreat
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 space-x-reverse rtl:space-x-reverse bg-muted/60 p-1.5 rounded-full border border-border/50">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'text-foreground/80 hover:text-primary hover:bg-background/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            
            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={toggleLanguage} 
                aria-label="Toggle Language" 
                className="rounded-full border border-border/80 hover:bg-background flex items-center gap-2 px-4 py-2"
              >
                <Globe className="h-4 w-4 text-primary" />
                <span className="font-semibold text-xs">{i18n.language === 'en' ? 'العربية' : 'English'}</span>
              </Button>
              
              <a href={generateWhatsAppLink(i18n.language, 'Navbar Header')} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-5 py-2.5 shadow-md shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                  {t('nav.bookNow')}
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="rounded-full border border-border px-3 py-1.5 flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-primary" />
                <span className="font-semibold text-xs">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-foreground hover:text-primary hover:bg-muted/80 focus:outline-none transition-colors border border-border/60"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive ? 'bg-primary text-white' : 'text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3">
                <a href={generateWhatsAppLink(i18n.language, 'Mobile Navbar')} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl font-bold shadow-md">
                    {t('nav.bookNow')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
  );
}

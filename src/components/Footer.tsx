import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageCircle, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-dark-charcoal text-warm-off-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-amber-400 to-emerald-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-white/10 border border-white/20">
                <img className="h-10 w-auto object-cover rounded-lg" src="./assets/logo.png" alt="Mont-Ranta Logo" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white tracking-tight">Mont-Ranta</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://maps.app.goo.gl/1cVmgqTnEGzrV6n37" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-amber-300 transition-all p-3 bg-white/5 hover:bg-white/15 rounded-full border border-white/10" 
                title="Location on Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
              <a 
                href={generateWhatsAppLink(i18n.language, 'Footer Contact')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-emerald-400 transition-all p-3 bg-white/5 hover:bg-white/15 rounded-full border border-white/10" 
                title="WhatsApp Chat"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white tracking-wide border-b border-white/10 pb-2">{t('footer.quickLinks')}</h4>
            <ul className="list-none p-0 space-y-3 text-sm">
              <li><Link to="/" className="text-white/70 hover:text-amber-300 transition-colors font-medium">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-amber-300 transition-colors font-medium">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/accommodation" className="text-white/70 hover:text-amber-300 transition-colors font-medium">{t('nav.accommodation')}</Link></li>
              <li><Link to="/packages" className="text-white/70 hover:text-amber-300 transition-colors font-medium">{t('nav.packages')}</Link></li>
              <li><Link to="/events" className="text-white/70 hover:text-amber-300 transition-colors font-medium">{t('nav.events')}</Link></li>
              <li><Link to="/gallery" className="text-white/70 hover:text-amber-300 transition-colors font-medium">{t('nav.gallery')}</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white tracking-wide border-b border-white/10 pb-2">{t('footer.support')}</h4>
            <ul className="list-none p-0 space-y-3 text-sm">
              <li><Link to="/contact" className="text-white/70 hover:text-amber-300 transition-colors font-medium">{t('footer.contactUs')}</Link></li>
              <li><a href="https://maps.app.goo.gl/1cVmgqTnEGzrV6n37" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-amber-300 transition-colors font-medium">{i18n.language === 'ar' ? 'موقعنا على الخريطة' : 'Google Maps Pin'}</a></li>
              <li>
                <a href={generateWhatsAppLink(i18n.language, 'Footer Support')} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-emerald-400 transition-colors font-medium flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  {i18n.language === 'ar' ? 'دعم الواتساب المباشر' : 'Direct WhatsApp Support'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white tracking-wide border-b border-white/10 pb-2">{t('footer.contactInfo')}</h4>
            <ul className="list-none p-0 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/1cVmgqTnEGzrV6n37" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  {t('footer.location')} 📍
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-300 shrink-0" />
                <a href="tel:+96171752717" className="text-white/70 hover:text-white transition-colors font-mono" dir="ltr">
                  +961 71 752 717
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-300 shrink-0" />
                <span className="text-white/70">info@mont-ranta.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <p>
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-1.5 text-white/70">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for mountain eco-tourism.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

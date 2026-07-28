import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Camera, Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-charcoal text-warm-off-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-primary-foreground">Mont-Ranta</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <Camera className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/accommodation" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('nav.accommodation')}</Link></li>
              <li><Link to="/packages" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('nav.packages')}</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('nav.events')}</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('nav.gallery')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-lg font-semibold mb-6">{t('footer.support')}</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('footer.faq')}</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('footer.contactUs')}</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-lg font-semibold mb-6">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{t('footer.location')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">+961 70 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">info@mont-ranta.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="mt-4 md:mt-0">
             <p className="text-muted-foreground text-sm flex items-center">
               {t('footer.designed')}
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

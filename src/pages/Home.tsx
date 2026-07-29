import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="./assets/hero.jpg" 
            alt="Mont-Ranta mountains and nature" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center text-white mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-10 text-white/90 font-light drop-shadow"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href={generateWhatsAppLink(i18n.language, t('hero.title'))} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
                {t('nav.bookNow')}
              </Button>
            </a>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-transform hover:scale-105">
              {t('hero.explore')}
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce"
        >
          <span className="text-white/70 text-sm mb-2 uppercase tracking-widest font-medium">{t('hero.scroll')}</span>
          <ChevronDown className="text-white/70 h-6 w-6" />
        </motion.div>
      </section>

      {/* Quick Availability Check Bar */}
      <section className="relative z-20 -mt-16 container mx-auto px-4 max-w-5xl">
        <Card className="bg-white/95 backdrop-blur-md shadow-xl border-0 rounded-2xl overflow-hidden">
          <CardContent className="p-2 sm:p-4">
            <div className="flex flex-col md:flex-row items-center gap-4 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-border/50">
              <div className="w-full md:w-1/3 p-4 flex items-center gap-4 hover:bg-accent/5 rounded-xl transition-colors cursor-pointer">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{t('home.search.checkIn')}</p>
                  <p className="font-semibold text-foreground">{t('home.search.selectDates')}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 p-4 flex items-center gap-4 hover:bg-accent/5 rounded-xl transition-colors cursor-pointer">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{t('home.search.guests')}</p>
                  <p className="font-semibold text-foreground">{t('home.search.guestCount')}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 p-4 flex items-center justify-center">
                <Button className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-[1.02]">
                  {t('home.search.checkAvailability')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* About Section Snippet */}
      <section className="py-24 bg-warm-off-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-charcoal mb-6">{t('home.about.title')}</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('home.about.text')}
            </p>
            <div className="mt-10">
               <img src="./assets/stone_house.png" alt="Mont-Ranta Bungalow" className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Accommodations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">{t('home.accommodations.title')}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">{t('home.accommodations.subtitle')}</p>
            </div>
            <Link to="/accommodation">
              <Button variant="outline" className="mt-6 md:mt-0">{t('home.accommodations.viewAll')}</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'basicTent', image: './assets/basic_tent.png' },
              { id: 'domeTent', image: './assets/special-tent.png' },
              { id: 'stoneHouse', image: './assets/stone_house.png' }
            ].map((acc) => (
              <Card key={acc.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-2xl bg-warm-off-white flex flex-col justify-between">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img src={acc.image} alt={t(`data.accommodations.${acc.id}.name`)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-dark-charcoal text-sm font-semibold py-1 px-3 rounded-full">
                      {t('home.accommodations.available')}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-semibold mb-2 text-primary">{t(`data.accommodations.${acc.id}.name`)}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{t(`data.accommodations.${acc.id}.description`)}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1"><Users className="h-4 w-4 text-primary" /> {t(`data.accommodations.${acc.id}.guests`)}</div>
                      <div className="flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" /> {t('home.accommodations.hilltop')}</div>
                    </div>
                  </CardContent>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-2xl font-bold text-dark-charcoal">${t(`data.accommodations.${acc.id}.price`)}</span>
                    <span className="text-sm text-muted-foreground">{t('home.accommodations.perNight')}</span>
                  </div>
                  <a href={generateWhatsAppLink(i18n.language, t(`data.accommodations.${acc.id}.name`))} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary hover:bg-primary/90 rounded-full">{t('home.accommodations.book')}</Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-forest-green text-warm-off-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">{t('home.packages.title')}</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16">{t('home.packages.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[t('home.packages.romantic'), t('home.packages.family'), t('home.packages.friends'), t('home.packages.corporate')].map((pkg, idx) => (
              <Card key={idx} className="bg-white/10 border-white/20 backdrop-blur-md text-white hover:bg-white/15 transition-all text-left">
                <CardContent className="p-6">
                  <h3 className="font-sans text-xl font-semibold mb-4">{pkg}</h3>
                  <ul className="space-y-3 mb-8 text-white/80 text-sm">
                    <li className="flex items-center gap-2">✓ {t('home.packages.features.nights')}</li>
                    <li className="flex items-center gap-2">✓ {t('home.packages.features.breakfast')}</li>
                    <li className="flex items-center gap-2">✓ {t('home.packages.features.bbq')}</li>
                  </ul>
                  <Link to="/packages">
                    <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white hover:text-forest-green">{t('home.packages.viewDetails')}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

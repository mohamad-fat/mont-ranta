import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Users, MapPin, Check, Sparkles, Star, ShieldCheck, Mountain, Trees, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t, i18n } = useTranslation();

  const stats = [
    { labelEn: '1,200m Altitude', labelAr: 'ارتفاع ١٢٠٠ م', icon: Mountain, descEn: 'High above clouds', descAr: 'فوق خط السحاب' },
    { labelEn: '100% Eco-Friendly', labelAr: '١٠٠٪ صديق للبيئة', icon: Trees, descEn: 'Akkar Pine Forest', descAr: 'غابات صنوبر عكار' },
    { labelEn: '4.9★ Rating', labelAr: 'تقييم ٤.٩ ★', icon: Star, descEn: 'Highly loved by guests', descAr: 'آراء الضيوف والمصطافين' },
    { labelEn: 'Private & Secure', labelAr: 'خصوصية وأمان', icon: ShieldCheck, descEn: 'Family atmosphere', descAr: 'أجواء عائلية مريحة' },
  ];

  return (
    <div className="flex flex-col w-full bg-warm-off-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[92vh] min-h-[680px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Ambient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="./assets/hero.jpg" 
            alt="Mont-Ranta mountains and nature" 
            className="w-full h-full object-cover object-center transition-all duration-700"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center text-white mt-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-2xl"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>{i18n.language === 'ar' ? 'القريات، عكار، شمال لبنان • ملاذ بين السحاب' : 'Qrayat, Akkar, North Lebanon • Hideaway in the Clouds'}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-10 text-white font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
          >
            <a href={generateWhatsAppLink(i18n.language, t('hero.title'))} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg px-8 py-7 rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-primary/30">
                {t('nav.bookNow')}
              </Button>
            </a>
            <Link to="/accommodation">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/40 text-lg px-8 py-7 rounded-full backdrop-blur-md transition-all hover:scale-105">
                {t('hero.explore')}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce"
        >
          <span className="text-white/70 text-xs mb-1 uppercase tracking-widest font-semibold">{t('hero.scroll')}</span>
          <ChevronDown className="text-white/70 h-5 w-5" />
        </motion.div>
      </section>

      {/* Quick Availability Check Bar */}
      <section className="relative z-20 mt-10 mb-16 container mx-auto px-4 max-w-5xl">
        <Card className="bg-white/95 backdrop-blur-2xl shadow-2xl border border-white/50 rounded-3xl overflow-hidden">
          <CardContent className="p-3 sm:p-5">
            <div className="flex flex-col md:flex-row items-center gap-4 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-border/60">
              <div className="w-full md:w-1/3 p-4 flex items-center gap-4 hover:bg-primary/5 rounded-2xl transition-colors cursor-pointer">
                <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{t('home.search.checkIn')}</p>
                  <p className="font-bold text-foreground text-base">{t('home.search.selectDates')}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 p-4 flex items-center gap-4 hover:bg-primary/5 rounded-2xl transition-colors cursor-pointer">
                <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{t('home.search.guests')}</p>
                  <p className="font-bold text-foreground text-base">{t('home.search.guestCount')}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 p-4 flex items-center justify-center">
                <a href={generateWhatsAppLink(i18n.language, 'Availability Check')} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full h-14 text-base rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg transition-transform hover:scale-[1.02]">
                    {t('home.search.checkAvailability')}
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section className="py-24 bg-warm-off-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-left rtl:text-right"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>{i18n.language === 'ar' ? 'مرحباً في عكار' : 'Welcome to Akkar'}</span>
              </div>
              
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dark-charcoal leading-tight">
                {t('home.about.title')}
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t('home.about.text')}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((st, i) => {
                  const Icon = st.icon;
                  return (
                    <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-border/60 flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-xl text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-charcoal text-sm">{i18n.language === 'ar' ? st.labelAr : st.labelEn}</h4>
                        <p className="text-xs text-muted-foreground">{i18n.language === 'ar' ? st.descAr : st.descEn}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Image Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="./assets/stone_house.png" 
                  alt="Mont-Ranta Stone House" 
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 glass-dark rounded-2xl border border-white/20">
                  <p className="font-serif text-lg font-bold">{i18n.language === 'ar' ? 'بيوت حجرية ومخيمات جبلية' : 'Traditional Stone Houses & Glamping'}</p>
                  <p className="text-xs text-white/80">{i18n.language === 'ar' ? 'تجربة حقيقية تجمع بين الفخامة وبساطة الطبيعة' : 'Authentic comfort surrounded by Akkar pine forests'}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Accommodations */}
      <section className="py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">{i18n.language === 'ar' ? 'أماكن الإقامة' : 'STAY WITH US'}</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-charcoal mt-2">{t('home.accommodations.title')}</h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-2">{t('home.accommodations.subtitle')}</p>
            </div>
            <Link to="/accommodation">
              <Button variant="outline" className="mt-6 md:mt-0 rounded-full px-6 py-5 font-semibold border-primary/30 text-primary hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                {t('home.accommodations.viewAll')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'basicTent', image: './assets/basic_tent.png', tagEn: 'Adventure', tagAr: 'مغامرة' },
              { id: 'domeTent', image: './assets/special-tent.png', tagEn: 'Glamping', tagAr: 'فاخر' },
              { id: 'stoneHouse', image: './assets/stone_house.png', tagEn: 'Heritage', tagAr: 'تراثي' }
            ].map((acc) => (
              <Card key={acc.id} className="overflow-hidden border border-border/60 shadow-lg hover:shadow-2xl transition-all duration-300 group rounded-3xl bg-warm-off-white flex flex-col justify-between">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img src={acc.image} alt={t(`data.accommodations.${acc.id}.name`)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
                      {i18n.language === 'ar' ? acc.tagAr : acc.tagEn}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-dark-charcoal text-xs font-bold py-1 px-3 rounded-full shadow-md">
                      {t('home.accommodations.available')}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2 text-dark-charcoal group-hover:text-primary transition-colors">{t(`data.accommodations.${acc.id}.name`)}</h3>
                    <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed">{t(`data.accommodations.${acc.id}.description`)}</p>
                    
                    <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground pt-3 border-t border-border/50">
                      <div className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> {t(`data.accommodations.${acc.id}.guests`)}</div>
                      <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> {t('home.accommodations.hilltop')}</div>
                    </div>
                  </CardContent>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-2xl font-extrabold text-primary">${t(`data.accommodations.${acc.id}.price`)}</span>
                    <span className="text-xs text-muted-foreground">{t('home.accommodations.perNight')}</span>
                  </div>
                  <a href={generateWhatsAppLink(i18n.language, t(`data.accommodations.${acc.id}.name`))} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md transition-transform hover:scale-105">{t('home.accommodations.book')}</Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Experiences Packages */}
      <section className="py-24 bg-forest-green text-warm-off-white relative overflow-hidden">
        {/* Decorative Ambient Radial Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">{i18n.language === 'ar' ? 'باقات حصرية' : 'EXCLUSIVE PACKAGES'}</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white mt-2">{t('home.packages.title')}</h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-16">{t('home.packages.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[t('home.packages.romantic'), t('home.packages.family'), t('home.packages.friends'), t('home.packages.corporate')].map((pkg, idx) => (
              <Card key={idx} className="glass-dark text-white hover:border-amber-300/50 transition-all duration-300 text-left rtl:text-right rounded-3xl flex flex-col justify-between border border-white/20 shadow-xl">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="p-3 bg-white/10 rounded-2xl w-fit mb-4 text-amber-300">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-4 text-white">{pkg}</h3>
                    
                    <ul className="list-none p-0 m-0 space-y-3 mb-8 text-white/85 text-xs font-medium">
                      <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400 shrink-0" /> {t('home.packages.features.nights')}</li>
                      <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400 shrink-0" /> {t('home.packages.features.breakfast')}</li>
                      <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400 shrink-0" /> {t('home.packages.features.bbq')}</li>
                    </ul>
                  </div>

                  <Link to="/packages">
                    <Button variant="outline" className="w-full bg-white/10 hover:bg-white text-white hover:text-forest-green border-white/40 font-semibold rounded-2xl py-5 transition-all shadow-sm">
                      {t('home.packages.viewDetails')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-warm-off-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">{i18n.language === 'ar' ? 'الموقع الجغرافي' : 'FIND US IN AKKAR'}</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-charcoal mt-2 mb-4">
              {i18n.language === 'ar' ? 'موقعنا في القريات، عكار' : 'Our Location in Qrayat, Akkar'}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {i18n.language === 'ar' 
                ? 'استكشف موقع مخيم ومنتجع مونت رانتا الجبلي على الخريطة التفاعلية المباشرة أدناه' 
                : 'Explore the exact location of Mont-Ranta mountain retreat on the interactive live map below.'}
            </p>
          </div>

          <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-xl overflow-hidden border border-border/80">
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative shadow-inner">
              <iframe
                title="Mont-Ranta Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13155.603387810304!2d36.1957936!3d34.4800293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15222ef23b7c89f5%3A0xb30e6206ebefd8a!2sEl%20Qrayat%2C%20Lebanon!5e0!3m2!1sen!2slb!4v1700000000000!5m2!1sen!2slb"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-3 text-dark-charcoal font-semibold">
                <div className="p-2.5 bg-primary/10 rounded-full text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Qrayat, Akkar, North Lebanon (القريات، عكار)</span>
              </div>
              <a 
                href="https://maps.app.goo.gl/1cVmgqTnEGzrV6n37" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg transition-transform hover:scale-105 flex items-center gap-2">
                  {i18n.language === 'ar' ? 'افتح الاتجاهات في Google Maps' : 'Get Directions on Google Maps'}
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

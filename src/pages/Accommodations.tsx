import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, MapPin, CheckCircle, Sparkles, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Accommodations() {
  const { t, i18n } = useTranslation();

  const accommodations = [
    {
      id: 'stoneHouse',
      image: './assets/stone_house.png',
      badgeEn: 'Heritage Stone House',
      badgeAr: 'بيت حجر تقليدي',
      features: ['Private Terrace', 'En-suite Bathroom', 'Valley View', 'Queen Bed']
    },
    {
      id: 'domeTent',
      image: './assets/special-tent.png',
      badgeEn: 'Special Glamping Tent',
      badgeAr: 'خيمة خاصة فاخرة',
      features: ['Panoramic Window', 'Comfortable Bedding', 'Stargazing', 'Seating Area']
    },
    {
      id: 'basicTent',
      image: './assets/basic_tent.png',
      badgeEn: 'Adventurer Camping',
      badgeAr: 'تخييم مغامرة',
      features: ['Shared Facilities', 'Essential Bedding', 'Nature Surroundings', 'Firepit Access']
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-off-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-24 bg-forest-green text-warm-off-white overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{i18n.language === 'ar' ? 'خيارات الإقامة المتاحة' : 'ACCOMMODATIONS & GLAMPING'}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-6 text-white">{t('home.accommodations.title')}</h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">{t('home.accommodations.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* List Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col gap-12">
            {accommodations.map((acc, index) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-border/80 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="w-full md:w-2/5 h-72 md:h-auto relative overflow-hidden group">
                      <img 
                        src={acc.image} 
                        alt={t(`data.accommodations.${acc.id}.name`)} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-md">
                        {i18n.language === 'ar' ? acc.badgeAr : acc.badgeEn}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-dark-charcoal text-xs font-bold py-1.5 px-3.5 rounded-full shadow-md">
                        {t('home.accommodations.available')}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4 gap-4">
                          <h2 className="font-serif text-3xl font-bold text-dark-charcoal">{t(`data.accommodations.${acc.id}.name`)}</h2>
                          <div className="text-right shrink-0">
                            <div className="text-3xl font-extrabold text-primary">${t(`data.accommodations.${acc.id}.price`)}</div>
                            <div className="text-xs text-muted-foreground font-medium">{t('home.accommodations.perNight')}</div>
                          </div>
                        </div>
                        
                        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                          {t(`data.accommodations.${acc.id}.description`)}
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm font-semibold text-muted-foreground mb-6">
                          <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> {t(`data.accommodations.${acc.id}.guests`)}</div>
                          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {t('home.accommodations.hilltop')}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {acc.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium text-dark-charcoal bg-warm-off-white p-2.5 rounded-xl border border-border/40">
                              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" /> {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-auto flex items-center justify-end gap-4 pt-4 border-t border-border/40">
                        <a href={generateWhatsAppLink(i18n.language, t(`data.accommodations.${acc.id}.name`), false)} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                          <Button className="w-full sm:w-auto rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 text-white font-bold shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                            <PhoneCall className="w-4 h-4" />
                            {t('home.accommodations.book')}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

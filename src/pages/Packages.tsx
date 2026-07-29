import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, Check, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Packages() {
  const { t, i18n } = useTranslation();

  const packages = [
    {
      id: 'marriage',
      image: './assets/about_us.jpg', 
      isPopular: true,
      badgeEn: 'Couples & Romance',
      badgeAr: 'للعرسان والأزواج',
      features: ['Private Dining', 'Room Decoration', 'Sunset Hike', 'Breakfast in Bed']
    },
    {
      id: 'family',
      image: './assets/stone_house.png',
      isPopular: false,
      badgeEn: 'Family Retreat',
      badgeAr: 'ملاذ عائلي',
      features: ['Large Setup', 'Kid Activities', 'BBQ Night', 'Board Games']
    },
    {
      id: 'friends',
      image: './assets/tent_village.jpg', 
      isPopular: false,
      badgeEn: 'Group & Bonfire',
      badgeAr: 'مجموعات وسهرات نار',
      features: ['Clustered Tents', 'Shared Bonfire', 'Group Activities', 'Late Check-out']
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
              <span>{i18n.language === 'ar' ? 'تجارب وباقات مميزة' : 'CURATED EXPERIENCES'}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-6 text-white">{t('home.packages.title')}</h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">{t('home.packages.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Packages List Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={`h-full overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white flex flex-col group relative ${
                  pkg.isPopular ? 'border-amber-400 ring-2 ring-amber-400/30' : 'border-border/80'
                }`}>
                  {pkg.isPopular && (
                    <div className="absolute top-4 right-4 z-20 bg-amber-400 text-dark-charcoal text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 fill-current" />
                      <span>{i18n.language === 'ar' ? 'الأكثر طلباً' : 'MOST POPULAR'}</span>
                    </div>
                  )}

                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={t(`data.packages.${pkg.id}.name`)} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block mb-1">
                        {i18n.language === 'ar' ? pkg.badgeAr : pkg.badgeEn}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white mb-1">{t(`data.packages.${pkg.id}.name`)}</h3>
                      <p className="text-white/90 font-semibold text-lg">{t(`data.packages.${pkg.id}.price`)}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {t(`data.packages.${pkg.id}.description`)}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {pkg.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-xs font-semibold text-dark-charcoal bg-warm-off-white p-2.5 rounded-xl border border-border/40">
                            <Check className="h-4 w-4 text-emerald-600 shrink-0" /> 
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-border/40">
                      <a href={generateWhatsAppLink(i18n.language, t(`data.packages.${pkg.id}.name`), true)} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full rounded-2xl py-6 text-base bg-primary hover:bg-primary/90 text-white font-bold shadow-md flex items-center justify-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          {i18n.language === 'ar' ? 'استفسر واحجز عبر واتساب' : 'Enquire via WhatsApp'}
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PartyPopper, Flame, Music, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Events() {
  const { i18n } = useTranslation();

  const eventsList = [
    {
      id: 'private_gatherings',
      titleEn: 'Private Gatherings & Birthdays',
      titleAr: 'الحفلات الخاصة وأعياد الميلاد',
      descEn: 'Celebrate your special moments surrounded by pristine pine forests and mountain views. Complete catering and setup available.',
      descAr: 'احتفل بلحظاتك الخاصة وسط غابات الصنوبر وإطلالات الجبال. تتوفر خدمة تقديم الطعام والتجهيز الكامل.',
      icon: PartyPopper,
      image: './assets/about_us.jpg'
    },
    {
      id: 'bbq_nights',
      titleEn: 'Starlight BBQ & Bonfire Nights',
      titleAr: 'ليالي الشواء وسهرات النار تحت النجوم',
      descEn: 'Gather around the open bonfire for live barbecue, traditional music, and stargazing high above the cloud line.',
      descAr: 'اجتمع حول نار المخيم المفتوحة للمشويات الطازجة والموسيقى التقليدية ومراقبة النجوم فوق السحاب.',
      icon: Flame,
      image: './assets/hero.jpg'
    },
    {
      id: 'workshops',
      titleEn: 'Outdoor Retreats & Yoga Workshops',
      titleAr: 'ورش العمل وجلسات اليوغا الخارجية',
      descEn: 'Peaceful open-air spaces perfect for wellness retreats, group meditation, and outdoor firewood bonfire gatherings.',
      descAr: 'مساحات خارجية هادئة مثالية لسهرات النار والحطب والجلسات الشبابية والتأمل الجماعي.',
      icon: Music,
      image: './assets/tent_village.jpg'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-off-white">
      {/* Header */}
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
              <span>{i18n.language === 'ar' ? 'فعاليات ومناسبات خاصة' : 'PRIVATE EVENTS & CELEBRATIONS'}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-6 text-white">
              {i18n.language === 'ar' ? 'الفعاليات والمناسبات' : 'Private Events & Gatherings'}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              {i18n.language === 'ar' 
                ? 'اصنع ذكريات لا تُنسى في موقعنا الجبلي الساحر في القريات، عكار' 
                : 'Host unforgettable celebrations in our mountain retreat surrounded by nature.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventsList.map((evt, idx) => {
              const Icon = evt.icon;
              const title = i18n.language === 'ar' ? evt.titleAr : evt.titleEn;
              const desc = i18n.language === 'ar' ? evt.descAr : evt.descEn;

              return (
                <motion.div
                  key={evt.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full border border-border/80 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden bg-white flex flex-col justify-between group">
                    <div className="relative h-60 overflow-hidden">
                      <img src={evt.image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 left-4 bg-primary text-white p-3.5 rounded-2xl shadow-lg border border-white/20">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-dark-charcoal mb-3 group-hover:text-primary transition-colors">{title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
                      </div>
                      <div className="pt-4 border-t border-border/40">
                        <a 
                          href={generateWhatsAppLink(i18n.language, title, true)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full rounded-2xl py-6 bg-primary hover:bg-primary/90 text-white font-bold shadow-md flex items-center justify-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            {i18n.language === 'ar' ? 'احجز مناسبتك عبر واتساب' : 'Plan Event via WhatsApp'}
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PartyPopper, Flame, Music } from 'lucide-react';
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
      image: '/assets/house_1.png'
    },
    {
      id: 'bbq_nights',
      titleEn: 'Starlight BBQ & Bonfire Nights',
      titleAr: 'ليالي الشواء وسهرات النار تحت النجوم',
      descEn: 'Gather around the open bonfire for live barbecue, traditional music, and stargazing high above the cloud line.',
      descAr: 'اجتمع حول نار المخيم المفتوحة للمشويات الطازجة والموسيقى التقليدية ومراقبة النجوم فوق السحاب.',
      icon: Flame,
      image: '/assets/hero.jpg'
    },
    {
      id: 'workshops',
      titleEn: 'Outdoor Retreats & Yoga Workshops',
      titleAr: 'ورش العمل وجلسات اليوغا الخارجية',
      descEn: 'Peaceful open-air spaces perfect for wellness retreats, group meditation, and corporate team building.',
      descAr: 'مساحات خارجية هادئة مثالية لجلسات الاسترخاء واليوغا والتأمل الجماعي والفعاليات المؤسسية.',
      icon: Music,
      image: '/assets/house_1.png'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-off-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-forest-green text-warm-off-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white">
              {i18n.language === 'ar' ? 'الفعاليات والمناسبات' : 'Private Events & Gatherings'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl overflow-hidden bg-white flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img src={evt.image} alt={title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded-2xl shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="font-serif text-2xl font-bold text-dark-charcoal mb-3">{title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{desc}</p>
                      <a 
                        href={generateWhatsAppLink(i18n.language, title, true)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full rounded-full py-6 bg-primary hover:bg-primary/90 text-white font-medium">
                          {i18n.language === 'ar' ? 'احجز مناسبتك عبر واتساب' : 'Plan Event via WhatsApp'}
                        </Button>
                      </a>
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

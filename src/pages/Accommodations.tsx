import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Accommodations() {
  const { t, i18n } = useTranslation();

  const accommodations = [
    {
      id: 'stoneHouse',
      image: '/assets/house_1.png',
      features: ['Private Terrace', 'En-suite Bathroom', 'Valley View', 'Queen Bed']
    },
    {
      id: 'domeTent',
      image: '/assets/hero.jpg', // Placeholder since we only have house_1 and hero right now
      features: ['Panoramic Window', 'Comfortable Bedding', 'Stargazing', 'Seating Area']
    },
    {
      id: 'basicTent',
      image: '/assets/house_1.png', // Placeholder
      features: ['Shared Facilities', 'Essential Bedding', 'Nature Surroundings', 'Firepit Access']
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-forest-green text-warm-off-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white">{t('home.accommodations.title')}</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{t('home.accommodations.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* List Section */}
      <section className="py-24 bg-warm-off-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col gap-16">
            {accommodations.map((acc, index) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-2/5 h-72 md:h-auto relative overflow-hidden group">
                      <img 
                        src={acc.image} 
                        alt={t(`data.accommodations.${acc.id}.name`)} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-dark-charcoal text-sm font-semibold py-1 px-3 rounded-full">
                        {t('home.accommodations.available')}
                      </div>
                    </div>
                    
                    <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="font-serif text-3xl font-bold text-primary">{t(`data.accommodations.${acc.id}.name`)}</h2>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-dark-charcoal">${t(`data.accommodations.${acc.id}.price`)}</div>
                          <div className="text-sm text-muted-foreground">{t('home.accommodations.perNight')}</div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {t(`data.accommodations.${acc.id}.description`)}
                      </p>
                      
                      <div className="flex items-center gap-6 text-muted-foreground mb-8">
                        <div className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> {t(`data.accommodations.${acc.id}.guests`)}</div>
                        <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> {t('home.accommodations.hilltop')}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {acc.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-dark-charcoal">
                            <CheckCircle className="h-4 w-4 text-accent" /> {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-auto flex justify-end gap-4">
                        <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-border hover:bg-accent/5">View Gallery</Button>
                        <a href={generateWhatsAppLink(i18n.language, t(`data.accommodations.${acc.id}.name`), false)} target="_blank" rel="noopener noreferrer">
                          <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">{t('home.accommodations.book')}</Button>
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

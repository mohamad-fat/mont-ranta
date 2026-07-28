import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Packages() {
  const { t, i18n } = useTranslation();

  const packages = [
    {
      id: 'marriage',
      image: '/assets/hero.jpg', 
      features: ['Private Dining', 'Room Decoration', 'Sunset Hike', 'Breakfast in Bed']
    },
    {
      id: 'family',
      image: '/assets/house_1.png',
      features: ['Large Setup', 'Kid Activities', 'BBQ Night', 'Board Games']
    },
    {
      id: 'friends',
      image: '/assets/hero.jpg', 
      features: ['Clustered Tents', 'Shared Bonfire', 'Group Activities', 'Late Check-out']
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-dark-charcoal text-warm-off-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white">{t('home.packages.title')}</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{t('home.packages.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* List Section */}
      <section className="py-24 bg-white">
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
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl bg-warm-off-white flex flex-col group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={t(`data.packages.${pkg.id}.name`)} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-2xl font-bold text-white mb-1">{t(`data.packages.${pkg.id}.name`)}</h3>
                      <p className="text-white/90 font-medium">{t(`data.packages.${pkg.id}.price`)}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {t(`data.packages.${pkg.id}.description`)}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-dark-charcoal">
                          <Sparkles className="h-4 w-4 text-primary shrink-0" /> 
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <a href={generateWhatsAppLink(i18n.language, t(`data.packages.${pkg.id}.name`), true)} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full rounded-full py-6 text-base bg-dark-charcoal hover:bg-dark-charcoal/90 text-white shadow-md">
                          Enquire Now
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

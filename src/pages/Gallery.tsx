import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { i18n } = useTranslation();

  const galleryItems = [
    { id: 1, src: '/assets/hero.jpg', captionEn: 'Sunset over the Akkar Mountains', captionAr: 'غروب الشمس فوق جبال عكار' },
    { id: 2, src: '/assets/house_1.png', captionEn: 'Traditional Stone House', captionAr: 'بيت الحجر التقليدي' },
    { id: 3, src: '/assets/hero.jpg', captionEn: 'Stargazing at Night', captionAr: 'مراقبة النجوم في الليل' },
    { id: 4, src: '/assets/house_1.png', captionEn: 'Cozy Interior & Views', captionAr: 'إطلالات داخلية مريحة' },
    { id: 5, src: '/assets/hero.jpg', captionEn: 'Morning Fog in Qrayat', captionAr: 'ضباب الصباح في القريات' },
    { id: 6, src: '/assets/house_1.png', captionEn: 'Mountain Trails', captionAr: 'مسارات الجبال' }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-off-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-dark-charcoal text-warm-off-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white">
              {i18n.language === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {i18n.language === 'ar' 
                ? 'استكشف جمال الطبيعة في مونت رانتا، القريات' 
                : 'A visual journey through our peaceful retreat in Qrayat, Akkar.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer h-72"
              >
                <img 
                  src={item.src} 
                  alt={item.captionEn} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-serif text-lg font-medium">
                    {i18n.language === 'ar' ? item.captionAr : item.captionEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

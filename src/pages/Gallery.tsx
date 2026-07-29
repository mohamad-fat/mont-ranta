import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, Camera } from 'lucide-react';

export default function Gallery() {
  const { i18n } = useTranslation();

  const galleryItems = [
    { id: 1, src: './assets/hero.jpg', captionEn: 'Sunset over the Akkar Mountains', captionAr: 'غروب الشمس فوق جبال عكار' },
    { id: 2, src: './assets/stone_house.png', captionEn: 'Traditional Stone House', captionAr: 'بيت الحجر التقليدي' },
    { id: 3, src: './assets/basic_tent.png', captionEn: 'Stargazing Tent Camping', captionAr: 'مخيّم الخيام تحت النجوم' },
    { id: 4, src: './assets/about_us.jpg', captionEn: 'Cozy Interior & Views', captionAr: 'إطلالات داخلية مريحة' },
    { id: 5, src: './assets/special-tent.png', captionEn: 'Dome Glamping Tent', captionAr: 'خيمة القبة الفاخرة' },
    { id: 6, src: './assets/tent_village.jpg', captionEn: 'Mountain Trails & Campfire', captionAr: 'مسارات الجبال وسهرات النار' }
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
              <span>{i18n.language === 'ar' ? 'معرض الصور' : 'PHOTO GALLERY'}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-6 text-white">
              {i18n.language === 'ar' ? 'معرض صور مونت رانتا' : 'Mont-Ranta Gallery'}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              {i18n.language === 'ar' 
                ? 'استكشف جمال الطبيعة في مونت رانتا، القريات، عكار' 
                : 'A visual journey through our peaceful retreat in Qrayat, Akkar.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg border border-border/60 cursor-pointer h-80"
              >
                <img 
                  src={item.src} 
                  alt={item.captionEn} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-bold mb-1">
                    <Camera className="w-4 h-4" />
                    <span>Mont-Ranta</span>
                  </div>
                  <p className="text-white font-serif text-xl font-bold">
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

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mountain, Trees, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-off-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest-green text-warm-off-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white">
              {i18n.language === 'ar' ? 'قصتنا في مونت رانتا' : 'Our Story at Mont-Ranta'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {i18n.language === 'ar'
                ? 'ملاذ جبلي هادئ مستوحى من قمم عكار الشامخة'
                : 'A peaceful mountain retreat inspired by the majestic peaks of Akkar.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="./assets/about_us.jpg" alt="Mont-Ranta story" className="rounded-3xl shadow-xl w-full h-80 object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-3xl font-bold text-dark-charcoal mb-4">
                {i18n.language === 'ar' ? 'بين السحاب والطبيعة' : 'Between Clouds & Nature'}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {i18n.language === 'ar'
                  ? 'يقع مونت رانتا في بلدية القريات بمحافظة عكار، شمال لبنان. تم تسمية المشروع إلهاماً من جبل مجاور، ليكون وجهة تجمع بين الفخامة والبساطة وسط الطبيعة العذراء.'
                  : 'Mont-Ranta is located in Qrayat, Akkar, North Lebanon. Named after a nearby mountain peak, our retreat was founded to connect people with nature in comfort and tranquility.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {i18n.language === 'ar'
                  ? 'سواء كنت تبحث عن ليلة هادئة في بيوتنا الحجرية أو تجربة تخييم فريدة تحت النجوم، نضمن لك ولعائلتك تجربة استثنائية.'
                  : 'Whether you prefer a traditional stone house stay or cozy stargazing tents, we offer an eco-friendly escape designed for rest and regeneration.'}
              </p>
            </motion.div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center pt-8 border-t border-gray-200">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <Mountain className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark-charcoal mb-1">{i18n.language === 'ar' ? 'ارتفاع شاهق' : 'High Elevation'}</h3>
              <p className="text-xs text-muted-foreground">{i18n.language === 'ar' ? 'إطلالة بانورامية رائعة' : 'Breathtaking high altitude views'}</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <Trees className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark-charcoal mb-1">{i18n.language === 'ar' ? 'بيئة طبيعية' : 'Pure Eco-Living'}</h3>
              <p className="text-xs text-muted-foreground">{i18n.language === 'ar' ? 'محاط بغابات الصنوبر' : 'Surrounded by pine trees'}</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark-charcoal mb-1">{i18n.language === 'ar' ? 'خصوصية وأمان' : 'Private & Secure'}</h3>
              <p className="text-xs text-muted-foreground">{i18n.language === 'ar' ? 'مساحات خاصة للعائلات' : 'Private family spaces'}</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark-charcoal mb-1">{i18n.language === 'ar' ? 'ضيافة دافئة' : 'Warm Hospitality'}</h3>
              <p className="text-xs text-muted-foreground">{i18n.language === 'ar' ? 'خدمة متميزة ترحب بك' : 'Friendly local service'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

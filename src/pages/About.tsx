import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mountain, Trees, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col w-full min-h-screen bg-warm-off-white">
      {/* Hero */}
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
              <span>{i18n.language === 'ar' ? 'عن منتجع مونت رانتا' : 'ABOUT MONT-RANTA'}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-6 text-white">
              {i18n.language === 'ar' ? 'قصتنا في مونت رانتا' : 'Our Story at Mont-Ranta'}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              {i18n.language === 'ar'
                ? 'ملاذ جبلي هادئ مستوحى من قمم عكار الشامخة'
                : 'A peaceful mountain retreat inspired by the majestic peaks of Akkar.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="./assets/about_us.jpg" alt="Mont-Ranta story" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 glass-dark rounded-2xl border border-white/20">
                  <p className="font-serif text-base font-bold">{i18n.language === 'ar' ? 'القريات، عكار، شمال لبنان' : 'Qrayat, Akkar, North Lebanon'}</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-charcoal">
                {i18n.language === 'ar' ? 'بين السحاب والطبيعة العذراء' : 'Between Clouds & Pristine Nature'}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {i18n.language === 'ar'
                  ? 'يقع مونت رانتا في بلدية القريات بمحافظة عكار، شمال لبنان. تم تسمية المشروع إلهاماً من جبل مجاور، ليكون وجهة تجمع بين الفخامة والبساطة وسط الطبيعة العذراء.'
                  : 'Mont-Ranta is located in Qrayat, Akkar, North Lebanon. Named after a nearby mountain peak, our retreat was founded to connect people with nature in comfort and tranquility.'}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                {i18n.language === 'ar'
                  ? 'سواء كنت تبحث عن ليلة هادئة في بيوتنا الحجرية أو تجربة تخييم فريدة تحت النجوم، نضمن لك ولعائلتك تجربة استثنائية.'
                  : 'Whether you prefer a traditional stone house stay or cozy stargazing tents, we offer an eco-friendly escape designed for rest and regeneration.'}
              </p>
            </motion.div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center pt-8 border-t border-border/60">
            <div className="p-6 bg-white rounded-3xl shadow-md border border-border/60 hover:shadow-xl transition-all">
              <div className="p-3 bg-primary/10 rounded-2xl w-fit mx-auto mb-4 text-primary">
                <Mountain className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-dark-charcoal text-lg mb-1">{i18n.language === 'ar' ? 'ارتفاع شاهق' : 'High Elevation'}</h3>
              <p className="text-xs text-muted-foreground">{i18n.language === 'ar' ? 'إطلالة بانورامية رائعة فوق السحاب' : 'Breathtaking high altitude views'}</p>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-md border border-border/60 hover:shadow-xl transition-all">
              <div className="p-3 bg-primary/10 rounded-2xl w-fit mx-auto mb-4 text-primary">
                <Trees className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-dark-charcoal text-lg mb-1">{i18n.language === 'ar' ? 'بيئة طبيعية' : 'Pure Eco-Living'}</h3>
              <p className="text-xs text-muted-foreground">{i18n.language === 'ar' ? 'محاط بغابات الصنوبر العتيقة' : 'Surrounded by pine trees'}</p>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-md border border-border/60 hover:shadow-xl transition-all">
              <div className="p-3 bg-primary/10 rounded-2xl w-fit mx-auto mb-4 text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-dark-charcoal text-lg mb-1">{i18n.language === 'ar' ? 'خصوصية وأمان' : 'Private & Secure'}</h3>
              <p className="text-xs text-muted-foreground">{i18n.language === 'ar' ? 'مساحات خاصة مريحة للعائلات' : 'Private family spaces'}</p>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-md border border-border/60 hover:shadow-xl transition-all">
              <div className="p-3 bg-primary/10 rounded-2xl w-fit mx-auto mb-4 text-primary">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-dark-charcoal text-lg mb-1">{i18n.language === 'ar' ? 'ضيافة دافئة' : 'Warm Hospitality'}</h3>
              <p className="text-xs text-muted-foreground">{i18n.language === 'ar' ? 'خدمة متميزة ترحب بك دائماً' : 'Friendly local service'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

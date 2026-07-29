import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Contact() {
  const { i18n } = useTranslation();
  const mapsUrl = "https://maps.app.goo.gl/1cVmgqTnEGzrV6n37";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13155.603387810304!2d36.1957936!3d34.4800293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15222ef23b7c89f5%3A0xb30e6206ebefd8a!2sEl%20Qrayat%2C%20Lebanon!5e0!3m2!1sen!2slb!4v1700000000000!5m2!1sen!2slb";

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
              <span>{i18n.language === 'ar' ? 'تواصل معنا' : 'GET IN TOUCH'}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-6 text-white">
              {i18n.language === 'ar' ? 'تواصل معنا وموقعنا' : 'Contact & Location'}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              {i18n.language === 'ar' 
                ? 'نحن هنا لمساعدتك في الوصول إلى موقعنا الساحر في القريات، عكار' 
                : 'We are here to guide you to our mountain retreat in Qrayat, Akkar.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-border/80 shadow-xl space-y-8 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-3xl font-bold text-dark-charcoal mb-6">
                  {i18n.language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
                </h2>

                <div className="space-y-6 text-muted-foreground">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-warm-off-white border border-border/50">
                    <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-charcoal text-base mb-0.5">{i18n.language === 'ar' ? 'الموقع الجغرافي' : 'Location'}</h3>
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm flex items-center gap-1 font-medium text-primary">
                        {i18n.language === 'ar' ? 'القريات، عكار، شمال لبنان' : 'Qrayat, Akkar, North Lebanon'}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-warm-off-white border border-border/50">
                    <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-charcoal text-base mb-0.5">{i18n.language === 'ar' ? 'الهاتف / واتساب' : 'Phone / WhatsApp'}</h3>
                      <a href="tel:+96171752717" dir="ltr" className="text-left block hover:text-primary transition-colors font-semibold text-dark-charcoal text-base">
                        +961 71 752 717
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-warm-off-white border border-border/50">
                    <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-charcoal text-base mb-0.5">{i18n.language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h3>
                      <p className="text-sm font-medium text-dark-charcoal">info@mont-ranta.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-warm-off-white border border-border/50">
                    <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-charcoal text-base mb-0.5">{i18n.language === 'ar' ? 'ساعات الاستقبال' : 'Reception Hours'}</h3>
                      <p className="text-sm font-medium">{i18n.language === 'ar' ? 'يومياً: 8:00 صباحاً - 10:00 مساءً' : 'Daily: 8:00 AM - 10:00 PM'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/40">
                <a 
                  href={generateWhatsAppLink(i18n.language, 'General Inquiry')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full py-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105">
                    <MessageSquare className="w-5 h-5" />
                    {i18n.language === 'ar' ? 'تحدث معنا مباشرة عبر واتساب' : 'Chat on WhatsApp Now'}
                  </Button>
                </a>
              </div>
            </div>

            {/* Live Map Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-border/80 shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-3xl font-bold text-dark-charcoal mb-2">
                  {i18n.language === 'ar' ? 'خريطة الموقع التفاعلية' : 'Live Interactive Map'}
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  {i18n.language === 'ar' 
                    ? 'استكشف موقع القريات في عكار مباشرة على الخريطة التفاعلية أدناه.' 
                    : 'Explore the location of Qrayat in Akkar directly on the interactive map below.'}
                </p>
              </div>

              {/* Embedded Google Map Iframe */}
              <div className="w-full h-80 rounded-2xl overflow-hidden border border-border/80 shadow-inner mb-6 relative">
                <iframe
                  title="Mont-Ranta Qrayat Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl"
                ></iframe>
              </div>

              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl shadow-md transition-transform hover:scale-105 text-base"
              >
                <MapPin className="w-5 h-5" />
                {i18n.language === 'ar' ? 'فتح الموقع المباشر في Google Maps' : 'Open Direct Pin in Google Maps'}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

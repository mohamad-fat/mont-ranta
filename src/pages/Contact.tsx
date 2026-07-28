import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Contact() {
  const { i18n } = useTranslation();

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
              {i18n.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {i18n.language === 'ar' 
                ? 'نحن هنا لمساعدتك في التخطيط لإقامتك القادمة' 
                : 'We are here to help you plan your next mountain getaway.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg space-y-8">
              <h2 className="font-serif text-3xl font-bold text-dark-charcoal">
                {i18n.language === 'ar' ? 'معلومات الاتصال' : 'Get in Touch'}
              </h2>

              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-charcoal">{i18n.language === 'ar' ? 'الموقع' : 'Location'}</h3>
                    <p>{i18n.language === 'ar' ? 'القريات، عكار، شمال لبنان' : 'Qrayat, Akkar, North Lebanon'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-charcoal">{i18n.language === 'ar' ? 'الهاتف / واتساب' : 'Phone / WhatsApp'}</h3>
                    <p dir="ltr" className="text-left">+961 70 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-charcoal">{i18n.language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h3>
                    <p>info@mont-ranta.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-charcoal">{i18n.language === 'ar' ? 'ساعات الاستقبال' : 'Reception Hours'}</h3>
                    <p>{i18n.language === 'ar' ? 'يومياً: 8:00 صباحاً - 10:00 مساءً' : 'Daily: 8:00 AM - 10:00 PM'}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a 
                  href={generateWhatsAppLink(i18n.language, 'General Inquiry')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full py-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg">
                    <MessageSquare className="w-5 h-5" />
                    {i18n.language === 'ar' ? 'تحدث معنا مباشرة عبر واتساب' : 'Chat on WhatsApp Now'}
                  </Button>
                </a>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-3xl font-bold text-dark-charcoal mb-4">
                  {i18n.language === 'ar' ? 'خريطة الموقع' : 'Location Map'}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {i18n.language === 'ar' 
                    ? 'يقع مونت رانتا في جبال القريات الخلابة، بعيداً عن صخب المدينة.' 
                    : 'Located high in the Qrayat mountains of Akkar, offering breathtaking wilderness views.'}
                </p>
              </div>

              {/* Styled Map Box */}
              <div className="w-full h-64 bg-forest-green/10 rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-forest-green/20">
                <MapPin className="w-12 h-12 text-primary mb-3 animate-bounce" />
                <h3 className="font-bold text-primary text-lg mb-1">Mont-Ranta Retreat</h3>
                <p className="text-sm text-muted-foreground mb-4">Qrayat, Akkar, Lebanon</p>
                <a 
                  href="https://maps.google.com/?q=Qrayat+Akkar+Lebanon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs bg-primary text-white font-medium px-4 py-2 rounded-full hover:bg-primary/90"
                >
                  {i18n.language === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

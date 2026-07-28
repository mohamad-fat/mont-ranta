export const WHATSAPP_NUMBER = '96170123456';

export const generateWhatsAppLink = (language: string, itemName: string, isPackage: boolean = false) => {
  let message = '';
  
  if (language === 'ar') {
    message = `مرحباً، أود الاستفسار عن حجز ${isPackage ? 'باقة' : ''} "${itemName}". هل يمكنك تزويدي بمزيد من التفاصيل حول التوفر؟`;
  } else {
    message = `Hello, I would like to inquire about booking the "${itemName}" ${isPackage ? 'package' : 'accommodation'}. Could you provide me with more details regarding availability?`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const WHATSAPP_NUMBER = "223XXXXXXXX";
export const PHONE_NUMBER = "+223 XX XX XX XX";
export const INSTAGRAM_URL = "https://www.instagram.com/villa_soudan/";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Villa%20Soudan%20Bamako";

export const reservationMessage =
  "Bonjour Villa Soudan, je souhaite faire une réservation.";

export const whatsappUrl = (message = reservationMessage) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

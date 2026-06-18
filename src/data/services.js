import {
  BedDouble,
  ChefHat,
  Martini,
  Waves,
  PartyPopper,
  Bike,
} from "lucide-react";

import hotelImage from "../assets/images/service-hotel.png";
import restaurantImage from "../assets/images/restaurant.png";
import barImage from "../assets/images/bar.png";
import poolImage from "../assets/images/pool.png";
import eventImage from "../assets/images/event.png";
import deliveryImage from "../assets/images/delivery.png";

export const services = [
  {
    title: "Hôtel",
    description: "Des chambres calmes, climatisées et pensées pour un séjour confortable à Bamako.",
    image: hotelImage,
    icon: BedDouble,
    anchor: "#hotel",
  },
  {
    title: "Restaurant",
    description: "Une table généreuse entre saveurs africaines, cuisine moderne et service attentionné.",
    image: restaurantImage,
    icon: ChefHat,
    anchor: "#restaurant",
  },
  {
    title: "Bar",
    description: "Cocktails, boissons fraîches et ambiance élégante pour vos afterworks et soirées.",
    image: barImage,
    icon: Martini,
    anchor: "#piscine-bar",
  },
  {
    title: "Piscine",
    description: "Un espace détente visuel et paisible pour profiter du soleil, en famille ou entre amis.",
    image: poolImage,
    icon: Waves,
    anchor: "#piscine-bar",
  },
  {
    title: "Événements",
    description: "Anniversaires, dîners privés, cérémonies et rendez-vous professionnels sur mesure.",
    image: eventImage,
    icon: PartyPopper,
    anchor: "#evenements",
  },
  {
    title: "Livraison",
    description: "Vos plats préférés disponibles à la commande avec une prise en charge rapide.",
    image: deliveryImage,
    icon: Bike,
    anchor: "#restaurant",
  },
];

import standardImage from "../assets/images/room-standard.png";
import comfortImage from "../assets/images/room-comfort.png";
import suiteImage from "../assets/images/room-suite.png";

export const rooms = [
  {
    title: "Chambre Standard",
    price: "À partir de XX 000 FCFA",
    image: standardImage,
    features: ["Climatisation", "Wi-Fi", "Douche privée", "Accueil 24h/24"],
  },
  {
    title: "Chambre Confort",
    price: "À partir de XX 000 FCFA",
    image: comfortImage,
    features: ["Lit queen size", "Espace bureau", "TV", "Service client"],
  },
  {
    title: "Suite Premium",
    price: "À partir de XX 000 FCFA",
    image: suiteImage,
    features: ["Salon privé", "Ambiance calme", "Sécurité", "Service prioritaire"],
  },
];

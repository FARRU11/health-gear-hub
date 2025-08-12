import stethoscope from "@/assets/prod-stethoscope.jpg";
import bpMonitor from "@/assets/prod-bp-monitor.jpg";
import thermometer from "@/assets/prod-thermometer.jpg";
import nebulizer from "@/assets/prod-nebulizer.jpg";
import wheelchair from "@/assets/prod-wheelchair.jpg";
import oximeter from "@/assets/prod-oximeter.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  rating: number;
  category: "Monitoring" | "Respiratory" | "Mobility" | "Diagnostics";
  shortDesc: string;
  longDesc: string;
  image: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "digital-stethoscope",
    name: "Digital Stethoscope Pro",
    price: 179.0,
    rating: 4.7,
    category: "Diagnostics",
    shortDesc: "High-fidelity auscultation with noise reduction.",
    longDesc:
      "The Digital Stethoscope Pro delivers crystal-clear heart and lung sounds with advanced noise cancellation and comfortable ergonomics.",
    image: stethoscope,
    stock: 24,
  },
  {
    id: "p2",
    slug: "blood-pressure-monitor",
    name: "Auto BP Monitor X200",
    price: 69.0,
    rating: 4.6,
    category: "Monitoring",
    shortDesc: "Accurate readings with large, easy-to-read display.",
    longDesc:
      "The X200 provides clinically validated blood pressure measurements with a comfortable cuff and one-touch operation.",
    image: bpMonitor,
    stock: 50,
  },
  {
    id: "p3",
    slug: "infrared-thermometer",
    name: "Contactless Thermometer IR-5",
    price: 39.0,
    rating: 4.5,
    category: "Diagnostics",
    shortDesc: "Instant forehead readings with fever alert.",
    longDesc:
      "Get fast, accurate, and hygienic temperature measurements for all ages using advanced infrared sensors.",
    image: thermometer,
    stock: 100,
  },
  {
    id: "p4",
    slug: "portable-nebulizer",
    name: "Portable Nebulizer AirGo",
    price: 89.0,
    rating: 4.4,
    category: "Respiratory",
    shortDesc: "Compact design for effective medication delivery.",
    longDesc:
      "The AirGo nebulizer ensures optimal particle size for efficient respiratory therapy at home or on the go.",
    image: nebulizer,
    stock: 40,
  },
  {
    id: "p5",
    slug: "foldable-wheelchair",
    name: "Foldable Wheelchair Lite",
    price: 249.0,
    rating: 4.3,
    category: "Mobility",
    shortDesc: "Lightweight frame with comfortable seating.",
    longDesc:
      "An ultra-light, durable wheelchair with quick-release wheels and ergonomic hand rims for smooth movement.",
    image: wheelchair,
    stock: 12,
  },
  {
    id: "p6",
    slug: "pulse-oximeter",
    name: "Pulse Oximeter Fingertip O2+",
    price: 29.0,
    rating: 4.6,
    category: "Monitoring",
    shortDesc: "Precise SpO2 and pulse rate in seconds.",
    longDesc:
      "Track oxygen saturation and pulse rate with a bright OLED display and auto power-off to save battery.",
    image: oximeter,
    stock: 150,
  },
];

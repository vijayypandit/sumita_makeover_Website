import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const GALLERY_IMAGES = [
  {
    // beautiful traditional indian bridal makeup close up
    src: "https://images.unsplash.com/photo-1595956553066-624a95e8d528?w=800&q=80",
    title: "Royal Red Theme",
    location: "Delhi, India"
  },
  {
    // soft elegant makeup close up beauty portrait
    src: "https://images.unsplash.com/photo-1583939411023-14783179e581?w=800&q=80",
    title: "Dewy Glass Skin",
    location: "London, UK"
  },
  {
    // graceful bride soft glam makeup look
    src: "https://images.unsplash.com/photo-1606136968306-bac2b892f392?w=800&q=80",
    title: "Classic White Gown",
    location: "London, UK"
  },
  {
    // dramatic editorial fashion makeup look
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    title: "Editorial Bold",
    location: "Mumbai, India"
  },
  {
    // glowing bronze party makeup
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",
    title: "Sangeet Glamour",
    location: "Janakpur, Nepal"
  },
  {
    // subtle nude makeup fresh face beauty
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
    title: "Mehendi Morning",
    location: "Delhi, India"
  }
];

export default function Gallery() {
  return (
    <div className="w-full pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading 
        title="Portfolio" 
        subtitle="The Brides" 
        className="mb-16"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {GALLERY_IMAGES.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-sm bg-muted aspect-[4/5] shadow-md hover:shadow-xl transition-shadow"
          >
            <img 
              src={img.src} 
              alt={img.title} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <motion.h3 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-white font-serif text-2xl"
              >
                {img.title}
              </motion.h3>
              <motion.span 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-primary-foreground/80 text-xs tracking-[0.2em] uppercase mt-1"
              >
                {img.location}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

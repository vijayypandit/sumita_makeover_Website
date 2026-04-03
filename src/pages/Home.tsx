import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Star, Award, Globe, Heart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

const SERVICES = [
  {
    name: "Simple Makeup",
    price: "₹1,500",
    desc: "Flawless everyday and occasion-ready makeup with premium products.",
    features: ["Basic makeup application", "Foundation & blending", "Setting spray"],
    note: "Hair & lenses not included",
  },
  {
    name: "Party Makeup",
    price: "₹2,500",
    desc: "Glam party look that keeps you shining from dusk till dawn.",
    features: ["Makeup + Hair Styling", "Contact lenses included", "Premium products"],
    note: null,
    highlight: true,
  },
  {
    name: "HD Party Makeup",
    price: "₹3,500",
    desc: "Camera-ready high definition look that lasts the entire day.",
    features: ["HD makeup + Hair", "12-hour long lasting", "Contact lenses included"],
    note: null,
  },
  {
    name: "Advance Party Makeup",
    price: "₹4,500",
    desc: "The ultimate premium experience with high-end products and styling.",
    features: ["Premium HD makeup", "Advanced hair styling", "Long-wear formula"],
    note: null,
  },
];

const GALLERY_PREVIEW = [
  {
    src: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=800&q=80",
    title: "Bridal Glamour",
    location: "London, UK",
  },
  {
    src: "https://images.unsplash.com/photo-1520975913690-60720bd12cff?w=800&q=80",
    title: "Soft Bridal Glow",
    location: "Delhi, India",
  },
  {
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80",
    title: "Classic Bridal",
    location: "Mumbai, India",
  },
  {
    src: "https://images.unsplash.com/photo-1505210669842-66f12a4f2222?w=800&q=80",
    title: "Rose Gold Bridal",
    location: "Jaipur, India",
  },
];

const STATS = [
  { icon: Award, value: "UK", label: "International London Beauty School Certified" },
  { icon: Star, value: "4+", label: "Years Experience" },
  { icon: Heart, value: "50+", label: "Happy Clients" },
  { icon: Globe, value: "4+", label: "Cities Served" },
];

export default function Home() {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const scrollFeatured = (dir: "left" | "right") => {
    if (!galleryRef.current) return;
    const step = galleryRef.current.clientWidth * 0.8;
    galleryRef.current.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`/images/hero-bg.png`}
            alt="Elegant background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/55 to-background"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-slate-900/75 backdrop-blur-sm border border-slate-700 rounded-full px-5 py-2 mb-8 shadow-lg shadow-slate-900/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
            <span className="text-accent font-semibold text-xs tracking-[0.22em] uppercase">
              UK international London beauty school Certified • 4+ Years Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.05] mb-6"
          >
            Your Beauty, <br />
            <span className="italic text-primary">Elevated.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed"
          >
            Professional bridal and party makeup artistry by Sumita — serving Delhi, Patna, Janakpur, Kathmandu and beyond. Every look crafted with passion and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-10 font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-shadow text-base">
                Book Your Appointment
              </Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 font-semibold border-primary/40 text-primary hover:bg-rose-50 text-base">
                View Portfolio <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="h-10 w-6 rounded-full border-2 border-primary/30 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-gradient-to-r from-slate-900 to-slate-800 border-y border-slate-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="h-10 w-10 bg-accent/15 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-serif text-xl font-bold text-foreground">{value}</p>
                  <p className="text-muted-foreground text-xs leading-tight">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading title="Featured Work" subtitle="Portfolio" align="left" />
            <Link
              href="/gallery"
              className="flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 uppercase tracking-widest text-xs"
            >
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative">
            <div className="flex items-center justify-end mb-4 gap-2">
              <button
                onClick={() => scrollFeatured("left")}
                className="px-3 py-1 text-xs uppercase tracking-widest font-semibold text-white bg-slate-800/70 rounded-md hover:bg-slate-800"
              >
                ◀
              </button>
              <button
                onClick={() => scrollFeatured("right")}
                className="px-3 py-1 text-xs uppercase tracking-widest font-semibold text-white bg-slate-800/70 rounded-md hover:bg-slate-800"
              >
                ▶
              </button>
            </div>
            <div ref={galleryRef} className="flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar">
              {GALLERY_PREVIEW.map((img, i) => (
                <motion.div
                  key={img.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-muted shadow-md hover:shadow-xl transition-all duration-500 h-64 min-w-[18rem] shrink-0"
                >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-7">
                  <span className="text-white font-serif text-xl">{img.title}</span>
                  <span className="text-white/70 text-xs tracking-widest uppercase mt-1">{img.location}</span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </section>

      {/* Services / Pricing Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading title="Services & Pricing" subtitle="What We Offer" />
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
              Enhancing your beauty for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-6 border transition-all duration-300 shadow-lg hover:shadow-2xl ${
                  svc.highlight
                    ? "bg-gradient-to-br from-rose-600 via-fuchsia-500 to-pink-500 text-white border-pink-300 shadow-pink-500/40"
                    : "bg-gradient-to-br from-[#3d1023] via-[#591a34] to-[#77214a] text-white border-[#8b3b63] hover:border-[#c7629b]"
                }`}
              >
                {svc.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg shadow-pink-500/40">
                    Popular
                  </span>
                )}
                <h3 className="font-serif text-lg mb-1 text-white">
                  {svc.name}
                </h3>
                <p className="text-xs mb-5 text-white/80">
                  {svc.desc}
                </p>
                <div className="font-serif text-3xl font-bold mb-5 text-white">
                  {svc.price}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check size={13} className="text-white" strokeWidth={3} />
                      <span className="text-xs text-white/85">{f}</span>
                    </li>
                  ))}
                  {svc.note && (
                    <li className="text-xs mt-1 text-white/60">
                      * {svc.note}
                    </li>
                  )}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full text-center py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-200 ${
                    svc.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline underline-offset-4">
              View Full Pricing & Terms <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-4xl text-foreground leading-tight mb-8 italic"
          >
            "Sumita made me feel like the most beautiful version of myself. The makeup lasted flawlessly through the entire 14-hour wedding day. Absolute magic!"
          </motion.blockquote>
          <p className="uppercase tracking-[0.3em] text-xs font-bold text-primary">
            Sneha K. — Delhi Bride
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1015] to-[#2a1520] rounded-3xl shadow-2xl shadow-primary/20 p-8 md:p-12 text-center"
          >
            <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-3">Ready to Glow?</p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
              Let's Create Your Perfect Look
            </h2>
            <p className="text-white/55 mb-10 max-w-md mx-auto text-sm leading-relaxed">
              Whether it's your big wedding day or a special evening out, Sumita is here to make you shine.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-12 font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-shadow text-base">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

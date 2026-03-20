import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Info, Clock, MapPin, CreditCard, AlertCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const SERVICES = [
  {
    name: "Simple Makeup",
    price: "₹1,500",
    tagline: "Effortlessly Beautiful",
    inclusions: ["Basic makeup application", "Foundation & blending", "Eye & lip makeup", "Setting spray"],
    exclusions: ["Hair styling not included", "Contact lenses not included"],
    badge: null,
    color: "from-slate-900 via-slate-800 to-slate-900",
    border: "border-slate-700",
  },
  {
    name: "Party Makeup",
    price: "₹2,500",
    tagline: "Glow All Night Long",
    inclusions: ["Full makeup application", "Hair styling included", "Contact lenses included", "Premium products used"],
    exclusions: [],
    badge: "Popular",
    color: "from-slate-900 via-fuchsia-700 to-slate-900",
    border: "border-fuchsia-500",
  },
  {
    name: "HD Party Makeup",
    price: "₹3,500",
    tagline: "Camera-Ready Perfection",
    inclusions: ["High Definition makeup", "Hair styling included", "Contact lenses included", "12-Hour long lasting formula", "Skin prep & primer"],
    exclusions: [],
    badge: "Best Value",
    color: "from-slate-900 via-amber-700 to-slate-900",
    border: "border-amber-500",
  },
  {
    name: "Advance Party Makeup",
    price: "₹4,500",
    tagline: "The Ultimate Glam Experience",
    inclusions: ["Premium HD makeup", "Advanced hair styling", "Contact lenses included", "Long-wear formula", "High-end product range", "Full skin prep & contouring"],
    exclusions: [],
    badge: "Premium",
    color: "from-slate-900 via-rose-700 to-slate-900",
    border: "border-rose-500",
  },
];

const TERMS = [
  {
    icon: CreditCard,
    title: "Advance Payment",
    desc: "A 50% non-refundable advance is required to confirm your booking slot.",
  },
  {
    icon: MapPin,
    title: "Travel Charges",
    desc: "Travel is free within a 5km radius. Additional charges apply based on actual distance for other Delhi/NCR locations.",
  },
  {
    icon: Clock,
    title: "Early Morning Fee",
    desc: "Appointments scheduled before 7:00 AM will incur a small convenience fee.",
  },
  {
    icon: AlertCircle,
    title: "Cancellation Policy",
    desc: "Please notify at least 48 hours in advance to reschedule your appointment.",
  },
];

const BADGE_STYLES: Record<string, string> = {
  Popular: "bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200",
  "Best Value": "bg-amber-100 text-amber-700 border border-amber-200",
  Premium: "bg-rose-100 text-rose-700 border border-rose-200",
};

export default function Services() {
  return (
    <div className="w-full pt-28 pb-24">
      {/* Page Title Banner */}
      <div className="relative py-14 mb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,82,224,0.20),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(255,136,199,0.18),_transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center backdrop-blur-sm bg-slate-900/30 border border-white/20 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Offer</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Services & Pricing</h1>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Enhancing your beauty for every occasion.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex flex-col rounded-3xl bg-gradient-to-br ${svc.color} border ${svc.border} p-7 shadow-sm hover:shadow-xl transition-shadow duration-300`}
            >
              {svc.badge && (
                <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${BADGE_STYLES[svc.badge]}`}>
                  {svc.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-xl text-foreground mb-1">{svc.name}</h3>
                <p className="text-muted-foreground text-xs italic">{svc.tagline}</p>
              </div>

              <div className="mb-6">
                <span className="font-serif text-4xl font-bold text-foreground">{svc.price}</span>
                <span className="text-muted-foreground text-xs ml-1">/ session</span>
              </div>

              <div className="flex-1 space-y-2.5 mb-8 bg-slate-900/50 p-4 rounded-2xl border border-white/10">
                {svc.inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="h-4.5 w-4.5 bg-primary/25 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
                {svc.exclusions.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 opacity-80">
                    <div className="h-4.5 w-4.5 bg-muted rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Info size={10} className="text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="w-full text-center py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all duration-200 hover:shadow-md shadow-primary/20 flex items-center justify-center gap-2"
              >
                Book Now <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeading title="Quick Comparison" subtitle="At a Glance" className="mb-10" />
          <div className="overflow-x-auto rounded-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] bg-slate-900/40">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800/70 to-slate-700/60">
                  <th className="text-left py-4 px-6 font-semibold text-white">Service Type</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Price</th>
                  <th className="text-left py-4 px-4 font-semibold text-white">Key Inclusions</th>
                  <th className="text-left py-4 px-4 font-semibold text-white">Special Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  { name: "Simple Makeup", price: "₹1,500", key: "Basic Makeup application", special: "Excludes hair & lenses" },
                  { name: "Party Makeup", price: "₹2,500", key: "Makeup + Hair Styling", special: "Includes Contact Lenses" },
                  { name: "HD Party Makeup", price: "₹3,500", key: "High Definition Makeup + Hair", special: "12-Hour Long Lasting & Lenses" },
                  { name: "Advance Party Makeup", price: "₹4,500", key: "Premium Makeup + Advanced Hair", special: "Long-wear & High-end styling" },
                ].map((row, i) => (
                  <tr key={i} className="bg-slate-900/30 hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-white">{row.name}</td>
                    <td className="py-4 px-4 text-center font-bold text-primary">{row.price}</td>
                    <td className="py-4 px-4 text-slate-300">{row.key}</td>
                    <td className="py-4 px-4 text-slate-300">{row.special}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Booking Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1015] to-[#2a1520] rounded-3xl p-10 md:p-14 text-white"
        >
          <div className="text-center mb-10">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-2">Important</p>
            <h2 className="font-serif text-3xl text-white">Booking Terms & Conditions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TERMS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-colors"
              >
                <div className="h-10 w-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              Book Your Appointment <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

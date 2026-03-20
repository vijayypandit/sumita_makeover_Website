import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle, Copy } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+9779800000000",
    href: "tel:+9779800000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@sumitamakeover.com",
    href: "mailto:hello@sumitamakeover.com",
  },
  {
    icon: MapPin,
    label: "Locations",
    value: "Delhi, India  •  Janakpur, Nepal  •  Available Worldwide",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM\nSundays: Events Only",
    href: null,
  },
];

const SERVICES = [
  "Simple Makeup (₹1,500)",
  "Party Makeup (₹2,500)",
  "HD Party Makeup (₹3,500)",
  "Advance Party Makeup (₹4,500)",
  "Other / Custom",
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1500);
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText("+9779800000000");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Clipboard copy failed", error);
      setCopied(false);
    }
  };

  return (
    <div className="w-full pt-28 pb-24">
      {/* Page Title Banner */}
      <div className="relative py-14 mb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,136,199,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(138,82,224,0.22),_transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-3">Reach Out</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">Get in Touch</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a1015] to-[#2a1520] rounded-3xl p-10 md:p-12 text-white"
          >
            <h3 className="font-serif text-3xl text-white mb-2">Contact Details</h3>
            <p className="text-white/50 text-sm mb-10">We'd love to hear from you. Reach out through any channel below.</p>

            <div className="space-y-7">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="h-11 w-11 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={19} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-1">{label}</p>
                    {href ? (
                      <div className="flex items-center gap-2">
                        <a href={href} className="text-white hover:text-primary transition-colors text-sm font-medium">
                          {value}
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyPhone}
                          className="inline-flex items-center gap-1 px-2 py-0.5 border border-white/30 rounded-md text-xs hover:bg-white/10 transition"
                          aria-label="Copy phone number"
                        >
                          <Copy size={12} />
                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                    ) : (
                      <p className="text-white/80 text-sm whitespace-pre-line">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/9779800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center gap-3 bg-[#25D366]/15 border border-[#25D366]/30 rounded-2xl px-5 py-4 hover:bg-[#25D366]/25 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#25D366" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <div>
                <p className="text-[#25D366] text-sm font-semibold">Chat on WhatsApp</p>
                <p className="text-white/40 text-xs">Quick response guaranteed</p>
              </div>
            </a>
          </motion.div>

          {/* Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/12 backdrop-blur-lg rounded-3xl p-10 md:p-12 border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
          >
            <h3 className="font-serif text-3xl text-foreground mb-2">Send an Inquiry</h3>
            <p className="text-muted-foreground text-sm mb-8">Fill in the form and Sumita will get back to you within 24 hours.</p>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded-2xl text-sm flex items-center gap-3"
              >
                <CheckCircle size={18} className="text-green-600 shrink-0" />
                Thank you! Your inquiry has been sent. Sumita will get back to you within 24 hours.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#190d1d]/65 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#190d1d]/65 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-[#190d1d]/65 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Event Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full bg-[#190d1d]/65 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Service Required *</label>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-[#190d1d]/65 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Message / Details *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-[#190d1d]/65 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Tell us about your event, venue, and desired look..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full py-6 font-semibold text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow mt-2"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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
    value: "panditsumita9315@gmail.com",
    href: "mailto:panditsumita9315@gmail.com",
  },
  {
    icon: MapPin,
    label: "Locations",
    value: "Delhi, Patna, Janakpur, Kathmandu • Available Worldwide",
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
    <div className="w-full pt-28 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      {/* Page Title */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-3">Reach Out</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to create your perfect look? Let's discuss your beauty needs and make you shine.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a0c1f]/80 to-[#2a1520]/80 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/20 shadow-2xl shadow-black/50 relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>

            <div className="relative">
              <h3 className="font-serif text-3xl text-foreground mb-3">Contact Details</h3>
              <p className="text-muted-foreground text-sm mb-10">We'd love to hear from you. Reach out through any channel below.</p>

              <div className="space-y-6">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-[#1a1015]/50 to-[#2a1520]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:border-primary/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-widest text-foreground/70 font-semibold mb-2">{label}</p>
                        {href ? (
                          <div className="flex items-center gap-2">
                            <a href={href} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                              {value}
                            </a>
                            <button
                              type="button"
                              onClick={handleCopyPhone}
                              className="inline-flex items-center gap-1 px-3 py-1 border border-white/30 rounded-lg text-xs hover:bg-primary/20 hover:border-primary/40 transition-all text-foreground/70"
                              aria-label="Copy phone number"
                            >
                              <Copy size={12} />
                              {copied ? "Copied!" : "Copy"}
                            </button>
                          </div>
                        ) : (
                          <p className="text-foreground/80 text-sm whitespace-pre-line leading-relaxed">{value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Quick Link */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center gap-4 bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/10 border border-[#25D366]/30 rounded-2xl px-6 py-5 hover:from-[#25D366]/30 hover:to-[#25D366]/20 transition-all duration-300 shadow-lg shadow-[#25D366]/10 hover:shadow-xl hover:shadow-[#25D366]/20"
              >
                <div className="h-10 w-10 bg-[#25D366]/20 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#25D366" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#25D366] text-sm font-semibold">Chat on WhatsApp</p>
                  <p className="text-muted-foreground/60 text-xs">Quick response guaranteed</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#1a0c1f]/80 to-[#2a1520]/80 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/20 shadow-2xl shadow-black/50 relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>

            <div className="relative">
              <h3 className="font-serif text-3xl text-foreground mb-3">Send an Inquiry</h3>
              <p className="text-muted-foreground text-sm mb-10">Fill in the form and Sumita will get back to you within 24 hours.</p>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200/50 rounded-2xl text-sm flex items-center gap-3 shadow-lg"
                >
                  <CheckCircle size={20} className="text-green-600 shrink-0" />
                  Thank you! Your inquiry has been sent. Sumita will get back to you within 24 hours.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-gradient-to-r from-[#190d1d]/70 to-[#2a1520]/70 border border-white/20 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all shadow-lg"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-gradient-to-r from-[#190d1d]/70 to-[#2a1520]/70 border border-white/20 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all shadow-lg"
                      placeholder="you@email.com"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-gradient-to-r from-[#190d1d]/70 to-[#2a1520]/70 border border-white/20 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all shadow-lg"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Event Date *</label>
                    <input
                      type="date"
                      required
                      className="w-full bg-gradient-to-r from-[#190d1d]/70 to-[#2a1520]/70 border border-white/20 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all shadow-lg"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Service Required *</label>
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-gradient-to-r from-[#190d1d]/70 to-[#2a1520]/70 border border-white/20 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all shadow-lg appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/70">Message / Details *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-gradient-to-r from-[#190d1d]/70 to-[#2a1520]/70 border border-white/20 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all shadow-lg resize-none"
                    placeholder="Tell us about your event, venue, and desired look..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full py-6 font-semibold text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 mt-4 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const getScrolledHeaderClass = () => {
    if (!isScrolled) return "bg-transparent py-5";

    switch (location) {
      case "/services":
        return "bg-gradient-to-r from-[#2d1a3f]/90 via-[#2f1843]/85 to-[#2c1c38]/90 backdrop-blur-xl shadow-lg border-b border-white/20 py-3";
      case "/gallery":
        return "bg-gradient-to-r from-[#1f2f52]/90 via-[#20365f]/85 to-[#1b2750]/90 backdrop-blur-xl shadow-lg border-b border-white/20 py-3";
      case "/contact":
        return "bg-gradient-to-r from-[#3b1b26]/90 via-[#3f1f2d]/85 to-[#371b2a]/90 backdrop-blur-xl shadow-lg border-b border-white/20 py-3";
      default:
        return "bg-gradient-to-r from-[#27283d]/90 via-[#2a2c47]/85 to-[#24263d]/90 backdrop-blur-xl shadow-lg border-b border-white/20 py-3";
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col relative">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          getScrolledHeaderClass()
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/30 shadow-sm flex items-center justify-center bg-white group-hover:border-primary transition-colors duration-300">
              <img
                src={`/images/logo.png`}
                alt="Sumita Makeover Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold leading-none tracking-wide text-foreground group-hover:text-primary transition-colors">
                Sumita Makeover
              </span>
              <span className="text-[9px] tracking-[0.25em] text-muted-foreground uppercase mt-0.5">
                Professional Makeup Artist
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors relative pb-1",
                  "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                  location === link.href
                    ? "text-primary after:w-full"
                    : "text-foreground/70 hover:text-primary after:w-0 hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-primary text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.03]"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-20 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-1 mt-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-4 px-4 font-serif text-2xl border-b border-rose-50 transition-colors rounded-lg",
                    location === link.href
                      ? "text-primary italic bg-rose-50"
                      : "text-foreground hover:text-primary hover:bg-rose-50/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-12 flex flex-col items-center gap-6">
              <Link
                href="/contact"
                className="w-full text-center py-4 bg-primary text-white text-sm font-semibold tracking-widest uppercase rounded-full shadow-lg shadow-primary/20"
              >
                Book Your Appointment
              </Link>
              <div className="flex gap-3 text-primary">
                <a href="#" className="p-2.5 border border-primary/20 rounded-full hover:bg-rose-50 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2.5 border border-primary/20 rounded-full hover:bg-rose-50 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="p-2.5 border border-primary/20 rounded-full hover:bg-rose-50 transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a1015] text-white pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-5">
                <span className="font-serif text-2xl text-white tracking-wider">Sumita Makeover</span>
                <div className="h-0.5 w-12 bg-primary mt-2"></div>
              </Link>
              <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-sm">
                UK London Beauty School certified professional makeup artist with 5+ years of experience. 
                Specialising in bridal, party & HD makeup — serving clients across Delhi, Janakpur (Nepal) and beyond.
              </p>
              <div className="flex gap-3">
                <a href="#" className="p-2.5 border border-white/10 rounded-full text-white/60 hover:text-primary hover:border-primary/40 transition-colors">
                  <Instagram size={17} />
                </a>
                <a href="#" className="p-2.5 border border-white/10 rounded-full text-white/60 hover:text-primary hover:border-primary/40 transition-colors">
                  <Facebook size={17} />
                </a>
                <a href="#" className="p-2.5 border border-white/10 rounded-full text-white/60 hover:text-primary hover:border-primary/40 transition-colors">
                  <Youtube size={17} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Quick Links</h3>
              <ul className="space-y-2.5">
                {[...NAV_LINKS, { href: "/privacy", label: "Privacy Policy" }, { href: "/disclaimer", label: "Disclaimer" }].map(
                  (link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/55 hover:text-white text-sm transition-colors hover:pl-1 duration-200 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Get In Touch</h3>
              <ul className="space-y-4 text-sm text-white/55">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>Delhi, India &bull; Janakpur, Nepal<br />Available Worldwide</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-primary shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-primary shrink-0" />
                  <span>hello@sumitamakeover.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/35">
            <p>&copy; {new Date().getFullYear()} Sumita Makeover. All rights reserved.</p>
            <div className="flex gap-5 mt-3 md:mt-0">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-white/70 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-black/20 hover:scale-110 transition-transform flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </div>
  );
}

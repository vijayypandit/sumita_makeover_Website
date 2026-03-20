import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Award, Globe, Heart, Star } from "lucide-react";

const SKILLS = [
  "Bridal Makeup (Indian & Western)",
  "HD & Airbrush Makeup",
  "Party & Event Makeup",
  "Editorial & Fashion Makeup",
  "Skin Prep & Contouring",
  "Eye & Lip Artistry",
];

const HIGHLIGHTS = [
  { icon: Award, label: "UK Certified", desc: "London Beauty School" },
  { icon: Star, label: "5+ Years", desc: "Industry Experience" },
  { icon: Heart, label: "300+ Brides", desc: "Made Beautiful" },
  { icon: Globe, label: "3+ Cities", desc: "Delhi · Janakpur · London" },
];

export default function About() {
  return (
    <div className="w-full pt-28 pb-24">
      {/* Page Title Banner */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-14 mb-16 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-3">The Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">About Sumita</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl relative z-10 bg-secondary/20">
              <img
                src={`/images/priya-portrait.png`}
                alt="Sumita Makeover - Professional Makeup Artist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="font-serif text-foreground text-base font-medium">Sumita Makeover</p>
                  <p className="text-primary text-xs tracking-wide mt-0.5">UK London Beauty School Certified</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-rose-200/40 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-primary/15 rounded-full -z-10 blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <SectionHeading
              title="Meet Sumita"
              subtitle="The Artist"
              align="left"
              className="mb-8"
            />

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
              <p>
                With over <strong className="text-foreground">5 years of professional experience</strong> in the beauty industry, 
                Sumita is a certified makeup artist who has mastered the art of bringing out every client's natural beauty — whether for a traditional Indian wedding, a modern party look, or an editorial shoot.
              </p>
              <p>
                A proud certified professional from the prestigious <strong className="text-foreground">UK London Beauty School</strong>, 
                Sumita holds an internationally recognised certification in advanced makeup techniques, 
                HD artistry, and bridal styling. Her London training gave her an edge in understanding 
                diverse skin tones, textures, and global beauty trends.
              </p>
              <p>
                Her clientele spans across <strong className="text-foreground">Delhi, Janakpur (Nepal)</strong> and beyond, 
                working with brides and clients from varied cultural backgrounds. She understands the nuances 
                of Indian traditions, Nepali wedding customs, and modern aesthetics — blending them seamlessly 
                into looks that are timeless, stunning, and uniquely personal.
              </p>
              <p>
                Sumita believes makeup should feel like <em>you</em> — only more radiant. Every brushstroke 
                is placed with intention, every look crafted with love.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {HIGHLIGHTS.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-center gap-3 bg-rose-50/60 rounded-2xl p-4 border border-rose-100">
                  <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{label}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                  Work With Sumita
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-10 md:p-14 border border-rose-100"
        >
          <div className="text-center mb-10">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-2">Expertise</p>
            <h2 className="font-serif text-3xl text-foreground">Areas of Specialisation</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-white"
              >
                <div className="h-2 w-2 rounded-full bg-primary shrink-0"></div>
                <span className="text-sm font-medium text-foreground">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

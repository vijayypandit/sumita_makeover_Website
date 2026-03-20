import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="w-full pt-28 pb-24">
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-14 mb-16 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">Disclaimer</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline underline-offset-4 mb-10">
          <ArrowLeft size={15} /> Back to Home
        </Link>

        <div className="bg-white rounded-3xl border border-rose-100 shadow-sm p-10 md:p-14">
          <p className="text-muted-foreground text-sm mb-8 pb-6 border-b border-rose-100">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">1. Professional Advice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The information provided on this website is for general informational purposes only. While Sumita is a certified professional from the UK London Beauty School, the skincare and makeup advice provided during consultations or on this site should not replace medical advice from a dermatologist or healthcare provider.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">2. Allergies & Sensitivities</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                It is the client's sole responsibility to inform the artist of any known allergies, skin sensitivities, or medical conditions prior to the application of any products. Sumita Makeover uses high-quality, professional-grade cosmetics but cannot be held liable for any adverse reactions. A patch test can be requested during the trial session.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">3. Results and Expectations</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Makeup results may vary depending on individual skin texture, condition, lighting, and photography. The portfolio images shown on this website represent the artist's style and previous work, but absolute replication of a specific look cannot be guaranteed due to individual facial features.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">4. Booking & Payments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All prices listed on this website are indicative and may be subject to change based on specific requirements, travel, and event complexity. A 50% non-refundable advance is required to confirm any booking. Sumita Makeover reserves the right to decline bookings at its discretion.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">5. External Links</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our website may contain links to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">6. Photography & Portfolio</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All photographs displayed in the gallery and portfolio sections are used with client consent. Unauthorized reproduction or use of these images is strictly prohibited.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors">
            Back to Home
          </Link>
          <Link href="/privacy" className="px-6 py-3 border border-rose-200 text-primary text-sm font-semibold rounded-full hover:bg-rose-50 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-rose-200 text-primary text-sm font-semibold rounded-full hover:bg-rose-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

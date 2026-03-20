import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="w-full pt-28 pb-24">
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-14 mb-16 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">Privacy Policy</h1>
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

          <div className="prose prose-slate max-w-none text-muted-foreground prose-headings:font-serif prose-headings:text-foreground prose-a:text-primary space-y-6">
            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">1. Information We Collect</h3>
              <p className="text-sm leading-relaxed">
                When you interact with Sumita Makeover through this website or directly, we may collect personal information such as your name, email address, phone number, event dates, and photographs. This information is primarily collected via our contact form or during consultations.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">2. How We Use Your Information</h3>
              <p className="text-sm leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm">
                <li>Provide, operate, and maintain our makeup services</li>
                <li>Communicate with you regarding bookings and inquiries</li>
                <li>Send you administrative messages and appointment reminders</li>
                <li>Showcase our portfolio (only when explicit consent is provided for photographs)</li>
              </ul>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">3. Image Consent</h3>
              <p className="text-sm leading-relaxed">
                We take client privacy seriously. Any photographs taken before, during, or after your makeup session will only be used on our website, social media, or marketing materials if you have provided explicit verbal or written consent.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">4. Data Security</h3>
              <p className="text-sm leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. We do not sell, trade, or rent your personal information to third parties.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">5. Third-Party Services</h3>
              <p className="text-sm leading-relaxed">
                We may use third-party tools such as WhatsApp or email platforms for communication purposes. These platforms have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-xl text-foreground mb-3">6. Contact Us</h3>
              <p className="text-sm leading-relaxed">
                If you have any questions or suggestions about our Privacy Policy, please contact us at{" "}
                <a href="mailto:hello@sumitamakeover.com" className="text-primary hover:underline">
                  hello@sumitamakeover.com
                </a>.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors">
            Back to Home
          </Link>
          <Link href="/disclaimer" className="px-6 py-3 border border-rose-200 text-primary text-sm font-semibold rounded-full hover:bg-rose-50 transition-colors">
            View Disclaimer
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-rose-200 text-primary text-sm font-semibold rounded-full hover:bg-rose-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

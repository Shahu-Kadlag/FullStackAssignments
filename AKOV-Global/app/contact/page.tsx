import { FadeIn } from "@/components/ui/MotionWrapper";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact Us | AKOV Global",
  description: "Get in touch with AKOV Global for your agricultural export needs.",
};

export default function ContactPage() {
  const address = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "CLIENT INPUT REQUIRED: Business Address";
  const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "akovglobal@gmail.com";
  const whatsappNum = process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || "+91 92848 98748";
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || "919284898748"}`;

  return (
    <div className="bg-offwhite min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-20 text-center relative">
          <FadeIn>
              <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-4 block">Get in Touch</span>
              <h1 className="text-5xl font-serif text-navy mb-6">Contact AKOV Global</h1>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                  Our trade specialists are ready to discuss your bulk agricultural requirements.
              </p>
          </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
              <h2 className="text-2xl font-serif text-navy mb-8">Headquarters</h2>
              <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 text-navy">
                          <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                          <h4 className="font-bold text-navy mb-1">Office Address</h4>
                          <p className="text-gray-500 font-light max-w-sm">{address}</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 text-navy">
                          <Phone className="w-5 h-5" />
                      </div>
                      <div>
                          <h4 className="font-bold text-navy mb-1">Phone</h4>
                          <p className="text-gray-500 font-light">{whatsappNum}</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 text-navy">
                          <Mail className="w-5 h-5" />
                      </div>
                      <div>
                          <h4 className="font-bold text-navy mb-1">Email</h4>
                          <a href={`mailto:${email}`} className="text-gray-500 font-light hover:text-teal transition-colors">{email}</a>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-bold hover:bg-teal/90 transition-colors shadow-lg">
                      <MessageCircle className="w-5 h-5" /> WhatsApp Us
                  </a>
                  <a href={`tel:${whatsappNum.replace(/[^\d+]/g, '')}`} className="inline-flex justify-center items-center gap-2 bg-white border-2 border-gray-100 text-navy px-8 py-4 rounded-xl font-bold hover:border-gray-200 transition-colors shadow-sm">
                      <Phone className="w-5 h-5" /> Call Now
                  </a>
              </div>
          </FadeIn>

          <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-teal/5 border border-gray-100">
                  <h3 className="text-2xl font-serif text-navy mb-6">Send an Enquiry</h3>
                  <form className="space-y-6">
                      <div>
                          <label className="block text-sm font-semibold text-navy mb-2">Name *</label>
                          <input type="text" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" placeholder="Your Name" required />
                      </div>
                      <div>
                          <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
                          <input type="email" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" placeholder="email@company.com" required />
                      </div>
                      <div>
                          <label className="block text-sm font-semibold text-navy mb-2">Message</label>
                          <textarea rows={4} className="w-full border border-gray-200 rounded-xl p-4 focus:ring-1 focus:ring-teal focus:border-teal outline-none transition-shadow" placeholder="How can we help?"></textarea>
                      </div>
                      <div className="pt-2">
                          <Link href="/quote" className="w-full block text-center bg-agrigreen text-white px-8 py-4 rounded-xl font-bold hover:bg-deepgreen transition-colors shadow-lg shadow-agrigreen/20">
                              Go to Detailed Quote Form
                          </Link>
                      </div>
                  </form>
              </div>
          </FadeIn>
      </div>
    </div>
  );
}

import { FadeIn } from "@/components/ui/MotionWrapper";
import Link from "next/link";
import { ArrowRight, Truck, Building2, PackageCheck } from "lucide-react";

export const metadata = {
  title: "Domestic Supply | AKOV Global",
  description: "Bulk agricultural sourcing and supply for the domestic Indian market.",
};

export default function DomesticSupplyPage() {
  return (
    <div className="bg-offwhite min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-20 text-center relative">
          <FadeIn>
              <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-4 block">India Operations</span>
              <h1 className="text-5xl font-serif text-navy mb-6">Domestic Bulk Supply</h1>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                  Reliable, high-volume agricultural sourcing for institutional buyers, food processors, and wholesalers across India.
              </p>
          </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
          <FadeIn delay={0.1}>
              <div className="w-16 h-16 bg-agrigreen/10 text-agrigreen rounded-full flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-navy mb-4">Pan-India Logistics</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                  Seamless transportation networks ensuring your bulk orders arrive on time, anywhere in the country.
              </p>
          </FadeIn>
          <FadeIn delay={0.2}>
              <div className="w-16 h-16 bg-teal/10 text-teal rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-navy mb-4">Institutional Sourcing</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                  Dedicated supply chains tailored for large-scale food processors, FMCG brands, and retail chains.
              </p>
          </FadeIn>
          <FadeIn delay={0.3}>
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-6">
                  <PackageCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-navy mb-4">Export-Grade Quality</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                  We bring our strict international export quality standards to domestic wholesale markets.
              </p>
          </FadeIn>
      </div>

      <FadeIn delay={0.5} className="mt-10 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-navy text-white px-10 py-5 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-xl text-lg">
              Contact Domestic Sales <ArrowRight className="w-5 h-5" />
          </Link>
      </FadeIn>
    </div>
  );
}

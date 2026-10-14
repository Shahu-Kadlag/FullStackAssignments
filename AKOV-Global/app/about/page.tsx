import { FadeIn } from "@/components/ui/MotionWrapper";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Leaf } from "lucide-react";

export const metadata = {
  title: "About Us | AKOV Global",
  description: "Learn about AKOV Global's commitment to sourcing and exporting premium Indian agricultural products.",
};

export default function AboutPage() {
  return (
    <div className="bg-offwhite min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
                <span className="text-agrigreen font-semibold tracking-widest text-xs uppercase mb-4 block">Who We Are</span>
                <h1 className="text-5xl md:text-6xl font-serif text-navy mb-6 leading-tight">Rooted in Nature.<br/>Committed to Excellence.</h1>
                <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
                    AKOV Global is a premier agricultural sourcing and export company based in India. We bridge the gap between rich Indian farmlands and global markets, delivering uncompromising quality and purity in every shipment.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                    Contact Our Team <ArrowRight className="w-4 h-4" />
                </Link>
            </FadeIn>
            <FadeIn delay={0.2} className="relative">
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img src="/about/farmland.jpg" alt="Indian Farmland" className="w-full h-full object-cover" />
                </div>
            </FadeIn>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
            <FadeIn delay={0.1}>
                <div className="w-16 h-16 bg-agrigreen/10 text-agrigreen rounded-full flex items-center justify-center mb-6">
                    <Leaf className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-navy mb-4">Direct Sourcing</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                    We maintain direct relationships with trusted farmers and cooperatives across India, ensuring fair trade practices and full traceability of all our agricultural products.
                </p>
            </FadeIn>
            <FadeIn delay={0.2}>
                <div className="w-16 h-16 bg-teal/10 text-teal rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-navy mb-4">Uncompromising Quality</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                    From meticulous sorting to advanced laboratory testing, our multi-stage quality assurance process guarantees that only premium-grade products reach your port.
                </p>
            </FadeIn>
            <FadeIn delay={0.3}>
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-6">
                    <Globe2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-navy mb-4">Global Reach</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                    Serving both robust domestic networks and complex international supply chains. We handle bulk requirements with professional logistics and documentation.
                </p>
            </FadeIn>
        </div>
      </div>
    </div>
  );
}

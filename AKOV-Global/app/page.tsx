import Link from "next/link";
import { Leaf, ShieldCheck, Globe2, PackageCheck } from "lucide-react";
import { FadeIn, ParallaxHero } from "@/components/ui/MotionWrapper";
import GlobeClient from "@/components/3d/GlobeClient";

export default async function Home() {
  return (
    <div className="bg-offwhite min-h-screen">
      <ParallaxHero bgImage="/about/farmland.jpg">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-32 pb-40">
            <span className="text-agrigreen font-semibold tracking-widest text-sm uppercase mb-6 block drop-shadow-sm">AKOV Global</span>
            <h1 className="text-6xl md:text-8xl font-serif text-navy mb-8 leading-[1.1] drop-shadow-lg">Connecting Nature.<br/>Delivering Excellence.</h1>
            <p className="text-gray-600 font-light text-xl md:text-2xl mb-12 max-w-2xl mx-auto drop-shadow">
                Premium agricultural sourcing and export from India. We deliver trust, purity, and quality to global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/products" className="bg-agrigreen text-white px-10 py-5 rounded-xl font-bold hover:bg-deepgreen transition-all shadow-xl shadow-agrigreen/20 hover:-translate-y-1 text-lg w-full sm:w-auto">
                    Explore Catalogue
                </Link>
                <Link href="/contact" className="bg-white text-navy px-10 py-5 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-1 text-lg w-full sm:w-auto border border-gray-100">
                    Contact Us
                </Link>
            </div>
        </div>
      </ParallaxHero>


      {/* Process/Storytelling Section */}
      <section className="py-32 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn>
                <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-4 block">Farm to Global</span>
                <h2 className="text-4xl md:text-5xl font-serif text-navy mb-16">The Export Process</h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* 1. SOURCE */}
                <FadeIn delay={0.1}>
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center h-full hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-agrigreen/10 text-agrigreen rounded-full flex items-center justify-center mb-6">
                            <Leaf className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-2xl text-navy mb-4">SOURCE</h3>
                        <p className="text-gray-500 font-light text-sm">Direct procurement from verified Indian agricultural cooperatives and farms.</p>
                    </div>
                </FadeIn>
                {/* 2. PROCESSING */}
                <FadeIn delay={0.2}>
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center h-full hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-teal/10 text-teal rounded-full flex items-center justify-center mb-6">
                            <ShieldCheck className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-2xl text-navy mb-4">PROCESSING</h3>
                        <p className="text-gray-500 font-light text-sm">Rigorous cleaning, sorting, and grading to meet international B2B standards.</p>
                    </div>
                </FadeIn>
                {/* 3. PACKAGING */}
                <FadeIn delay={0.3}>
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center h-full hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-6">
                            <PackageCheck className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-2xl text-navy mb-4">PACKAGING</h3>
                        <p className="text-gray-500 font-light text-sm">Secure, export-compliant bulk packaging preserving purity and shelf life.</p>
                    </div>
                </FadeIn>
                {/* 4. GLOBAL DELIVERY */}
                <FadeIn delay={0.4}>
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center h-full hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-navy/10 text-navy rounded-full flex items-center justify-center mb-6">
                            <Globe2 className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-2xl text-navy mb-4">GLOBAL DELIVERY</h3>
                        <p className="text-gray-500 font-light text-sm">Reliable logistics and freight forwarding to global destinations on schedule.</p>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* Global Markets (3D Globe) */}
      <section className="py-32 bg-offwhite border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <FadeIn>
                    <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-4 block">International Reach</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Exporting India's Finest to the World</h2>
                    <p className="text-gray-500 font-light text-lg mb-12">
                        AKOV Global operates a sophisticated supply network connecting the rich agricultural heartlands of India with major international markets. Our established trade routes ensure reliable, continuous supply of bulk agricultural commodities.
                    </p>
                </FadeIn>
                <div className="space-y-4">
                    <FadeIn delay={0.1}>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-6">
                            <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center font-bold text-sm">ME</div>
                            <div>
                                <h4 className="font-bold text-navy">Middle East & GCC</h4>
                                <p className="text-gray-400 text-sm">UAE, Saudi Arabia, Oman, Qatar</p>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-6">
                            <div className="w-12 h-12 bg-agrigreen/10 text-agrigreen rounded-full flex items-center justify-center font-bold text-sm">EU</div>
                            <div>
                                <h4 className="font-bold text-navy">Europe</h4>
                                <p className="text-gray-400 text-sm">Germany, UK, Netherlands, France</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <FadeIn delay={0.3} className="relative h-[500px] w-full flex items-center justify-center">
                <GlobeClient />
            </FadeIn>
        </div>
      </section>
    </div>
  );
}

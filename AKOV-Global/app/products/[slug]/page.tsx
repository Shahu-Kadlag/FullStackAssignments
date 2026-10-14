export const dynamic = "force-dynamic";
import { getPublicProductBySlug } from '@/app/actions/public';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MessageCircle, ChevronRight, FileCheck, Anchor, Box } from 'lucide-react';
import { FadeIn } from '@/components/ui/MotionWrapper';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let product = null;

  try {
    product = await getPublicProductBySlug(resolvedParams.slug);
  } catch(e) {
    console.error(e);
    return (
      <div className="min-h-screen flex items-center justify-center bg-offwhite">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg text-center">
          <h2 className="text-2xl font-serif text-navy mb-4">Database Not Configured</h2>
          <p className="text-gray-500">PRODUCTION BLOCKER: DATABASE_URL is missing.</p>
        </div>
      </div>
    );
  }

  if (!product) return notFound();

  return (
    <div className="bg-offwhite min-h-screen pb-24">
        {/* Light Breadcrumb Header */}
        <div className="bg-white border-b border-gray-100 py-5 sticky top-20 z-30 shadow-sm backdrop-blur-md bg-white/90">
            <div className="max-w-7xl mx-auto px-6 text-xs text-gray-400 flex items-center gap-2 font-medium tracking-wide">
                <Link href="/" className="hover:text-agrigreen transition-colors">HOME</Link> <ChevronRight className="w-3 h-3" />
                <Link href="/products" className="hover:text-agrigreen transition-colors">PRODUCTS</Link> <ChevronRight className="w-3 h-3" />
                <span className="text-teal font-semibold">{product.name.toUpperCase()}</span>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-20 items-start">
            {/* Elegant Image Section with Parallax/Fade */}
            <FadeIn delay={0.1} className="space-y-6 lg:sticky lg:top-36">
                <div className="aspect-[4/5] bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-teal/5 border-4 border-white relative group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                    <img src={product.primaryImage} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />

                    <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                        <div className="bg-white/95 backdrop-blur-md text-navy p-3 rounded-xl shadow-lg flex items-center gap-2">
                            <FileCheck className="w-4 h-4 text-agrigreen" />
                            <span className="text-xs font-bold uppercase tracking-widest">Lab Tested</span>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Typography & Specs Section */}
            <div>
                <FadeIn delay={0.2}>
                    <div className="mb-6 flex items-center gap-4">
                        <span className="bg-agrigreen/10 text-agrigreen px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-agrigreen/20">100% Pure & Natural</span>
                        <span className="text-gray-400 text-xs tracking-wider font-semibold">HS CODE: {product.hsCode}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-serif text-navy mb-8 leading-tight">{product.name}</h1>
                    <p className="text-gray-600 mb-12 leading-relaxed font-light text-lg">{product.description}</p>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="bg-white border border-gray-100 rounded-[2rem] p-10 mb-12 shadow-xl shadow-teal/5">
                        <h3 className="font-semibold text-navy mb-8 text-xs uppercase tracking-widest flex items-center gap-3">
                            <Box className="w-4 h-4 text-teal"/> Key Specifications
                        </h3>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-sm">
                            <div className="flex flex-col border-b border-gray-50 pb-4">
                                <dt className="text-gray-400 mb-1.5 text-[10px] uppercase tracking-widest font-semibold">Origin</dt>
                                <dd className="font-medium text-navy text-base">{product.origin}</dd>
                            </div>
                            {product.curcumin && (
                            <div className="flex flex-col border-b border-gray-50 pb-4">
                                <dt className="text-gray-400 mb-1.5 text-[10px] uppercase tracking-widest font-semibold">Curcumin Content</dt>
                                <dd className="font-medium text-navy text-base">{product.curcumin}</dd>
                            </div>
                            )}
                            <div className="flex flex-col border-b border-gray-50 pb-4">
                                <dt className="text-gray-400 mb-1.5 text-[10px] uppercase tracking-widest font-semibold">Moisture</dt>
                                <dd className="font-medium text-navy text-base">{product.moisture}</dd>
                            </div>
                            <div className="flex flex-col border-b border-gray-50 pb-4">
                                <dt className="text-gray-400 mb-1.5 text-[10px] uppercase tracking-widest font-semibold">Shelf Life</dt>
                                <dd className="font-medium text-navy text-base">{product.shelfLife}</dd>
                            </div>
                            <div className="flex flex-col border-b border-gray-50 pb-4">
                                <dt className="text-gray-400 mb-1.5 text-[10px] uppercase tracking-widest font-semibold">MOQ</dt>
                                <dd className="font-medium text-navy text-base">{product.moq}</dd>
                            </div>
                            <div className="flex flex-col border-b border-gray-50 pb-4">
                                <dt className="text-gray-400 mb-1.5 text-[10px] uppercase tracking-widest font-semibold">Packing Options</dt>
                                <dd className="font-medium text-navy text-base">{product.packingOptions}</dd>
                            </div>
                        </dl>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/quote?product=${product.slug}`} className="flex-1 bg-agrigreen text-white text-center py-5 rounded-2xl font-semibold hover:bg-deepgreen transition-all duration-300 shadow-xl shadow-agrigreen/20 flex items-center justify-center gap-3 group hover:-translate-y-1">
                        <Anchor className="w-5 h-5 group-hover:rotate-12 transition-transform" /> Request Export Quote
                    </Link>
                    <a href={`https://wa.me/${process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || "919284898748"}?text=Hello%20AKOV%20Global%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}...`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-teal border-2 border-gray-100 text-center py-5 rounded-2xl font-semibold hover:border-teal hover:bg-teal/5 transition-all duration-300 flex justify-center items-center gap-3 shadow-sm hover:-translate-y-1">
                        <MessageCircle className="w-5 h-5" /> WhatsApp Us
                    </a>
                </FadeIn>
            </div>
        </div>
    </div>
  )
}

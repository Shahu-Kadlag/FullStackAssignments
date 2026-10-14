export const dynamic = "force-dynamic";
import { getPublicProducts, getPublicCategories } from '@/app/actions/public';
import Link from 'next/link';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { FadeIn } from '@/components/ui/MotionWrapper';

export const metadata = {
  title: 'Agricultural Products | AKOV Global',
  description: 'Browse our extensive catalogue of premium Indian agricultural exports including spices, rice, and fresh produce.',
};

export default async function ProductsPage() {
  let displayProducts: any[] = [];
  let displayCategories: any[] = [];

  try {
    displayProducts = await getPublicProducts();
    displayCategories = await getPublicCategories();
  } catch (e) {
    console.error("Failed to load products", e);
    return (
      <div className="min-h-screen flex items-center justify-center bg-offwhite">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg text-center">
          <h2 className="text-2xl font-serif text-navy mb-4">Database Not Configured</h2>
          <p className="text-gray-500">PRODUCTION BLOCKER: DATABASE_URL is missing. The product catalogue cannot load.</p>
        </div>
      </div>
    );
  }

  if (displayProducts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-offwhite">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg text-center">
          <h2 className="text-2xl font-serif text-navy mb-4">No products found.</h2>
          <p className="text-gray-500">Check back later for premium agricultural exports.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-offwhite min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-agrigreen/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <FadeIn>
                <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-6 block">Product Catalogue</span>
                <h1 className="text-5xl md:text-6xl font-serif text-navy mb-6">Premium Global Exports</h1>
                <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                    Explore our rigorously tested, export-grade agricultural products sourced directly from India's finest farms.
                </p>
            </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-72 shrink-0 space-y-8">
            <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-28">
                <h3 className="font-semibold text-navy mb-6 flex items-center gap-2 text-sm uppercase tracking-wider"><Filter className="w-4 h-4"/> Categories</h3>
                <ul className="space-y-4">
                    <li><button className="text-agrigreen font-semibold text-sm flex justify-between w-full">All Products <span className="text-agrigreen/60">({displayProducts.length})</span></button></li>
                    {displayCategories.map(cat => (
                        <li key={cat.slug}><button className="text-gray-500 hover:text-navy text-sm font-light flex justify-between w-full transition-colors">{cat.name} <span className="text-gray-400">({displayProducts.filter((p: any) => p.categorySlug === cat.slug).length})</span></button></li>
                    ))}
                </ul>
            </FadeIn>
        </aside>

        <div className="flex-1">
            <FadeIn delay={0.2} className="mb-10 flex justify-between items-center">
                <div className="relative w-full max-w-md group">
                    <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal transition-colors" />
                    <input type="text" placeholder="Search products, HS codes..." className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal text-sm shadow-sm transition-all" />
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayProducts.map((product: any, index: number) => (
                    <FadeIn delay={0.1 * (index % 6)} key={product.id}>
                        <Link href={`/products/${product.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal/10 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 relative">
                            <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden p-4">
                                <img src={product.primaryImage} alt={product.name} className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-1000 ease-out" />
                                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-navy px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                                    {product.categorySlug.replace('-', ' ')}
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="text-xs text-gray-400 mb-3 uppercase tracking-widest font-medium">HS: {product.hsCode || 'N/A'}</div>
                                <h3 className="font-serif text-2xl text-navy mb-3 group-hover:text-agrigreen transition-colors">{product.name}</h3>
                                <p className="text-gray-500 text-sm mb-8 line-clamp-2 font-light leading-relaxed">{product.description}</p>
                                <div className="mt-auto flex items-center justify-between text-sm font-semibold">
                                    <span className="text-teal group-hover:text-deepgreen transition-colors flex items-center gap-2">
                                        View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

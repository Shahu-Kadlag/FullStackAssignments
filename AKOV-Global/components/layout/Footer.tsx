import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "akovglobal@gmail.com";

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 relative group-hover:scale-105 transition-transform duration-300">
                    <Image src="/brand/akov-logo.png" alt="AKOV Global" fill className="object-contain" />
                </div>
                <div className="flex flex-col justify-center border-l border-gray-200 pl-3">
                    <span className="font-serif font-bold text-lg text-navy leading-none tracking-tight">AKOV</span>
                    <span className="font-sans text-[8px] tracking-[0.25em] text-agrigreen font-bold mt-0.5">GLOBAL</span>
                </div>
            </Link>
            <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed font-light">
                Premium agricultural exports from India. We deliver trust, purity, and sustainable trading solutions to the global market.
            </p>
        </div>
        <div>
            <h4 className="font-bold text-navy mb-4 text-sm tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-light">
                <li><Link href="/about" className="hover:text-agrigreen transition-colors">About Us</Link></li>
                <li><Link href="/products" className="hover:text-agrigreen transition-colors">Products</Link></li>
                <li><Link href="/quality" className="hover:text-agrigreen transition-colors">Quality Control</Link></li>
                <li><Link href="/brochure" className="hover:text-agrigreen transition-colors">Brochure</Link></li>
                <li><Link href="/blog" className="hover:text-agrigreen transition-colors">Blog</Link></li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-navy mb-4 text-sm tracking-wide">Network</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-light">
                <li><Link href="/quote" className="hover:text-agrigreen transition-colors">Request a Quote</Link></li>
                <li><Link href="/suppliers" className="hover:text-agrigreen transition-colors">Become a Supplier</Link></li>
                <li><Link href="/domestic-supply" className="hover:text-agrigreen transition-colors">Domestic Supply</Link></li>
                <li><Link href="/markets" className="hover:text-agrigreen transition-colors">Global Markets</Link></li>
                <li><a href={`mailto:${email}`} className="hover:text-agrigreen transition-colors">{email}</a></li>
            </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-50 text-center text-xs text-gray-400 font-light">
        &copy; {new Date().getFullYear()} AKOV Global. All rights reserved.
      </div>
    </footer>
  );
}

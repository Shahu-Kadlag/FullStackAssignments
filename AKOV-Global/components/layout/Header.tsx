import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Header() {
  const whatsappNum = process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || "919284898748";
  const whatsappLink = whatsappNum ? `https://wa.me/${whatsappNum}` : "/contact";

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Image
                        src="/brand/akov-logo.png"
                        alt="AKOV Global Emblem"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="flex flex-col justify-center border-l border-gray-200 pl-3">
                    <span className="font-serif font-bold text-xl text-navy leading-none tracking-tight">AKOV</span>
                    <span className="font-sans text-[9px] tracking-[0.25em] text-agrigreen font-bold mt-0.5">GLOBAL</span>
                </div>
            </Link>
            <nav className="hidden lg:flex gap-8 text-sm font-medium text-navy/80">
                <Link href="/" className="hover:text-agrigreen transition-colors">Home</Link>
                <Link href="/about" className="hover:text-agrigreen transition-colors">About Us</Link>
                <Link href="/products" className="hover:text-agrigreen transition-colors">Products</Link>
                <Link href="/export" className="hover:text-agrigreen transition-colors">Export Process</Link>
                <Link href="/quality" className="hover:text-agrigreen transition-colors">Quality</Link>
                <Link href="/contact" className="hover:text-agrigreen transition-colors">Contact</Link>
            </nav>
            <div className="flex gap-4 items-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-teal hidden sm:flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity">
                    <MessageCircle className="w-5 h-5" /> <span className="hidden xl:inline">WhatsApp Us</span>
                </a>
                <Link href="/quote" className="bg-agrigreen text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-deepgreen transition-colors shadow-sm">
                    Request a Quote
                </Link>
            </div>
        </div>
    </header>
  );
}

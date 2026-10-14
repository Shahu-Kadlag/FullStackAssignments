import { FadeIn } from "@/components/ui/MotionWrapper";
import { ArrowRight, Leaf, Users, ShieldCheck } from "lucide-react";
import SupplierForm from "@/components/forms/SupplierForm";

export const metadata = {
  title: "Become a Supplier | AKOV Global",
  description: "Join AKOV Global's network of premium agricultural suppliers and reach international markets.",
};

export default function SuppliersPage() {
  return (
    <div className="bg-offwhite min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-20 text-center relative">
          <FadeIn>
              <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-4 block">Partner With Us</span>
              <h1 className="text-5xl font-serif text-navy mb-6">Become an AKOV Supplier</h1>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                  We are actively seeking reliable, quality-focused farmers, cooperatives, and processors to join our export supply chain.
              </p>
          </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
              <h2 className="text-2xl font-serif text-navy mb-6">Why Partner With Us?</h2>
              <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-agrigreen/10 rounded-full flex items-center justify-center shrink-0 text-agrigreen">
                          <Globe2Icon className="w-5 h-5" />
                      </div>
                      <div>
                          <h4 className="font-bold text-navy mb-1">Global Access</h4>
                          <p className="text-gray-500 font-light">Take your high-quality produce to international markets without the logistical complexity.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center shrink-0 text-teal">
                          <Users className="w-5 h-5" />
                      </div>
                      <div>
                          <h4 className="font-bold text-navy mb-1">Long-term Relationships</h4>
                          <p className="text-gray-500 font-light">We believe in fair trade, consistent volumes, and building enduring partnerships.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                          <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                          <h4 className="font-bold text-navy mb-1">Guaranteed Payments</h4>
                          <p className="text-gray-500 font-light">Transparent financial dealings and timely payments for verified quality produce.</p>
                      </div>
                  </div>
              </div>
          </FadeIn>

          <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-teal/5 border border-gray-100 h-full">
                  <h3 className="text-2xl font-serif text-navy mb-6">Supplier Enquiry</h3>
                  <SupplierForm />
              </div>
          </FadeIn>
      </div>
    </div>
  );
}

function Globe2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

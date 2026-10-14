import { FadeIn } from "@/components/ui/MotionWrapper";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Export Process | AKOV Global",
  description: "Understanding our comprehensive end-to-end agricultural export process.",
};

const processSteps = [
    "Buyer Requirement",
    "Product & Quality Confirmation",
    "Quotation",
    "Order Confirmation",
    "Processing & Packaging",
    "Quality Inspection",
    "Export Documentation",
    "Container Loading",
    "Shipment",
    "Delivery"
];

export default function ExportPage() {
  return (
    <div className="bg-offwhite min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-20 text-center relative">
          <FadeIn>
              <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-4 block">How We Work</span>
              <h1 className="text-5xl font-serif text-navy mb-6">The Export Process</h1>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                  A transparent, step-by-step workflow designed to ensure smooth international transactions and on-time delivery.
              </p>
          </FadeIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="space-y-6">
              {processSteps.map((step, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow group">
                          <div className="w-12 h-12 bg-agrigreen/10 text-agrigreen rounded-full flex items-center justify-center font-bold font-serif shrink-0 group-hover:bg-agrigreen group-hover:text-white transition-colors">
                              {index + 1}
                          </div>
                          <div className="flex-1">
                              <h3 className="font-semibold text-navy text-lg">{step}</h3>
                          </div>
                          <CheckCircle2 className="w-6 h-6 text-gray-200 group-hover:text-teal transition-colors" />
                      </div>
                  </FadeIn>
              ))}
          </div>

          <FadeIn delay={0.5} className="mt-16 text-center">
              <Link href="/quote" className="inline-flex items-center gap-2 bg-agrigreen text-white px-10 py-5 rounded-xl font-bold hover:bg-deepgreen transition-colors shadow-xl shadow-agrigreen/20 text-lg">
                  Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
          </FadeIn>
      </div>
    </div>
  );
}

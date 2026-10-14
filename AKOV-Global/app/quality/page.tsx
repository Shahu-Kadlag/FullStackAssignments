import { FadeIn } from "@/components/ui/MotionWrapper";
import { ShieldCheck, Beaker, FileCheck } from "lucide-react";

export const metadata = {
  title: "Quality Assurance | AKOV Global",
  description: "Our rigorous quality control and compliance systems for agricultural exports.",
};

const qualitySteps = [
    "Supplier Selection",
    "Product Inspection",
    "Sampling",
    "Testing Where Required",
    "Processing",
    "Packaging",
    "Final Inspection",
    "Dispatch"
];

export default function QualityPage() {
  return (
    <div className="bg-offwhite min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-20 text-center relative">
          <FadeIn>
              <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-4 block">Quality & Compliance</span>
              <h1 className="text-5xl font-serif text-navy mb-6">Rigorous Standards</h1>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                  We believe that quality is never an accident; it is the result of intelligent effort and strict systematic oversight.
              </p>
          </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="relative">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Laboratory Testing" className="w-full h-full object-cover" />
              </div>
          </FadeIn>

          <div>
              <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-serif text-navy mb-8">The Quality Workflow</h2>
                  <div className="space-y-6">
                      {qualitySteps.map((step, index) => (
                          <div key={index} className="flex gap-4 items-start">
                              <div className="w-8 h-8 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
                                  <ShieldCheck className="w-4 h-4" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-navy">{step}</h4>
                              </div>
                          </div>
                      ))}
                  </div>
              </FadeIn>
          </div>
      </div>
    </div>
  );
}

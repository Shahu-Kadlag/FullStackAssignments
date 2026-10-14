import { FadeIn } from "@/components/ui/MotionWrapper";
import { Download, FileText } from "lucide-react";

export const metadata = {
  title: "Download Brochure | AKOV Global",
  description: "Download the official AKOV Global company brochure and product catalogue.",
};

export default function BrochurePage() {
  return (
    <div className="bg-offwhite min-h-screen pb-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-20 w-full">
          <FadeIn>
              <div className="bg-white p-12 rounded-[2rem] shadow-xl shadow-teal/5 border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-8">
                      <FileText className="w-10 h-10" />
                  </div>
                  <h1 className="text-4xl font-serif text-navy mb-4">Company Brochure</h1>
                  <p className="text-gray-500 font-light mb-10 max-w-md mx-auto">
                      Review our complete product catalog, quality assurance standards, and export capabilities.
                  </p>

                  {/* The actual file URL would be configured via CMS or env var */}
                  <a href="#" className="inline-flex items-center gap-3 bg-navy text-white px-10 py-5 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
                      <Download className="w-5 h-5" /> Download PDF File
                  </a>
                  <p className="text-xs text-gray-400 mt-6">(Document pending business configuration)</p>
              </div>
          </FadeIn>
      </div>
    </div>
  );
}

import { FadeIn } from "@/components/ui/MotionWrapper";

export const metadata = {
  title: "Blog | AKOV Global",
  description: "News, insights, and updates from AKOV Global.",
};

export default function BlogPage() {
  return (
    <div className="bg-offwhite min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-20 text-center relative">
          <FadeIn>
              <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-4 block">Insights</span>
              <h1 className="text-5xl font-serif text-navy mb-6">Market Updates & News</h1>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                  Stay informed with the latest agricultural trends and AKOV Global announcements.
              </p>
          </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <FadeIn>
              <h2 className="text-2xl font-serif text-gray-400 mb-4">No articles published yet.</h2>
              <p className="text-gray-500 font-light">Check back soon for our latest updates.</p>
          </FadeIn>
      </div>
    </div>
  );
}

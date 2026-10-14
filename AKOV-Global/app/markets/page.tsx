import { FadeIn } from "@/components/ui/MotionWrapper";

export const metadata = {
  title: "Global Markets | AKOV Global",
  description: "International markets served by AKOV Global's export division.",
};

// Data-driven markets array. Expandable when business confirms new regions.
const activeMarkets = [
  { region: "Middle East & GCC", countries: ["UAE", "Saudi Arabia", "Oman", "Qatar"] },
  { region: "Europe", countries: ["Germany", "UK", "Netherlands", "France"] },
  { region: "Asia Pacific", countries: ["Singapore", "Malaysia", "Vietnam", "Japan"] }
];

export default function MarketsPage() {
  return (
    <div className="bg-offwhite min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-20 text-center relative">
          <FadeIn>
              <span className="text-teal font-semibold tracking-widest text-xs uppercase mb-4 block">Our Reach</span>
              <h1 className="text-5xl font-serif text-navy mb-6">Global Markets</h1>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                  Connecting India's agricultural heartlands with major international trade hubs.
              </p>
          </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
              {activeMarkets.map((market, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                      <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm h-full">
                          <h3 className="font-serif text-2xl text-navy mb-6">{market.region}</h3>
                          <ul className="space-y-3">
                              {market.countries.map(country => (
                                  <li key={country} className="text-gray-500 font-light flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-agrigreen block"></span>
                                      {country}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </FadeIn>
              ))}
          </div>
      </div>
    </div>
  );
}

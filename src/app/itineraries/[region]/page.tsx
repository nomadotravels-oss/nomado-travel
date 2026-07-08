import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regionItineraries } from "@/data/itineraries";
import { asset } from "@/lib/asset";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export function generateStaticParams() {
  return [
    { region: 'kashmir' },
    { region: 'ladakh' }
  ];
}

export default async function RegionItinerariesPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const regionKey = region.toLowerCase();
  const regionData = regionItineraries[regionKey];

  if (!regionData) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="font-switzerland bg-[#F5F9FD] min-h-screen">
        
        {/* Hero Banner for Region */}
        <section className="relative h-[40vh] md:h-[48vh] flex items-end pb-12 px-6 md:px-12 lg:px-20">
          <div className="absolute inset-0 z-0">
            <Image
              src={asset(regionData.heroImage)}
              alt={regionData.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06172E] via-[#06172E]/60 to-[#06172E]/80" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
            <span className="text-[12px] md:text-[14px] tracking-[0.2em] font-700 text-[#F59E0B] uppercase mb-4 block">
              {regionData.tagline}
            </span>
            <h1 className="font-clash text-[clamp(3rem,6vw,5rem)] font-700 leading-none tracking-tight">
              {regionData.name} Itineraries
            </h1>
          </div>
        </section>

        {/* Itineraries List */}
        <section className="pt-10 pb-20 md:pt-16 md:pb-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regionData.itineraries.map((itinerary) => (
                <div key={itinerary.id} className="bg-white rounded-3xl overflow-hidden group shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col">
                  
                  {/* Image Section */}
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={asset(itinerary.image)}
                      alt={itinerary.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Duration Badge */}
                    <div className="absolute top-4 left-4 bg-[#F59E0B] px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[11px] tracking-[0.08em] font-700 text-[#06172E] uppercase">
                        {itinerary.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <h3 className="font-clash text-xl md:text-[1.35rem] font-600 text-[#06172E] mb-2 leading-tight">
                      {itinerary.name}
                    </h3>
                    <p className="text-gray-500 font-switzerland text-sm leading-relaxed line-clamp-2 mb-4">
                      {itinerary.desc}
                    </p>
                    
                    {/* Large Inclusion Icons */}
                    <div className="flex items-center gap-4 mb-5 text-[#06172E]">
                      <div title="Hotels">
                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                          <path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
                        </svg>
                      </div>
                      <div title="Sightseeing">
                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M10 10h4"/>
                          <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"/>
                          <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"/>
                          <path d="M 9 7 V 4 a 1 1 0 0 0 -1 -1 H 6 a 1 1 0 0 0 -1 1 v 3"/>
                          <path d="M 4 21 a 2 2 0 0 1 -2 -2 v -3.851 c 0 -1.39 2 -2.962 2 -4.829 V 8 a 1 1 0 0 1 1 -1 H 9 a 1 1 0 0 1 1 1 v 11 a 2 2 0 0 1 -2 2 z"/>
                        </svg>
                      </div>
                      <div title="Cabs">
                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.6 5H8.4a2 2 0 0 0-1.9 1.3L5 10 3 8"/>
                          <path d="M7 14h.01"/>
                          <path d="M17 14h.01"/>
                          <rect width="18" height="8" x="3" y="10" rx="2"/>
                          <path d="M5 18v2"/><path d="M19 18v2"/>
                        </svg>
                      </div>
                      <div title="Meals">
                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                          <path d="M7 2v20"/>
                          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Highlight Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {itinerary.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 bg-[#F5F9FD] text-[#06172E]/70 text-xs font-500 px-3 py-1.5 rounded-full border border-[#06172E]/5">
                          <svg className="w-3 h-3 text-[#F59E0B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="truncate max-w-[140px]">{highlight}</span>
                        </span>
                      ))}
                    </div>

                    {/* Spacer to push button to bottom */}
                    <div className="mt-auto">
                      <Link href={`/itineraries/${regionKey}/${itinerary.id}`} className="inline-flex items-center justify-center gap-2 bg-[#06172E] hover:bg-[#F59E0B] text-white hover:text-[#06172E] w-full py-3.5 rounded-xl font-700 text-sm transition-all duration-300">
                        View Trip
                        <svg viewBox="0 0 32 24" className="w-4 h-3.5 shrink-0 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h24M19 5l8 7-8 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}

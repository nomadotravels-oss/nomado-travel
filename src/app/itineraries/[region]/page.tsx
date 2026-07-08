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
                    <div className="absolute top-4 left-4 bg-[#F59E0B] px-3 py-1 rounded-full">
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
                    
                    {/* Inclusions */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="flex items-center gap-1.5 bg-[#F5F9FD] text-[#06172E]/70 px-2 py-1 rounded-md border border-[#06172E]/5" title="Hotels">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v2H9V7zm0 4h1v2H9v-2zm0 4h1v2H9v-2zm-2 4h5v-4H7v4zm10-12h1v2h-1V7zm0 4h1v2h-1v-2zm0 4h1v2h-1v-2z"></path></svg>
                        <span className="text-[10px] font-600 tracking-wide uppercase">Hotels</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#F5F9FD] text-[#06172E]/70 px-2 py-1 rounded-md border border-[#06172E]/5" title="Cabs">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8a2 2 0 012 2v7a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2zm0 0l-3 4m11-4l3 4M5 14h14M8 11h8"></path></svg>
                        <span className="text-[10px] font-600 tracking-wide uppercase">Cabs</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#F5F9FD] text-[#06172E]/70 px-2 py-1 rounded-md border border-[#06172E]/5" title="Meals">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4M7 21v-4a2 2 0 00-2-2H1a2 2 0 00-2 2v4"></path></svg>
                        <span className="text-[10px] font-600 tracking-wide uppercase">Meals</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#F5F9FD] text-[#06172E]/70 px-2 py-1 rounded-md border border-[#06172E]/5" title="Sightseeing">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="text-[10px] font-600 tracking-wide uppercase">Sightseeing</span>
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

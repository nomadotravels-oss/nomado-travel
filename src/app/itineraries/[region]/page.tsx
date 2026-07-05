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
      <main className="font-switzerland bg-[#F5F9FD] min-h-screen pt-24">
        
        {/* Hero Banner for Region */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-end pb-12 px-6 md:px-12 lg:px-20 mt-10 md:mt-0">
          <div className="absolute inset-0 z-0">
            <Image
              src={asset(regionData.heroImage)}
              alt={regionData.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06172E] via-[#06172E]/60 to-transparent" />
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
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-16 text-center md:text-left">
              <h2 className="font-clash text-3xl md:text-4xl font-600 text-[#06172E] mb-4">
                Explore Our Handcrafted Routes
              </h2>
              <p className="text-gray-600 max-w-2xl text-lg md:text-xl">
                Choose from our carefully curated selection of itineraries or let us customize the perfect journey for your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regionData.itineraries.map((itinerary) => (
                <div key={itinerary.id} className="relative w-full h-[450px] md:h-[500px] rounded-3xl overflow-hidden group shadow-[0_16px_40px_-16px_rgba(0,0,0,0.65)] block">
                  
                  {/* Image Background */}
                  <Image
                    src={asset(itinerary.image)}
                    alt={itinerary.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06172E]/95 via-[#06172E]/50 to-transparent group-hover:from-[#06172E]/[0.98] transition-all duration-700" />
                  
                  {/* Duration Tag */}
                  <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <span className="text-[10px] md:text-[11px] tracking-[0.1em] font-600 text-white uppercase shadow-sm">
                      {itinerary.duration}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <h3 className="font-clash text-2xl md:text-3xl font-600 text-white mb-3">
                      {itinerary.name}
                    </h3>
                    <p className="text-white/80 font-switzerland text-sm md:text-base leading-relaxed line-clamp-2 mb-5">
                      {itinerary.desc}
                    </p>
                    
                    <ul className="flex flex-col gap-2 mb-6">
                      {itinerary.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/90 text-sm font-500">
                          <svg className="w-4 h-4 text-[#F59E0B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="truncate">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={`/itineraries/${regionKey}/${itinerary.id}`} className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-white text-[#06172E] w-full py-3 rounded-xl font-700 transition-colors duration-300">
                      View Trip
                      <svg viewBox="0 0 32 24" className="w-5 h-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h24M19 5l8 7-8 7" />
                      </svg>
                    </Link>
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

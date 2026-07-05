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

            <div className="flex flex-col gap-12 md:gap-16">
              {regionData.itineraries.map((itinerary, i) => (
                <div key={itinerary.id} className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-white rounded-3xl p-6 md:p-8 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.1)] group">
                  
                  {/* Image */}
                  <div className="relative w-full md:w-[40%] lg:w-[45%] h-[300px] md:h-auto md:min-h-[350px] overflow-hidden rounded-2xl shrink-0">
                    <Image
                      src={asset(itinerary.image)}
                      alt={itinerary.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                      <span className="text-xs font-700 tracking-wider text-[#06172E] uppercase">
                        {itinerary.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center w-full md:w-[60%] lg:w-[55%] py-2 md:py-6">
                    <h3 className="font-clash text-2xl md:text-4xl font-600 text-black mb-4">
                      {itinerary.name}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                      {itinerary.desc}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-sm font-700 tracking-widest text-gray-400 uppercase mb-4">
                        Key Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {itinerary.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700 font-500">
                            <svg className="w-5 h-5 text-[#F59E0B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <Link href="/#contact" className="inline-flex items-center gap-3 bg-[#06172E] hover:bg-[#F59E0B] text-white px-8 py-4 rounded-full font-600 transition-colors duration-300">
                        Enquire Now
                      </Link>
                      <span className="text-sm text-gray-400 font-500">Customizable</span>
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

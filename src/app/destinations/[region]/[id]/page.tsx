import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regions } from "@/data/destinations";
import { regionItineraries } from "@/data/itineraries";
import { asset } from "@/lib/asset";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookNowButton from "@/components/BookNowButton";

export function generateStaticParams() {
  const params: { region: string; id: string }[] = [];
  for (const region of regions) {
    for (const dest of region.destinations) {
      params.push({
        region: region.id,
        id: dest.id
      });
    }
  }
  return params;
}

export default async function DetailedDestinationPage({ params }: { params: Promise<{ region: string; id: string }> }) {
  const { region, id } = await params;
  const regionKey = region.toLowerCase();
  
  const regionData = regions.find(r => r.id === regionKey);
  if (!regionData) notFound();

  const destination = regionData.destinations.find(d => d.id === id);
  if (!destination) notFound();

  // Find related itineraries in the region
  const allRegionItineraries = regionItineraries[regionKey]?.itineraries || [];
  const relatedItineraries = allRegionItineraries.filter(it => 
    it.name.toLowerCase().includes(destination.name.toLowerCase()) || 
    it.desc.toLowerCase().includes(destination.name.toLowerCase()) ||
    it.highlights.some(h => h.toLowerCase().includes(destination.name.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <main className="font-switzerland bg-[#F5F9FD] min-h-screen pb-20">
        
        {/* Hero Section */}
        <section className="relative h-[55vh] md:h-[70vh] flex flex-col justify-end pb-12 px-6 md:px-12 lg:px-20">
          <div className="absolute inset-0 z-0 rounded-b-[2.5rem] overflow-hidden">
            <Image
              src={asset(destination.image)}
              alt={destination.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06172E] via-[#06172E]/40 to-[#06172E]/80" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-block bg-[#F59E0B] text-[#06172E] text-xs font-700 tracking-wider uppercase px-4 py-2 rounded-full mb-6">
                  {regionData.name}
                </span>
                <h1 className="font-clash text-[clamp(2.5rem,5vw,4.5rem)] font-700 leading-none tracking-tight mb-4">
                  {destination.name}
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                  {destination.desc}
                </p>
              </div>
              <div className="shrink-0">
                <BookNowButton 
                  itineraryName={`Trip to ${destination.name}`} 
                  className="inline-block bg-white hover:bg-[#F59E0B] text-[#06172E] px-10 py-5 rounded-full font-700 text-lg transition-colors duration-300 shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 md:px-12 lg:px-20 mt-16 md:mt-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* Left Col: Description & Highlights */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-clash text-3xl md:text-4xl font-600 text-[#06172E] mb-8">
                About {destination.name}
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed mb-12">
                {destination.longDesc}
              </div>

              <h2 className="font-clash text-2xl md:text-3xl font-600 text-[#06172E] mb-6">
                Key Highlights
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {destination.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Col: Quick Info */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-32">
                <h3 className="font-clash text-xl font-600 text-[#06172E] mb-6">Plan Your Visit</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-700 text-gray-400 uppercase tracking-wider mb-2">Best Time to Visit</h4>
                    <p className="text-gray-800 font-medium">{destination.bestTime}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-700 text-gray-400 uppercase tracking-wider mb-2">Region</h4>
                    <p className="text-gray-800 font-medium">{regionData.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Itineraries Section */}
        {relatedItineraries.length > 0 && (
          <section className="px-6 md:px-12 lg:px-20 mt-24 mb-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-clash text-3xl md:text-4xl font-600 text-[#06172E] mb-10 text-center md:text-left">
                Itineraries Featuring {destination.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedItineraries.map((itinerary) => (
                  <Link 
                    href={`/itineraries/${regionKey}/${itinerary.id}`}
                    key={itinerary.id} 
                    className="bg-white rounded-3xl overflow-hidden group shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_-8px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col"
                  >
                    {/* Image Section */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={asset(itinerary.image)}
                        alt={itinerary.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                        <span className="text-xs font-700 text-[#D97706] tracking-wider uppercase">
                          {itinerary.duration}
                        </span>
                      </div>
                    </div>
                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="font-clash text-xl md:text-2xl font-600 text-[#06172E] mb-3 leading-tight group-hover:text-[#F59E0B] transition-colors">
                        {itinerary.name}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-6">
                        {itinerary.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {itinerary.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-6 border-t border-gray-100">
                        <span className="inline-flex items-center gap-2 text-[#06172E] font-700 text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                          View Itinerary
                          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h12M12 4l6 6-6 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

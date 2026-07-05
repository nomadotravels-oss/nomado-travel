import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regionItineraries } from "@/data/itineraries";
import { asset } from "@/lib/asset";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  const params: { region: string; id: string }[] = [];
  
  for (const [regionKey, regionData] of Object.entries(regionItineraries)) {
    for (const itinerary of regionData.itineraries) {
      params.push({
        region: regionKey,
        id: itinerary.id
      });
    }
  }
  
  return params;
}

export default async function DetailedItineraryPage({ params }: { params: Promise<{ region: string; id: string }> }) {
  const { region, id } = await params;
  const regionKey = region.toLowerCase();
  
  const regionData = regionItineraries[regionKey];
  if (!regionData) notFound();

  const itinerary = regionData.itineraries.find(it => it.id === id);
  if (!itinerary) notFound();

  return (
    <>
      <Navbar />
      <main className="font-switzerland bg-[#F5F9FD] min-h-screen pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[65vh] flex flex-col justify-end pb-12 px-6 md:px-12 lg:px-20 mt-10 md:mt-0">
          <div className="absolute inset-0 z-0 rounded-b-[2.5rem] overflow-hidden">
            <Image
              src={asset(itinerary.image)}
              alt={itinerary.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06172E] via-[#06172E]/50 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-block bg-[#F59E0B] text-[#06172E] text-xs font-700 tracking-wider uppercase px-4 py-2 rounded-full mb-6">
                  {itinerary.duration}
                </span>
                <h1 className="font-clash text-[clamp(2.5rem,5vw,4.5rem)] font-700 leading-none tracking-tight mb-4">
                  {itinerary.name}
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                  {itinerary.desc}
                </p>
              </div>
              <div className="shrink-0">
                <Link href="/#contact" className="inline-block bg-white hover:bg-[#F59E0B] text-[#06172E] px-10 py-5 rounded-full font-700 text-lg transition-colors duration-300 shadow-xl">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 md:px-12 lg:px-20 mt-16 md:mt-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* Left Col: Itinerary */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-clash text-3xl md:text-4xl font-600 text-[#06172E] mb-12">
                Day by Day Plan
              </h2>
              
              <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
                {itinerary.days.map((day, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[42px] md:-left-[58px] top-1 w-5 h-5 md:w-6 md:h-6 bg-[#F59E0B] rounded-full border-4 border-[#F5F9FD] shadow-sm" />
                    
                    <h3 className="text-sm font-700 text-[#F59E0B] tracking-wider uppercase mb-2">
                      Day {day.day}
                    </h3>
                    <h4 className="font-clash text-xl md:text-2xl font-600 text-[#06172E] mb-4">
                      {day.title}
                    </h4>
                    
                    <ul className="space-y-3">
                      {day.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-base md:text-lg">
                          <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Inclusions & Exclusions */}
            <div className="w-full lg:w-1/3 space-y-10">
              
              <div className="bg-white rounded-3xl p-8 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.05)]">
                <h3 className="font-clash text-2xl font-600 text-[#06172E] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  What's Included
                </h3>
                <ul className="space-y-4">
                  {itinerary.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.05)]">
                <h3 className="font-clash text-2xl font-600 text-[#06172E] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  What's Excluded
                </h3>
                <ul className="space-y-4">
                  {itinerary.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#06172E] rounded-3xl p-8 text-white">
                <h3 className="font-clash text-2xl font-600 mb-4">Ready to start?</h3>
                <p className="text-white/80 mb-8">
                  Get in touch with our experts to customize this itinerary to your exact preferences.
                </p>
                <Link href="/#contact" className="block text-center bg-[#F59E0B] hover:bg-white text-[#06172E] w-full py-4 rounded-xl font-700 transition-colors duration-300">
                  Request a Quote
                </Link>
              </div>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

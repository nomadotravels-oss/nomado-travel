import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";
import { asset } from "@/lib/asset";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const CATEGORY_META: Record<string, { label: string; desc: string; image: string }> = {
  "walks": { 
    label: "Walks & Hikes", 
    desc: "Wander through centuries of history, scenic villages, and local trails across Kashmir and Ladakh.",
    image: "/images/downtown.jpg" 
  },
  "food": { 
    label: "Food Experiences", 
    desc: "Indulge in authentic local culinary traditions, communal banquets, and regional specialties.",
    image: "/images/wazwan-new.jpg" 
  },
  "hikes": { 
    label: "Hikes & Expeditions", 
    desc: "Ascend rugged mountain ridges, cross high-altitude passes, and experience majestic Himalayan scenery.",
    image: "/images/mountain-lake.jpg" 
  },
  "make-it-yourself": { 
    label: "Make It Yourself", 
    desc: "Meditation through creation. Learn rare traditional crafts and skills from master Kashmiri artisans.",
    image: "/images/craft.jpg" 
  },
  "skiing": { 
    label: "Skiing & Snowboarding", 
    desc: "Conquer Gulmarg's legendary powder slopes with certified alpine instructors.",
    image: "/images/gulmarg.jpg" 
  }
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((id) => ({
    id,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meta = CATEGORY_META[id];

  if (!meta) {
    notFound();
  }

  const categoryExperiences = experiences.filter((exp) => exp.category === id);

  return (
    <>
      <Navbar />
      <main className="font-switzerland bg-[#F5F9FD] min-h-screen">
        
        {/* Category Hero Section */}
        <section className="relative h-[45vh] md:h-[55vh] flex items-end pb-12 px-6 md:px-12 lg:px-20">
          <div className="absolute inset-0 z-0">
            <Image
              src={asset(meta.image)}
              alt={meta.label}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06172E] via-[#06172E]/60 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
            <Link href="/#experiences" className="inline-flex items-center gap-2 text-[#F59E0B] hover:text-white uppercase tracking-[0.2em] text-[10px] font-700 mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back to Experiences
            </Link>
            <h1 className="font-clash text-[clamp(2rem,4vw,3.5rem)] font-700 leading-none tracking-tight mb-4">
              {meta.label}
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed">
              {meta.desc}
            </p>
          </div>
        </section>

        {/* Dynamic Grid of Sub-activities */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {categoryExperiences.map((exp) => (
                <Link href={`/experiences/${exp.id}`} key={exp.id} className="group block">
                  <article className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-gray-200/60 transition-all duration-500 h-full">
                    
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <Image
                        src={asset(exp.image)}
                        alt={exp.title}
                        fill
                        className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                        style={{ objectPosition: exp.pos ?? "center" }}
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      />
                      <span className="absolute top-4 left-4 bg-white/85 backdrop-blur-md text-[#06172E] text-[10px] font-700 tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                        {exp.region}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <span className="text-[10px] font-700 text-[#F59E0B] uppercase tracking-widest block mb-2">
                          {exp.duration}
                        </span>
                        <h3 className="text-xl md:text-2xl font-750 text-[#06172E] leading-tight mb-2 group-hover:text-[#F59E0B] transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                          {exp.desc}
                        </p>
                      </div>

                      {/* Footer Link */}
                      <div className="flex items-center gap-1.5 text-xs font-700 text-[#06172E] uppercase tracking-wide mt-6 border-t border-gray-50 pt-4 group-hover:gap-2.5 transition-all duration-300">
                        <span>Learn More</span>
                        <svg className="w-3.5 h-3.5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                  </article>
                </Link>
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

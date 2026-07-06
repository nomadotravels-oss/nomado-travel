import Image from"next/image";
import Link from"next/link";
import { notFound } from"next/navigation";
import { experiences, getExperienceById } from"@/data/experiences";
import { asset } from"@/lib/asset";
import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import Contact from"@/components/Contact";

export function generateStaticParams() {
  return experiences.map((exp) => ({
    id: exp.id,
  }));
}

export default async function ExperiencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experience = getExperienceById(id);

  if (!experience) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#F5F9FD] min-h-screen">
        
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-16 px-6 md:px-12 lg:px-20">
          <div className="absolute inset-0 z-0">
            <Image
              src={asset(experience.image)}
              alt={experience.title}
              fill
              className="object-cover"
              style={{ objectPosition: experience.pos ??"center" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06172E] via-[#06172E]/50 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
            <Link href="/#experiences" className="inline-flex items-center gap-2 text-[#F59E0B] hover:text-white uppercase tracking-[0.2em] text-[10px] font-700 mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back to Experiences
            </Link>
            <span className="text-[12px] md:text-[14px] tracking-[0.2em] font-700 text-white/80 uppercase mb-3 block">
              {experience.region}
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-700 leading-none tracking-tight mb-8">
              {experience.title}
            </h1>
            
            {/* Quick Info Bar */}
            <div className="flex flex-wrap items-center gap-6 md:gap-12 text-sm md:text-base font-500 text-white/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <span>{experience.difficulty}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-600 text-[#06172E] mb-6">About this Experience</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 whitespace-pre-wrap">
                {experience.longDesc}
              </p>
              
              <h3 className="text-xl md:text-2xl font-600 text-[#06172E] mb-6">Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {experience.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#F5F9FD] p-1.5 rounded-full text-[#F59E0B]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-500">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-600 text-[#06172E] mb-1">Interested in this experience?</h4>
                  <p className="text-gray-500 text-sm">Our travel experts will help you craft the perfect itinerary.</p>
                </div>
                <a href="tel:+917006712010" className="flex items-center justify-center gap-2 text-[12px] tracking-[0.1em] font-700 uppercase px-8 py-4 bg-[#F59E0B] text-[#06172E] hover:bg-[#06172E] hover:text-white rounded-full transition-all duration-300 w-full sm:w-auto shrink-0">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}

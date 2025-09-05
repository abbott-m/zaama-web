"use client";
import React, { useEffect } from "react";
import FoundationSection from "../components/FoundationSection";
import CarouselLabel from "../components/CarouselLabel";
import localFont from "next/font/local";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const logikBold = localFont({
  src: "../Logik-font//Logik-Bold.otf",
});

const Foundation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="px-5 py-20 bg-gradient-to-r from-primary/20 to-blue-500/20 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            data-aos="fade-up"
            className={`${logikBold.className} text-4xl md:text-6xl font-bold text-primary mb-6`}
          >
            ZAAMA DISCO FOUNDATION
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Giving back to our community through music, culture, and education
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Community Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Educational Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Cultural Preservation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Youth Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-5 py-16 bg-[#161616] sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-6`}>
                OUR MISSION
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The Zaama Disco Foundation is dedicated to empowering Ghana's youth through music education, 
                cultural preservation, and community development initiatives. We believe that music and culture 
                are powerful tools for positive change and social transformation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">🎵</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Music Education</h4>
                    <p className="text-gray-400 text-sm">Providing access to music education and instruments for underserved communities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">🏛️</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Cultural Preservation</h4>
                    <p className="text-gray-400 text-sm">Documenting and preserving Ghanaian musical traditions for future generations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">🌱</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Youth Development</h4>
                    <p className="text-gray-400 text-sm">Creating opportunities for young people to express themselves and build careers in music</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-6`}>
                OUR VISION
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We envision a Ghana where every young person has access to quality music education and cultural 
                experiences, regardless of their background. Through the universal language of music, we aim to 
                build bridges across communities and create lasting positive change.
              </p>
              
              {/* Impact Numbers */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-primary/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-gray-400">Mothers Reached</div>
                </div>
                <div className="text-center bg-primary/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-primary mb-2">25</div>
                  <div className="text-sm text-gray-400">Community Programs</div>
                </div>
                <div className="text-center bg-primary/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-primary mb-2">10</div>
                  <div className="text-sm text-gray-400">Partner Schools</div>
                </div>
                <div className="text-center bg-primary/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-gray-400">Years Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section Component */}
      <CarouselLabel word="making a difference • community impact • giving back" />
      <FoundationSection />

      {/* Programs & Initiatives */}
      <section className="px-5 py-16 bg-gradient-to-r from-green-900/20 to-blue-900/20 sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-aos="fade-up"
            className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-12 text-center`}
          >
            OUR PROGRAMS & INITIATIVES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              {/* <div className="text-4xl mb-4">🎸</div> */}
              <h3 className="text-xl font-bold text-primary mb-4">Music Scholarship Program</h3>
              <p className="text-gray-300 text-sm mb-4">
                Providing full scholarships for talented students to attend music schools and workshops, 
                ensuring financial barriers don't limit musical dreams.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Full tuition coverage</li>
                <li>• Instrument provision</li>
                <li>• Mentorship programs</li>
                <li>• Performance opportunities</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              {/* <div className="text-4xl mb-4">🏫</div> */}
              <h3 className="text-xl font-bold text-primary mb-4">School Outreach Program</h3>
              <p className="text-gray-300 text-sm mb-4">
                Bringing music education directly to underserved schools across Ghana, 
                providing instruments and training for teachers and students.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Mobile music labs</li>
                <li>• Teacher training workshops</li>
                <li>• Instrument donations</li>
                <li>• Curriculum development</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              {/* <div className="text-4xl mb-4">🎤</div> */}
              <h3 className="text-xl font-bold text-primary mb-4">Community Talent Showcase</h3>
              <p className="text-gray-300 text-sm mb-4">
                Regular community events that provide platforms for local artists to showcase their talents 
                and connect with industry professionals.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Monthly talent nights</li>
                <li>• Industry networking</li>
                <li>• Recording opportunities</li>
                <li>• Artist development</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              {/* <div className="text-4xl mb-4">📚</div> */}
              <h3 className="text-xl font-bold text-primary mb-4">Cultural Documentation Project</h3>
              <p className="text-gray-300 text-sm mb-4">
                Recording and preserving traditional Ghanaian music and stories from elders 
                to ensure cultural heritage is passed to future generations.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Oral history recording</li>
                <li>• Traditional music archiving</li>
                <li>• Elder interviews</li>
                <li>• Digital preservation</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              {/* <div className="text-4xl mb-4">🛠️</div> */}
              <h3 className="text-xl font-bold text-primary mb-4">Music Production Training</h3>
              <p className="text-gray-300 text-sm mb-4">
                Teaching young people the technical skills needed in modern music production, 
                from recording to mixing and mastering.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Studio training sessions</li>
                <li>• Digital audio workshops</li>
                <li>• Equipment access</li>
                <li>• Industry certification</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="600" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              {/* <div className="text-4xl mb-4">🤝</div> */}
              <h3 className="text-xl font-bold text-primary mb-4">Community Partnerships</h3>
              <p className="text-gray-300 text-sm mb-4">
                Collaborating with local organizations, schools, and businesses to create 
                sustainable music education and cultural programs.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• School partnerships</li>
                <li>• Local business collaboration</li>
                <li>• NGO cooperation</li>
                <li>• Government initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-5 py-16 bg-[#161616] sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-aos="fade-up"
            className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-12`}
          >
            SUCCESS STORIES
          </h2>
          
          <div className="space-y-12">
            <div data-aos="fade-up" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
              </div>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "The Zaama Disco Foundation changed my life. Through their scholarship program, I was able to attend music school 
                and now I'm working as a professional producer. I wouldn't be where I am today without their support."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold text-primary">Kwame Asante</p>
                  <p className="text-sm text-gray-400">Music Producer & 2022 Scholarship Recipient</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💫</span>
                </div>
              </div>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "Our school was struggling to provide music education to our students. The Foundation's outreach program 
                brought instruments and training that transformed our entire arts curriculum. Our students are thriving!"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold text-primary">Mrs. Akosua Mensah</p>
                  <p className="text-sm text-gray-400">Headteacher, Tema Community School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="px-5 py-16 bg-gradient-to-r from-primary/10 to-blue-500/10 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-aos="fade-up"
            className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-6`}
          >
            GET INVOLVED
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join us in making a difference! There are many ways you can support our mission and help 
            empower Ghana's youth through music and culture.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              {/* <div className="text-3xl mb-4">💝</div> */}
              <h3 className="text-lg font-bold text-primary mb-3">Donate</h3>
              <p className="text-gray-300 text-sm">
                Support our programs with a one-time donation or become a monthly supporter to sustain our impact.
              </p>
            </div>

            <div className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              {/* <div className="text-3xl mb-4">🙋‍♀️</div> */}
              <h3 className="text-lg font-bold text-primary mb-3">Volunteer</h3>
              <p className="text-gray-300 text-sm">
                Share your skills and time by volunteering with our programs, events, and community initiatives.
              </p>
            </div>

            <div className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              {/* <div className="text-3xl mb-4">🤝</div> */}
              <h3 className="text-lg font-bold text-primary mb-3">Partner</h3>
              <p className="text-gray-300 text-sm">
                Collaborate with us as a corporate partner, school, or organization to expand our reach and impact.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register/general"
              className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-primary/80 transition-colors duration-200 transform hover:scale-105"
            >
              Support Our Mission
            </Link>
            
            <Link
              href="/volunteers"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/10 transition-colors duration-200"
            >
              Volunteer With Us
            </Link>
          </div>

          <div data-aos="fade-up" data-aos-delay="800" className="mt-8 text-gray-400">
            <p>Foundation Contact: foundation@zaamadisco.com | +233 24 447 5597</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Foundation;
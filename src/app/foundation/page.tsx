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
            Supporting mothers and feeding the community - one life at a time
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              <span>Maternity Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span>Street Feeding Program</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Community Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>Lives Changed</span>
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
                The Zaama Disco Foundation is dedicated to supporting mothers in need and feeding the vulnerable 
                in our communities. We believe that every mother deserves access to quality healthcare during 
                childbirth, and every person deserves a meal. Through our direct action programs, we're making 
                an immediate impact on the lives of those who need it most.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">👶</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Maternity Support</h4>
                    <p className="text-gray-400 text-sm">Paying hospital bills for mothers in need to ensure safe deliveries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">🍽️</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Street Feeding</h4>
                    <p className="text-gray-400 text-sm">Providing nutritious meals to vulnerable people on the streets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">❤️</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Community Care</h4>
                    <p className="text-gray-400 text-sm">Building stronger, more supportive communities through direct assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-6`}>
                OUR IMPACT
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Since our inception, we've been focused on direct, measurable impact. Every donation goes 
                directly to those in need - whether it's paying a hospital bill for a new mother or providing 
                a hot meal to someone on the street. Our work is about immediate relief and long-term community building.
              </p>
              
              {/* Impact Numbers */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-primary/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-gray-400">Maternity Bills Paid</div>
                </div>
                <div className="text-center bg-green-400/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">5,000+</div>
                  <div className="text-sm text-gray-400">Meals Served</div>
                </div>
                <div className="text-center bg-blue-400/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15</div>
                  <div className="text-sm text-gray-400">Partner Hospitals</div>
                </div>
                <div className="text-center bg-yellow-400/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
                  <div className="text-sm text-gray-400">Years of Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section Component */}
      <CarouselLabel word="making a difference • saving lives • feeding hope" />
      <FoundationSection />

      {/* Programs & Initiatives */}
      <section className="px-5 py-16 bg-gradient-to-r from-pink-900/20 to-green-900/20 sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-aos="fade-up"
            className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-12 text-center`}
          >
            OUR CORE PROGRAMS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">👶💝</div>
              <h3 className="text-xl font-bold text-primary mb-4">Maternity Bills Payment Program</h3>
              <p className="text-gray-300 text-sm mb-4">
                Our flagship program that directly pays hospital bills for expectant mothers who cannot afford 
                safe delivery services. We work with partner hospitals across Ghana to ensure no mother is 
                turned away due to financial constraints.
              </p>
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-bold text-primary mb-2">How It Works:</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Hospitals refer cases of mothers in financial need</li>
                  <li>• We verify and approve emergency cases within 24 hours</li>
                  <li>• Bills are paid directly to hospitals</li>
                  <li>• Follow-up care and support provided</li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">🍽️🤲</div>
              <h3 className="text-xl font-bold text-primary mb-4">Street Feeding Program</h3>
              <p className="text-gray-300 text-sm mb-4">
                Regular feeding program that provides hot, nutritious meals to homeless individuals and 
                families living on the streets. Our mobile kitchen visits different areas of Accra weekly, 
                ensuring consistent support for the most vulnerable.
              </p>
              <div className="bg-green-400/10 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Program Details:</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Weekly feeding sessions in 5 different locations</li>
                  <li>• Nutritious meals prepared by professional chefs</li>
                  <li>• Special provisions for children and elderly</li>
                  <li>• Basic healthcare checkups during feeding sessions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Programs */}
          <div className="mt-12">
            <h3 
              data-aos="fade-up"
              className={`${logikBold.className} text-xl md:text-2xl font-bold text-gray-300 mb-8 text-center`}
            >
              FUTURE INITIATIVES
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div data-aos="fade-up" data-aos-delay="300" className="bg-[#4c4c4c]/20 rounded-2xl p-6 opacity-70">
                <div className="text-3xl mb-3">🎵</div>
                <h4 className="font-bold text-primary mb-2">Music Education Program</h4>
                <p className="text-gray-300 text-sm">
                  Planned program to provide music education and instruments to underserved communities.
                  <span className="text-xs text-gray-500 block mt-2 italic">Coming Soon</span>
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
                <div className="text-3xl mb-3">🏥</div>
                <h4 className="font-bold text-primary mb-2">Mobile Health Clinics</h4>
                <p className="text-gray-300 text-sm">
                  Expanding our impact with mobile healthcare services for remote communities.
                  <span className="text-xs text-yellow-400 block mt-2">In Development</span>
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="500" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
                <div className="text-3xl mb-3">🏠</div>
                <h4 className="font-bold text-primary mb-2">Emergency Shelter Support</h4>
                <p className="text-gray-300 text-sm">
                  Temporary housing assistance for families in crisis situations.
                  <span className="text-xs text-yellow-400 block mt-2">In Planning</span>
                </p>
              </div>
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
            STORIES OF HOPE
          </h2>
          
          <div className="space-y-12">
            <div data-aos="fade-up" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👶</span>
                </div>
              </div>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "When I went into labor, I had no money for the hospital bills. I was scared I would be turned away. 
                But the Zaama Disco Foundation stepped in and paid everything. My baby and I are both healthy thanks to them. 
                They saved our lives."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold text-primary">Ama Serwah</p>
                  <p className="text-sm text-gray-400">Mother from Tema • Baby delivered safely October 2024</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍽️</span>
                </div>
              </div>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "Every Wednesday, I know there will be a warm meal waiting for me and my children at Circle. 
                The Zaama team doesn't just feed our stomachs - they treat us with dignity and respect. 
                That means everything to us."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold text-green-400">Kwame Asante</p>
                  <p className="text-sm text-gray-400">Street Feeding Program Beneficiary • Father of 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="px-5 py-16 bg-gradient-to-r from-primary/10 to-green-500/10 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-aos="fade-up"
            className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-6`}
          >
            JOIN OUR MISSION
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Every contribution makes a direct impact. Your donation could pay for a safe delivery, provide 
            meals for a week, or give hope to a family in crisis. Join us in saving lives and feeding hope.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">💝</div>
              <h3 className="text-lg font-bold text-primary mb-3">Sponsor a Birth</h3>
              <p className="text-gray-300 text-sm">
                ₵1,500 covers the full cost of a safe delivery for a mother in need.
              </p>
            </div>

            <div className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">🍽️</div>
              <h3 className="text-lg font-bold text-primary mb-3">Feed a Family</h3>
              <p className="text-gray-300 text-sm">
                ₵50 provides nutritious meals for a family of 4 for an entire week.
              </p>
            </div>

            <div className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-primary mb-3">Monthly Partner</h3>
              <p className="text-gray-300 text-sm">
                Become a monthly donor to sustain our programs and maximize impact.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register/general"
              className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-primary/80 transition-colors duration-200 transform hover:scale-105"
            >
              💝 Donate Now
            </Link>
            
            <Link
              href="/volunteers"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/10 transition-colors duration-200"
            >
              🙋‍♀️ Volunteer With Us
            </Link>
          </div>

          <div data-aos="fade-up" data-aos-delay="800" className="mt-8 text-gray-400">
            <p>Foundation Contact: foundation@zaamadisco.com | +233 24 447 5597</p>
            <p className="text-sm mt-2">100% of donations go directly to program beneficiaries</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Foundation;
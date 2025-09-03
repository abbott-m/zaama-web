"use client";
import React, { useEffect } from "react";
import Sponsors from "../components/Sponsors";
import FoundationSection from "../components/FoundationSection";
import CarouselLabel from "../components/CarouselLabel";
import localFont from "next/font/local";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const Partners = () => {
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
      <section className="px-5 py-20 bg-gradient-to-r from-primary/20 to-secondary/20 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            data-aos="fade-up"
            className={`${blatantBold.className} text-4xl md:text-6xl font-bold text-primary mb-6`}
          >
            OUR PARTNERS
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Amazing brands and organizations supporting Zaama Disco through sponsorship and collaboration
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span>Trusted Sponsors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Community Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>Shared Vision</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>Cultural Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="px-5 py-16 bg-[#161616] sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-aos="fade-up"
            className={`${blatantBold.className} text-2xl md:text-3xl font-bold text-primary mb-12 text-center`}
          >
            WHY PARTNER WITH ZAAMA DISCO?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Massive Reach</h3>
              <p className="text-gray-300">
                Connect with thousands of young, engaged music fans and cultural enthusiasts across Ghana and beyond.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Brand Alignment</h3>
              <p className="text-gray-300">
                Associate your brand with authenticity, creativity, and the rising African music scene.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Global Impact</h3>
              <p className="text-gray-300">
                Be part of a movement that celebrates African culture and reaches audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <CarouselLabel word="amazing sponsors • trusted partners • community builders" />
      <Sponsors />

      {/* Partnership Opportunities */}
      <section className="px-5 py-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-aos="fade-up"
            className={`${blatantBold.className} text-2xl md:text-3xl font-bold text-primary mb-12 text-center`}
          >
            PARTNERSHIP OPPORTUNITIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div data-aos="fade-up" data-aos-delay="100" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">👑</div>
              <h3 className="text-lg font-bold text-primary mb-3">Title Sponsor</h3>
              <p className="text-gray-300 text-sm mb-4">
                Maximum brand visibility with naming rights and premium placement across all marketing.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Event naming rights</li>
                <li>• Logo on all materials</li>
                <li>• VIP hospitality</li>
                <li>• Social media features</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">🥇</div>
              <h3 className="text-lg font-bold text-primary mb-3">Gold Partner</h3>
              <p className="text-gray-300 text-sm mb-4">
                High-impact branding with stage presence and exclusive activation opportunities.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Stage branding</li>
                <li>• Activation booth</li>
                <li>• Digital presence</li>
                <li>• Merchandise inclusion</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">🥈</div>
              <h3 className="text-lg font-bold text-primary mb-3">Silver Partner</h3>
              <p className="text-gray-300 text-sm mb-4">
                Strategic brand placement with digital marketing support and venue presence.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Website placement</li>
                <li>• Social mentions</li>
                <li>• Program inclusion</li>
                <li>• Networking access</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">📺</div>
              <h3 className="text-lg font-bold text-primary mb-3">Media Partner</h3>
              <p className="text-gray-300 text-sm mb-4">
                Cross-promotional opportunities with content collaboration and audience sharing.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Content partnership</li>
                <li>• Cross-promotion</li>
                <li>• Press credentials</li>
                <li>• Exclusive interviews</li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="500" className="text-center mt-12">
            <Link
              href="/register/sponsorship"
              className="inline-block px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-secondary transition-colors duration-200 transform hover:scale-105"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <CarouselLabel word="giving back • community impact • zaama foundation" />
      <div id="foundation">
        <FoundationSection />
      </div>

      {/* Partnership Success Stories */}
      <section className="px-5 py-16 bg-[#161616] sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-aos="fade-up"
            className={`${blatantBold.className} text-2xl md:text-3xl font-bold text-primary mb-12`}
          >
            PARTNERSHIP SUCCESS STORIES
          </h2>
          
          <div className="space-y-8">
            <div data-aos="fade-up" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "Partnering with Zaama Disco has been incredible for our brand. The energy, authenticity, and reach of this event perfectly aligns with our values and has helped us connect with our target audience in a meaningful way."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold text-primary">Partner Testimonial</p>
                  <p className="text-sm text-gray-400">Previous Event Sponsor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 py-16 bg-gradient-to-r from-primary/10 to-secondary/10 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-aos="fade-up"
            className={`${blatantBold.className} text-2xl md:text-3xl font-bold text-primary mb-6`}
          >
            READY TO PARTNER WITH US?
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join us in creating Ghana's most exciting cultural celebration. Let's build something amazing together.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register/sponsorship"
              className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-secondary transition-colors duration-200 transform hover:scale-105"
            >
              🤝 Partnership Inquiry
            </Link>
            
            <Link
              href="/register/general"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/10 transition-colors duration-200"
            >
              📞 Contact Us
            </Link>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className="mt-8 text-gray-400">
            <p>Partnership Team: +233 24 447 5597 | partnerships@zaamadisco.com</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
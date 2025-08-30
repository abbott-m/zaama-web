import React from "react";
import localFont from "next/font/local";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});

const TransportationSection = () => {
  return (
    <section className="px-5 py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] sm:px-10 md:px-20 lg:px-28">
      <div className="max-w-6xl mx-auto">
        <p
          data-aos="fade-down"
          className={`${blatantBold.className} text-center text-xl font-medium mb-12 tracking-wider text-primary uppercase md:text-2xl`}
        >
          Getting There & Leaving
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Parking */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                🚗
              </div>
              <h3 className={`${blatant.className} text-lg font-semibold text-primary uppercase tracking-wide`}>
                Parking
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Limited parking is available at venue</li>
              <li>• Arrive early to secure a spot</li>
              <li>• Follow marshals and signs for smooth entry</li>
            </ul>
          </div>

          {/* Ride-Sharing */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                🚕
              </div>
              <h3 className={`${blatant.className} text-lg font-semibold text-green-400 uppercase tracking-wide`}>
                Ride-Sharing
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• We recommend using Uber, Bolt, Yango, etc.</li>
              <li>• Dedicated drop-off & pick-up zones near main gate</li>
              <li>• Share your ride details with a friend for safety</li>
            </ul>
          </div>

          {/* Shuttle Services */}
          <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                🚌
              </div>
              <h3 className={`${blatant.className} text-lg font-semibold text-orange-400 uppercase tracking-wide`}>
                Shuttles
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Official Zaama Disco shuttles from key pick-up points</li>
              <li>• Affordable rates + safe rides with fellow Blacko Tribe members</li>
              <li>• Shuttle schedules shared closer to event date</li>
            </ul>
          </div>

          {/* On Foot */}
          <div data-aos="fade-up" data-aos-delay="400" className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                🚶
              </div>
              <h3 className={`${blatant.className} text-lg font-semibold text-purple-400 uppercase tracking-wide`}>
                Walking
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• If you live nearby, walking with friends is a vibe</li>
              <li>• Plus, no traffic stress</li>
              <li>• Join the street energy leading to the venue</li>
            </ul>
          </div>
        </div>

        {/* Leaving the Festival */}
        <div data-aos="fade-up" className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-500/20">
          <h3 className={`${blatant.className} text-xl font-semibold text-red-400 uppercase tracking-wide mb-6 text-center`}>
            🌙 Leaving the Festival
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto">
                ⏰
              </div>
              <h4 className="font-semibold text-red-300">Plan Ahead</h4>
              <p className="text-sm text-gray-300">The event ends late, so plan your ride ahead of time</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto">
                👥
              </div>
              <h4 className="font-semibold text-orange-300">Stay Together</h4>
              <p className="text-sm text-gray-300">Stick with your group—squads move together</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto">
                🚐
              </div>
              <h4 className="font-semibold text-yellow-300">After-Party</h4>
              <p className="text-sm text-gray-300">Official after-party shuttle routes announced for General Plus & VIP guests</p>
            </div>
          </div>
        </div>

        {/* Safety Notice */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-8 bg-blue-900/20 rounded-xl p-6 border border-blue-500/20 text-center">
          <h4 className={`${blatant.className} text-lg font-semibold text-blue-400 uppercase tracking-wide mb-3`}>
            Safety First
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Always share your transportation details with someone you trust. Stay aware of your surroundings, 
            keep your belongings secure, and don't hesitate to ask festival staff for assistance if needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransportationSection;
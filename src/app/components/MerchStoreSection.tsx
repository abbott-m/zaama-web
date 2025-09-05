// src/app/components/MerchStoreSection.tsx
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const logikBold = localFont({
  src: "../Logik-font//Logik-Bold.otf",
});

const logik = localFont({
  src: "../Logik-font//Logik.otf",
});

const MerchStoreSection = () => {
  const merchItems = [
    {
      id: 1,
      name: "Blacko Tribe T-Shirt",
      price: "₵120",
      image: "/images/merch-tshirt.jpg", // You'll need to add these images
      category: "Apparel",
      available: true,
    },
    {
      id: 2,
      name: "Zaama Disco Hoodie",
      price: "₵250",
      image: "/images/merch-hoodie.jpg",
      category: "Apparel",
      available: true,
    },
    {
      id: 3,
      name: "Iron Boy Cap",
      price: "₵80",
      image: "/images/merch-cap.jpg",
      category: "Accessories",
      available: true,
    },
    {
      id: 4,
      name: "Concert Tote Bag",
      price: "₵60",
      image: "/images/merch-tote.jpg",
      category: "Accessories",
      available: true,
    },
    {
      id: 5,
      name: "Limited Edition Poster",
      price: "₵40",
      image: "/images/merch-poster.jpg",
      category: "Collectibles",
      available: false, // Coming soon
    },
    {
      id: 6,
      name: "Blacko Tribe Phone Case",
      price: "₵30",
      image: "/images/merch-wristband.jpg",
      category: "Accessories",
      available: true,
    },
  ];

  const handlePreOrder = (itemName: string) => {
    // This would typically link to your e-commerce platform
    window.open(
      `mailto:info@zaamadisco.com?subject=Pre-order: ${itemName}&body=I would like to pre-order the ${itemName}. Please send me more details about availability and payment.`,
      '_blank'
    );
  };

  const handleShopNow = () => {
    // Link to your main merch store
    window.open('https://your-merch-store.com', '_blank');
  };

  return (
    <section className="px-5 py-16 bg-gradient-to-br from-[#1a1f2e] via-[#2d2d2d] to-[#1a1f2e] sm:px-10 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            data-aos="fade-down"
            className={`${logikBold.className} text-xl font-medium mb-4 tracking-wider text-primary uppercase md:text-2xl`}
          >
            Official Merch Store
          </p>
          <p
            data-aos="fade-up"
            className="text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Rep the Blacko Tribe with exclusive Zaama Disco merchandise. 
            Limited edition drops available at the event and online!
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {merchItems.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 transition-all duration-300 hover:scale-105 hover:border-primary/50 ${
                !item.available && "opacity-75"
              }`}
            >
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl opacity-20">👕</div>
                {!item.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </span>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`${logik.className} text-lg font-semibold text-white`}>
                    {item.name}
                  </h3>
                  <span className={`${logik.className} text-xl font-bold text-primary`}>
                    {item.price}
                  </span>
                </div>

                <button
                  onClick={() => item.available ? handlePreOrder(item.name) : null}
                  disabled={!item.available}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    item.available
                      ? "bg-primary text-black hover:bg-secondary"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {item.available ? "Pre-Order Now" : "Coming Soon"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div data-aos="fade-up" className="mb-12">
          <h3 className={`${logik.className} text-xl font-semibold text-primary text-center mb-8`}>
            Shop by Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/20 text-center">
              <div className="text-4xl mb-3">👕</div>
              <h4 className="font-semibold text-purple-300 mb-2">Apparel</h4>
              <p className="text-sm text-gray-300">T-shirts, hoodies, and more</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/20 text-center">
              <div className="text-4xl mb-3">🎒</div>
              <h4 className="font-semibold text-blue-300 mb-2">Accessories</h4>
              <p className="text-sm text-gray-300">Bags, caps, and jewelry</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-600/20 to-green-800/20 rounded-xl p-6 border border-green-500/20 text-center">
              <div className="text-4xl mb-3">🖼️</div>
              <h4 className="font-semibold text-green-300 mb-2">Collectibles</h4>
              <p className="text-sm text-gray-300">Limited edition items</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div data-aos="fade-up" className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 text-center">
          <h3 className={`${logik.className} text-2xl font-bold text-primary mb-4`}>
            Get Exclusive Access
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Be the first to know about new drops, limited editions, and special concert-day exclusives. 
            Join the Blacko Tribe and never miss out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleShopNow}
              className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              Visit Full Store
            </button>
            
            <button
              onClick={() => window.open('mailto:info@zaamadisco.com?subject=Merch Updates', '_blank')}
              className="px-8 py-3 bg-transparent border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-200"
            >
              Get Updates
            </button>
          </div>
        </div>

        {/* Concert Day Info */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-12 text-center">
          <h4 className={`${logik.className} text-lg font-semibold text-white mb-4`}>
            📍 Concert Day Shopping
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <h5 className="font-semibold text-primary mb-2">At the Venue</h5>
              <p className="text-sm text-gray-300">
                Visit our official merch booths throughout the concert grounds. 
                Exclusive concert-day items available!
              </p>
            </div>
            
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <h5 className="font-semibold text-primary mb-2">Cashless Payments</h5>
              <p className="text-sm text-gray-300">
                Use the concert's cashless system for quick and easy purchases. 
                No cash needed!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="300" className="text-center mt-8 text-gray-400 text-sm">
          <p>Questions about orders or sizing? Contact us:</p>
          <p className="text-primary mt-1">info@zaamadisco.com</p>
        </div>
      </div>
    </section>
  );
};

export default MerchStoreSection;
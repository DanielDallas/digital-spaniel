import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-1/2 pr-6">
            <div className="grid grid-rows-4 gap-4">
              <div className="row-span-3">
                <h1 className="text-4xl font-bold mb-4">Title</h1>
                <p className="text-lg mb-4">Subtitle</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Call to Action
                </button>
              </div>
              <div className="row-span-1">
                <p>Additional text</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('src/Spaniel-hero-bg.png')" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
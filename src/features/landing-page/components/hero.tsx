import { Button } from '@/components/ui/button';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 lg:py-20 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Text Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover Your Style
            <br />
            <span className="text-indigo-500">Shop Confidently</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Upgrade your wardrobe with the latest trends, styles, and collections curated for you.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <Button className="bg-indigo-500 text-white hover:bg-indigo-600">Shop Now</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Learn More
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Fashion"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 z-[-1]">
        <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 h-full w-full opacity-80"></div>
      </div>
    </section>
  );
};

export default Hero;

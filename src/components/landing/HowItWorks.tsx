
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">How It Works</h2>
          <p className="text-white/80 mt-2">Get started in just a few simple steps.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold text-white">1</div>
            <p className="text-white">Create your account</p>
          </div>
          <div className="h-1 w-12 bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold text-white">2</div>
            <p className="text-white">Set up your availability</p>
          </div>
          <div className="h-1 w-12 bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold text-white">3</div>
            <p className="text-white">Start accepting appointments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

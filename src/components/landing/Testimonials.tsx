
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">What Our Users Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-white/80 italic">"This system has saved me so much time. I can't imagine going back to my old way of scheduling."</p>
            <p className="text-white font-bold mt-4">- Dr. Jane Doe</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-white/80 italic">"My clients love how easy it is to book appointments online. It has really improved my business."</p>
            <p className="text-white font-bold mt-4">- John Smith, Stylist</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <p className="text-white/80 italic">"The automated reminders are a lifesaver. My no-show rate has dropped to almost zero."</p>
            <p className="text-white font-bold mt-4">- Sarah Lee, Tutor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

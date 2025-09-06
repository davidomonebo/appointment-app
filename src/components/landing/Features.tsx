
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Features</h2>
          <p className="text-white/80 mt-2">Everything you need to manage your appointments efficiently.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-lg text-center">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Easy Scheduling</h3>
            <p className="text-white/80 mt-2">Schedule appointments with ease using our intuitive calendar interface.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg text-center">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Automated Reminders</h3>
            <p className="text-white/80 mt-2">Reduce no-shows with automated email and SMS reminders for your clients.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg text-center">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Client Management</h3>
            <p className="text-white/80 mt-2">Keep track of your clients and their appointment history in one place.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

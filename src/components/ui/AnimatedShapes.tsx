
import React from 'react';

const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute -bottom-80 -left-80 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-pulse-slow"></div>
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-20 animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 opacity-20 animate-pulse-slow animation-delay-4000"></div>
    </div>
  );
};

export default AnimatedShapes;


import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

const CTA = () => {
  const router = useRouter();

  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white">Ready to get started?</h2>
        <p className="text-white/80 mt-2 mb-8">Create an account today and streamline your appointment scheduling.</p>
        <Button type="primary" size="large" onClick={() => router.push('/register')}>
          Sign Up Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;

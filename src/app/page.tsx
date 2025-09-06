'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AnimatedShapes from '@/components/ui/AnimatedShapes';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      router.push('/appointments');
    }
  }, [router]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-sky-900 via-indigo-900 to-gray-900 text-white">
      {/* Top navigation */}
      <header className="fixed left-0 right-0 top-0 z-20 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">AMS</span>
            <span className="text-lg font-semibold">Appointment Management</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <button className="text-white/80 hover:text-white" onClick={() => router.push('/')}>Home</button>
            <button className="text-white/80 hover:text-white" onClick={() => router.push('/about-us')}>About</button>
            <button className="text-white/80 hover:text-white" onClick={() => router.push('/contact-us')}>Contact</button>
          </nav>
          <div className="flex gap-3">
            <Button onClick={() => router.push('/login')}>Login</Button>
            <Button type="primary" onClick={() => router.push('/register')}>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Animated background */}
      <AnimatedShapes />
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="rounded-2xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-lg md:p-12">
          <h1 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
            Streamline Appointments with Ease
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            Schedule, manage, and track appointments with a modern, intuitive dashboard.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button type="primary" size="large" onClick={() => router.push('/register')}>
              Create Free Account
            </Button>
            <Button size="large" onClick={() => router.push('/login')}>
              Sign In
            </Button>
            <Button size="large" ghost onClick={() => router.push('/appointments')}>
              View Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <main className="relative z-10 w-full">
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

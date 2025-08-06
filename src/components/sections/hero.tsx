"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap, ArrowRightCircle } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_background.png"
          alt="High-precision metal part background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
          priority
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto max-w-5xl px-4 md:px-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-orange-100/10 border border-orange-400 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            <span>Powering the Future with Precision</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-xl animate-fadeInUp">
            Battery Connectors Redefined
          </h1>
        </FadeIn>

        {/* Subheading */}
        <FadeIn className="delay-200">
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-orange-200 font-light leading-relaxed">
            Advanced, Reliable & Precision-Engineered Solutions for EV, ESS, and Power Transmission Industries.  
            <br className="hidden sm:block" />
            Made in India. Trusted Worldwide.
          </p>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn className="delay-400">
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 text-white font-bold text-lg px-8 py-6 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20"
            >
              <a href="#gallery" className="flex items-center gap-2">
                Our Products <ArrowRightCircle size={20} />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-orange-300 font-bold text-lg px-8 py-6 rounded-full border-orange-300 hover:bg-orange-100/10 hover:border-orange-400 transition-all duration-300"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Down Arrow */}
      <FadeIn className="delay-500">
        <a
          href="#about"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-orange-300 hover:text-orange-400 transition-colors duration-300 animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </FadeIn>
    </section>
  );
}

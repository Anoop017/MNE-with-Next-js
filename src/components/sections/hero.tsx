import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background of precision engineering"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="dark abstract technology"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full z-5" style={{
        background: `radial-gradient(circle at 20% 30%, hsla(180, 100%, 50%, 0.1), transparent 30%),
                     radial-gradient(circle at 80% 70%, hsla(260, 100%, 50%, 0.1), transparent 30%)`
      }}></div>

      <div className="relative z-20 container mx-auto max-w-5xl px-4 md:px-8">
        <FadeIn>
          <div className='inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6'>
            <Zap size={16} />
            <span>Powering the Future with Precision</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400">
            Engineered Excellence
          </h1>
        </FadeIn>
        <FadeIn className='delay-200'>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-primary/70 font-body">
            MNE pioneers the manufacturing of high-precision components for the world’s most demanding industries. Innovation, quality, and performance are forged into every part we create.
          </p>
        </FadeIn>
        <FadeIn className='delay-400'>
          <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold text-lg px-8 py-6 rounded-full hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
              <a href="#gallery">
                Our Products
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-primary/80 font-bold text-lg px-8 py-6 rounded-full border-primary/20 hover:border-accent hover:text-accent bg-transparent hover:bg-accent/10 transition-all duration-300">
              <a href="#about">
                Learn More
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>

      <FadeIn className='delay-500'>
        <a href="#about" aria-label="Scroll down" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-primary/50 hover:text-accent transition-colors duration-300 animate-bounce">
          <ArrowDown size={24} />
        </a>
      </FadeIn>
    </section>
  );
}

'use client'
import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/fade-in';
import { CheckCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const features = [
  "Uncompromising Quality Control",
  "State-of-the-Art Manufacturing",
  "Dedicated Engineering Support",
  "On-Time Delivery, Every Time"
];

const carouselImages = [
  { src: "https://placehold.co/600x600.png", hint: "modern factory" },
  { src: "https://placehold.co/600x600.png", hint: "engineering team" },
  { src: "https://placehold.co/600x600.png", hint: "cnc machine" },
  { src: "https://placehold.co/600x600.png", hint: "quality inspection" },
  { src: "https://placehold.co/600x600.png", hint: "automated assembly" }
];

export default function AboutSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[plugin.current]}
              className="relative aspect-square max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl -rotate-6 transition-transform duration-500 hover:rotate-0 z-10 pointer-events-none"></div>
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={image.src}
                      alt={`MNE Components facility image ${index + 1}`}
                      width={600}
                      height={600}
                      className="relative object-cover z-0 w-full h-full"
                      data-ai-hint={image.hint}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </FadeIn>
          <FadeIn delay={200} className="space-y-6">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Decades of Precision, <br/>
              A Future of Innovation.
            </h2>
            <p className="text-lg text-muted-foreground">
              MNE Components India Pvt. Ltd. is not just a manufacturer; we are a partner in progress. We specialize in producing high-precision sheet metal press components, fine blanked parts, and intricate machined components for leading automotive and engineering firms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={400 + index * 100}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="font-medium text-primary/90">{feature}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

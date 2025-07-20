"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn } from '@/components/fade-in';
import { Maximize } from 'lucide-react';

const galleryCategories = {
  'Sheet Metal': [
    { src: 'https://placehold.co/800x600.png', alt: 'Sheet metal component', hint: 'metal bracket', title: 'Stamped Bracket' },
    { src: 'https://placehold.co/800x600.png', alt: 'Sheet metal housing', hint: 'metal parts', title: 'Chassis Component' },
    { src: 'https://placehold.co/800x600.png', alt: 'Perforated metal sheet', hint: 'metal fabrication', title: 'Enclosure Panel' },
    { src: 'https://placehold.co/800x600.png', alt: 'Complex metal stamping', hint: 'industrial parts', title: 'Mounting Plate' },
  ],
  'Fine Blanking': [
    { src: 'https://placehold.co/800x600.png', alt: 'Fine blanked gear', hint: 'precision gear', title: 'High-Torque Gear' },
    { src: 'https://placehold.co/800x600.png', alt: 'Fine blanked automotive part', hint: 'automotive part', title: 'Locking Plate' },
    { src: 'https://placehold.co/800x600.png', alt: 'Set of fine blanked components', hint: 'metal gears', title: 'Planetary Gear Set' },
    { src: 'https://placehold.co/800x600.png', alt: 'Close-up of a fine blanked edge', hint: 'metal detail', title: 'Actuator Lever' },
  ],
  'Machined': [
    { src: 'https://placehold.co/800x600.png', alt: 'CNC machined part', hint: 'machined metal', title: 'CNC Milled Housing' },
    { src: 'https://placehold.co/800x600.png', alt: 'Turned metal component', hint: 'metal lathe', title: 'Shaft Component' },
    { src: 'https://placehold.co/800x600.png', alt: 'Intricate machined part', hint: 'complex machinery', title: 'Valve Body' },
    { src: 'https://placehold.co/800x600.png', alt: 'Machined aluminum block', hint: 'aluminum block', title: 'Heat Sink' },
  ],
  'Assemblies': [
    { src: 'https://placehold.co/800x600.png', alt: 'Assembled components', hint: 'industrial assembly', title: 'Hinge Assembly' },
    { src: 'https://placehold.co/800x600.png', alt: 'Mechanical sub-assembly', hint: 'mechanical parts', title: 'Braking System' },
    { src: 'https://placehold.co/800x600.png', alt: 'Electronic component assembly', hint: 'electronics assembly', title: 'Sensor Housing Unit' },
    { src: 'https://placehold.co/800x600.png', alt: 'Multiple parts assembled', hint: 'engineering assembly', title: 'Gearbox Sub-Assembly' },
  ],
  'Insert Molded': [
    { src: 'https://placehold.co/800x600.png', alt: 'Insert molded part', hint: 'molded plastic', title: 'Overmolded Connector' },
    { src: 'https://placehold.co/800x600.png', alt: 'Metal part inside plastic', hint: 'plastic metal', title: 'Reinforced Handle' },
    { src: 'https://placehold.co/800x600.png', alt: 'Plastic component with metal inserts', hint: 'plastic part', title: 'Mounting Frame' },
    { src: 'https://placehold.co/800x600.png', alt: 'Complex insert molded piece', hint: 'industrial plastic', title: 'Control Knob' },
  ],
};

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Product Showcase</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A visual journey through our state-of-the-art facility and the high-quality components we produce.
          </p>
        </FadeIn>

        <FadeIn>
          <Tabs defaultValue="Sheet Metal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto mb-8">
              {Object.keys(galleryCategories).map(category => (
                <TabsTrigger key={category} value={category} className="py-3 text-sm md:text-base">{category}</TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(galleryCategories).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {images.map((image, index) => (
                    <FadeIn key={index} delay={index * 100}>
                      <Dialog>
                        <DialogTrigger asChild>
                           <Card className="overflow-hidden group relative cursor-pointer rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:border-accent">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={800}
                              height={600}
                              className="object-cover w-full h-auto aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                              data-ai-hint={image.hint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="font-headline text-2xl font-bold text-white">{image.title}</h3>
                                <div className="mt-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                                    <Maximize size={16} />
                                    <span>View Larger</span>
                                </div>
                            </div>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-transparent border-0">
                          <div className="max-h-[90vh]">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={1200}
                              height={900}
                              className="w-full h-full object-contain rounded-lg"
                              data-ai-hint={image.hint}
                            />
                          </div>
                        </DialogContent>
                       </Dialog>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="mt-20 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-lg">
              <Link href="/gallery">View Full Product Gallery</Link>
            </Button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

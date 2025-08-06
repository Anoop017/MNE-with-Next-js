import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/fade-in';

const capabilities = [
  {
    name: 'Cell-to-Cell Connectors',
    description:
      'Compatible with cylindrical, prismatic, and pouch cell types. Made from Copper, Aluminium & Clad Materials. Designed for EV battery systems and ESS modules.',
    image: '/capabilities/Cell to Cell Connectors.png',
    hint: 'copper battery connectors',
  },
  {
    name: 'Flexible & Hybrid Busbars',
    description:
      'Laminated busbars in Copper and Aluminum. High current capacity with excellent vibration performance. Customizable insulation, layout, and thermal needs.',
    image: '/capabilities/Flexibles in notice Board.png',
    hint: 'laminated copper busbar',
  },
  {
    name: 'Stamped & Formed Components',
    description:
      'Manufactured using high-speed progressive stamping. Materials include Cu, Ni, Al, Clad & Stainless Steel. Precision-engineered for high-volume production.',
    image: '/capabilities/stamped .png',
    hint: 'stamped copper components',
  },
  {
    name: 'Laser Welded Components',
    description:
      'Suitable for both similar and dissimilar metal joining. Clean, strong, and reliable connections. Ideal for high-power battery pack applications.',
    image: '/capabilities/Welding_2.jpg',
    hint: 'laser welding battery tabs',
  },
  {
    name: 'Nickel / Tin Plated Components',
    description:
      'Corrosion-resistant plating for improved conductivity and performance. Custom solutions for EV, industrial, and consumer electronics applications.',
    image: '/capabilities/nickel.png',
    hint: 'nickel plated electrical parts',
  },
  {
    name: 'Switchgear Profile & Steel Belts',
    description:
      'High-precision steel compression belts and custom switchgear components tailored for robust industrial use.',
    image: '/capabilities/switchgear.png',
    hint: 'steel compression belts',
  },
];

export default function ProductsSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Core Capabilities
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We specialize in precision engineering, metal forming, and modular component manufacturing tailored for EVs, energy storage, and high-performance industrial needs.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((item, index) => (
            <FadeIn key={item.name} delay={index * 100}>
              <Card className="group rounded-xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border bg-white">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={900}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={item.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </div>
                <CardContent className="p-5">
                  <CardTitle className="font-headline text-xl font-semibold text-primary">
                    {item.name}
                  </CardTitle>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

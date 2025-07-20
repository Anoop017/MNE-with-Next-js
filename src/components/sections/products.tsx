import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/fade-in';

const products = [
  { name: 'Press Components', description: 'High-volume, precision-stamped metal parts for various applications.', image: 'https://placehold.co/600x400.png', hint: 'metal parts' },
  { name: 'Fine Blanked Components', description: 'Superior edge quality and flatness for critical performance parts.', image: 'https://placehold.co/600x400.png', hint: 'precision gear' },
  { name: 'Machined Components', description: 'Complex geometries and tight tolerances achieved through CNC machining.', image: 'https://placehold.co/600x400.png', hint: 'machined metal' },
  { name: 'Insert Molded Components', description: 'Combining metal and plastic for robust, integrated solutions.', image: 'https://placehold.co/600x400.png', hint: 'molded plastic' },
  { name: 'Automotive Parts', description: 'Safety-critical and functional components for the automotive sector.', image: 'https://placehold.co/600x400.png', hint: 'car parts' },
  { name: 'Sub Assemblies', description: 'Complete assembled units, ready for integration into your production line.', image: 'https://placehold.co/600x400.png', hint: 'industrial assembly' },
];

export default function ProductsSection() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Core Capabilities</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            From individual components to complex sub-assemblies, our manufacturing expertise covers a wide spectrum of industrial needs.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={index * 100}>
              <Card className="group rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 border">
                <CardHeader className="p-0 relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={product.hint}
                  />
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white/90">{product.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-6 bg-card">
                  <CardTitle className="font-headline text-2xl font-bold text-primary">
                    {product.name}
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

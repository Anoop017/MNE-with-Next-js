'use client'
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FadeIn } from '@/components/fade-in';
import { Maximize } from 'lucide-react';

const toolRoomItems = [
  { src: 'https://placehold.co/800x600.png', alt: 'Wire Cut Machine', hint: 'wire cut machine', title: 'Wire Cut Machine' },
  { src: 'https://placehold.co/800x600.png', alt: 'VMC Machine', hint: 'vmc machine', title: 'VMC Machine' },
  { src: 'https://placehold.co/800x600.png', alt: 'CNC Machine', hint: 'cnc machine', title: 'CNC Turning Center' },
  { src: 'https://placehold.co/800x600.png', alt: 'Surface Grinder', hint: 'surface grinder', title: 'Surface Grinder' },
  { src: 'https://placehold.co/800x600.png', alt: 'Die Assembly', hint: 'tool die', title: 'Precision Die Assembly' },
  { src: 'https://placehold.co/800x600.png', alt: 'Tool Inspection', hint: 'tool inspection', title: 'Tool & Die Inspection' },
];

export default function ToolRoomSection() {
  return (
    <section id="tool-room" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">In-House Tool Room</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            With the help of wire cut machines, VMC and CNC machines, we are capable of developing high precision tools and dies as per customer requirement.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolRoomItems.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Dialog>
                <DialogTrigger asChild>
                   <Card className="overflow-hidden group relative cursor-pointer rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:border-accent">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-auto aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={item.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="font-headline text-2xl font-bold text-white">{item.title}</h3>
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
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={900}
                      className="w-full h-full object-contain rounded-lg"
                      data-ai-hint={item.hint}
                    />
                  </div>
                </DialogContent>
               </Dialog>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FadeIn } from '@/components/fade-in';
import { Maximize, ArrowLeft } from 'lucide-react';
import MainLayout from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';



const flexibleBusbarImages1 = [
  { src: '/gallery/Flexible 1.jpg' },
  { src: '/gallery/Flexible 2.jpg' },
  { src: '/gallery/Flexible 3.jpg' },
];
const flexibleBusbarImages2 = [
  { src: '/gallery/Flexible 4.jpg' },
  { src: '/gallery/Flexible 5.jpg' },
  { src: '/gallery/Flexible 6.jpg' },
];
const flexibleBusbarImages3 = [
  { src: '/gallery/Flexible 7.jpg' },
  { src: '/gallery/Flexible 8.jpg' },
  { src: '/gallery/Flexible 9.jpg' },
];

const placeholderImages = [
  { src: 'https://placehold.co/800x600.png' },
  { src: 'https://placehold.co/800x600.png' },
  { src: 'https://placehold.co/800x600.png' },
];

const galleryCategories = {
  'Flexible Busbars': [
    { title: 'Flexible Busbar 1', description: 'Flexible busbar products.', hint: 'flexible busbar', images: flexibleBusbarImages1 },
    { title: 'Flexible Busbar 2', description: 'Gallery of flexible busbar products.', hint: 'flexible busbar', images: flexibleBusbarImages2 },
    { title: 'Flexible Busbar 3', description: 'Gallery of flexible busbar products.', hint: 'flexible busbar', images: flexibleBusbarImages3 },
  ],
  'Nickel / Tin Plated Components': [
    { title: 'Tin Plated Terminal', description: 'Corrosion-resistant tin-plated terminal for electrical connections.', hint: 'terminal tin', images: placeholderImages },
    { title: 'Nickel Plated Contactor', description: 'Durable nickel-plated contactor for high-wear switchgear applications.', hint: 'contactor nickel', images: placeholderImages },
    { title: 'Plated Bracket', description: 'Protective plating on steel brackets for harsh environments.', hint: 'bracket plated', images: placeholderImages },
  ],
  'Laser Welded Components': [
    { title: 'Laser Welded Shunt', description: 'Precision laser-welded shunt resistor for current sensing.', hint: 'welded shunt', images: placeholderImages },
    { title: 'Welded Battery Tab', description: 'Strong and reliable laser-welded tabs for battery cells.', hint: 'welded battery', images: placeholderImages },
    { title: 'Bi-Metal Weldment', description: 'Joining dissimilar metals like copper and aluminum with precision laser welding.', hint: 'welded bimetal', images: placeholderImages },
  ],
  'Copper & Aluminium Cell to Cell Connectors': [
    { title: 'Flexible Cell Connector', description: 'Flexible connectors for managing thermal expansion in battery packs.', hint: 'connector battery', images: placeholderImages },
    { title: 'Solid Copper Connector', description: 'High-current solid copper connectors for prismatic cells.', hint: 'connector copper', images: placeholderImages },
    { title: 'Aluminum Pouch Cell Connector', description: 'Lightweight aluminum connectors for pouch cell battery modules.', hint: 'connector aluminum', images: placeholderImages },
  ],
  'Steel Compression Belts': [
    { title: 'Battery Module Belt', description: 'High-tensile steel belts for compressing battery modules.', hint: 'steel belt', images: placeholderImages },
    { title: 'Structural Compression Band', description: 'Custom-engineered compression bands for structural applications.', hint: 'steel band', images: placeholderImages },
    { title: 'Precision Tension Belt', description: 'Steel belts manufactured to precise tension specifications.', hint: 'steel tension', images: placeholderImages },
  ],
  'Switch Gear Products': [
    { title: 'Switchgear Contact Assembly', description: 'Complete contact assemblies for medium and high-voltage switchgear.', hint: 'switchgear contact', images: placeholderImages },
    { title: 'Arc Chute Component', description: 'Specialized components for arc chutes in circuit breakers.', hint: 'switchgear arc', images: placeholderImages },
    { title: 'Mechanism Linkage', description: 'Precision-engineered linkages for switchgear operating mechanisms.', hint: 'switchgear mechanism', images: placeholderImages },
  ],
};

const slugify = (str: string) => str.toLowerCase().replace(/[\s\/&]+/g, '-').replace(/[^\w-]+/g, '');


const GalleryPage = () => {
  return (
    <MainLayout>
      <section id="gallery-page" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="flex justify-start mb-12">
            <Button asChild variant="outline" className="gap-2 font-bold transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:text-accent">
              <Link href="/">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
          <FadeIn className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Product Gallery</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Explore our wide range of precision-engineered components. Click on any product to see more details.
            </p>
          </FadeIn>

          <div className="space-y-20">
            {Object.entries(galleryCategories).map(([category, items]) => (
              <div key={category} id={slugify(category)} className="scroll-mt-32">
                <FadeIn>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary border-b-2 border-accent pb-4 mb-8">{category}</h2>
                </FadeIn>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {items.map((item, index) => (
                    <FadeIn key={index} delay={index * 50}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className="overflow-hidden group relative cursor-pointer rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:border-accent hover:-translate-y-1.5">
                            <Image
                              src={item.images[0].src}
                              alt={item.title}
                              width={800}
                              height={600}
                              className="object-cover w-full h-auto aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                              data-ai-hint={item.hint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-end p-5">
                              <h3 className="font-headline text-xl font-bold text-white">{item.title}</h3>
                              <div className="mt-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-sm">
                                <span>View Details</span>
                                <Maximize size={14} />
                              </div>
                            </div>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-card border-0 rounded-2xl overflow-hidden max-h-[90vh] flex flex-col">
                           <div className="overflow-y-auto min-h-0">
                              <div className="grid grid-cols-1 md:grid-cols-2">
                                  <div className="relative aspect-video md:aspect-square">
                                    <Carousel className="w-full h-full">
                                      <CarouselContent>
                                        {item.images.map((image, imgIndex) => (
                                          <CarouselItem key={imgIndex}>
                                            <div className="relative w-full h-0 pb-[100%]">
                                              <Image
                                                src={image.src}
                                                alt={`${item.title} - Image ${imgIndex + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="md:rounded-l-2xl"
                                                data-ai-hint={item.hint}
                                              />
                                            </div>
                                          </CarouselItem>
                                        ))}
                                      </CarouselContent>
                                      <CarouselPrevious className="left-4" />
                                      <CarouselNext className="right-4" />
                                    </Carousel>
                                  </div>
                                  <div className="p-8 flex flex-col justify-center">
                                      <DialogHeader className="text-left">
                                          <DialogTitle className="font-headline text-3xl text-primary">{item.title}</DialogTitle>
                                      </DialogHeader>
                                      <div className="mt-6 text-lg text-primary/90 flex-grow">
                                          <p>{item.description}</p>
                                      </div>
                                      <div className="mt-8 text-sm text-muted-foreground">
                                          <p>For quotes and technical specifications, please contact our sales team.</p>
                                      </div>
                                  </div>
                              </div>
                           </div>
                        </DialogContent>
                      </Dialog>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default GalleryPage;

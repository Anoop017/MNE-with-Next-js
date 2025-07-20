'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FadeIn } from '@/components/fade-in';
import { Maximize, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/main-layout';

const equipmentItems = [
  { src: 'https://placehold.co/800x600.png', alt: 'CMM Machine', hint: 'quality inspection', title: 'Coordinate Measuring Machine (CMM)', description: 'High-precision 3D measurement for complex geometries, ensuring parts meet exact specifications.', measurements: 'Dimensional accuracy, GD&T, profile analysis.' },
  { src: 'https://placehold.co/800x600.png', alt: 'Profile Projector', hint: 'optical measurement', title: 'Profile Projector', description: 'Optical measurement for 2D profiles, ideal for inspecting small parts and features.', measurements: 'Angles, lengths, radii, and thread profiles.' },
  { src: 'https://placehold.co/800x600.png', alt: 'Surface Roughness Tester', hint: 'surface test', title: 'Surface Roughness Tester', description: 'Measures surface texture to ensure components meet functional requirements for friction and wear.', measurements: 'Ra, Rz, and other roughness parameters.' },
  { src: 'https://placehold.co/800x600.png', alt: 'Hardness Tester', hint: 'material testing', title: 'Hardness Tester', description: 'Determines material hardness to verify heat treatment processes and material specifications.', measurements: 'Rockwell, Brinell, and Vickers hardness scales.' },
  { src: 'https://placehold.co/800x600.png', alt: 'Contour Measuring Machine', hint: 'contour analysis', title: 'Contour Measuring Machine', description: 'Traces the contour of a part to analyze fine details and complex shapes.', measurements: 'Contour deviation, chamfer analysis, radii.' },
  { src: 'https://placehold.co/800x600.png', alt: 'X-Ray Fluorescence (XRF) Analyzer', hint: 'material analysis', title: 'XRF Analyzer', description: 'Provides non-destructive elemental analysis to verify material composition and coating thickness.', measurements: 'Material grade, alloy composition, coating thickness.' },
  { src: 'https://placehold.co/800x600.png', alt: 'Plating Thickness Tester', hint: 'coating measurement', title: 'Plating Thickness Tester', description: 'Measures the thickness of coatings like zinc, nickel, and tin for corrosion resistance.', measurements: 'Coating thickness in microns.' },
  { src: 'https://placehold.co/800x600.png', alt: 'Salt Spray Test Chamber', hint: 'corrosion test', title: 'Salt Spray Test Chamber', description: 'Simulates a corrosive environment to test the durability and resistance of coatings.', measurements: 'Corrosion resistance over time.' },
  { src: 'https://placehold.co/800x600.png', alt: 'Vision Measuring System', hint: 'vision inspection', title: 'Vision Measuring System', description: 'Automated, non-contact measurement for high-volume inspection of small components.', measurements: 'Automated dimensional checks, feature recognition.' },
  { src: 'https://placehold.co/800x600.png', alt: 'Force Gauge', hint: 'force testing', title: 'Force Gauge', description: 'Measures insertion, extraction, and breaking force for assembled components.', measurements: 'Tensile and compressive force.' },
];

const QualityLabPage = () => {
  return (
    <MainLayout>
      <section id="quality-lab-page" className="py-24 md:py-32 bg-background">
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
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Quality Lab: Testing Equipment</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We utilize a comprehensive suite of advanced testing equipment to ensure every component meets the highest standards of quality and precision.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {equipmentItems.map((item, index) => (
              <FadeIn key={index} delay={index * 50}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden group relative cursor-pointer rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:border-accent hover:-translate-y-1.5">
                      <Image
                        src={item.src}
                        alt={item.alt}
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
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="md:rounded-l-2xl"
                                    data-ai-hint={item.hint}
                                />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <DialogHeader className="text-left">
                                    <DialogTitle className="font-headline text-3xl text-primary">{item.title}</DialogTitle>
                                    <DialogDescription className="text-base text-muted-foreground pt-2">
                                        {item.description}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="mt-6 text-lg text-primary/90 flex-grow">
                                    <p className='font-semibold text-primary/80'>Can Measure / Test:</p>
                                    <p className='text-muted-foreground'>{item.measurements}</p>
                                </div>
                                <div className="mt-8 text-sm text-muted-foreground">
                                    <p>For detailed test reports and capabilities, please contact our quality team.</p>
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
      </section>
    </MainLayout>
  );
};

export default QualityLabPage;

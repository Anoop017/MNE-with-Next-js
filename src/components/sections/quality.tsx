import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/fade-in';
import { ShieldCheck, Workflow, Search, Layers } from 'lucide-react';

const qualityItems = [
  {
    title: 'ISO Certification',
    description: 'Adhering to ISO 9001:2015 standards, ensuring the highest quality management systems.',
    icon: <ShieldCheck className="h-12 w-12 text-accent" />,
  },
  {
    title: 'Compliance',
    description: 'Meeting rigorous industry and customer-specific standards for all components.',
    icon: <Workflow className="h-12 w-12 text-accent" />,
  },
  {
    title: 'In-Process Inspection',
    description: 'Continuous monitoring at every stage of production to guarantee component integrity.',
    icon: <Search className="h-12 w-12 text-accent" />,
  },
  {
    title: 'Traceability',
    description: 'Complete end-to-end tracking of materials and processes for full accountability.',
    icon: <Layers className="h-12 w-12 text-accent" />,
  },
];

export default function QualitySection() {
  return (
    <section id="quality" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Quality and Certifications</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Our commitment to quality is unwavering. We employ stringent processes and advanced equipment to deliver perfection.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100}>
              <Card className="text-center h-full flex flex-col items-center justify-start p-6 rounded-2xl bg-card border transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                <CardHeader className="p-0">
                  {item.icon}
                  <CardTitle className="font-headline text-2xl font-bold text-primary mt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 flex-grow">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-20 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-lg">
              <Link href="/quality-lab">Explore Our Quality Lab</Link>
            </Button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

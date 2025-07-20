import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/fade-in';
import { ArrowRight, MapPin, Briefcase, ArrowLeft } from 'lucide-react';

const jobOpenings = [
  {
    title: "CNC Machine Operator",
    location: "Nashik, Maharashtra",
    description: "Operate CNC machinery to produce high-precision components. Must have experience with Fanuc controls.",
  },
  {
    title: "Quality Assurance Engineer",
    location: "Nashik, Maharashtra",
    description: "Develop and implement quality control systems to ensure products meet stringent standards.",
  },
  {
    title: "Logistics Coordinator",
    location: "Nashik, Maharashtra",
    description: "Manage supply chain and logistics operations, from inventory to dispatch.",
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="py-24 md:py-32 bg-secondary">
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
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Build Your Future With Us
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We're always looking for talented individuals to join our team. Explore our current openings and take the next step in your career.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job, index) => (
            <FadeIn key={index} delay={index * 150}>
              <Card className="h-full flex flex-col bg-card border rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary flex items-start gap-3">
                    <Briefcase className="text-accent mt-1 flex-shrink-0" />
                    <span>{job.title}</span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-2 text-muted-foreground">
                    <MapPin size={16} />
                    {job.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full bg-accent/10 text-accent font-bold border border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                    <a href="#contact">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600}>
            <div className="mt-20 text-center bg-card p-8 rounded-2xl border">
                <h3 className="font-headline text-2xl font-bold text-primary">Don't see your role?</h3>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                    We are always on the lookout for exceptional talent. If you believe you have what it takes to contribute to our success, send us your resume.
                </p>
                <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
                    <a href="mailto:careers@mnecomponents.com">Submit Your Resume</a>
                </Button>
            </div>
        </FadeIn>
      </div>
    </section>
  );
}

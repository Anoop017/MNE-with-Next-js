'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Building, Send, Map } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { useToast } from '@/hooks/use-toast';

const WhatsAppIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.48 1.32 5.02L2 22l5.25-1.42c1.48.78 3.13 1.2 4.79 1.2h.01c5.46 0 9.91-4.45 9.91-9.89 0-5.44-4.45-9.89-9.91-9.89zM16.4 15.2c-.18-.1-.99-.49-1.14-.54-.15-.05-.26-.08-.37.08-.11.16-.43.54-.53.65-.1.11-.2.13-.37.03s-.71-.26-1.35-.58c-1.02-.5-1.83-1.28-2.1-1.66-.18-.28-.36-.56-.36-.84 0-.25.11-.48.24-.63.13-.15.28-.35.42-.51.11-.13.17-.23.26-.38.08-.15.04-.28-.02-.38-.06-.1-.56-1.35-.77-1.84-.21-.49-.42-.42-.58-.42-.15 0-.33-.02-.5-.02s-.46.06-.7.31c-.24.25-.93.9-1.08 2.18-.15 1.28.14 2.45.33 2.7.19.25 1.73 2.68 4.2 3.72.59.25 1.05.4 1.41.51.61.2 1.17.16 1.62.1.48-.06 1.42-.58 1.62-.92.2-.34.2-.64.14-.74-.06-.1-.2-.16-.37-.26z" />
    </svg>
  );

export default function ContactSection() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Let&apos;s Build Together</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or need a quote for a specific component? Our team is ready to assist you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <Card className="bg-card border rounded-2xl p-4 lg:p-8 h-full">
              <CardHeader>
                <CardTitle className='font-headline text-3xl text-primary'>Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg mt-4">
                <div className="flex items-start gap-4">
                  <Building className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary/90">Head Office & Works</h3>
                    <address className="text-muted-foreground not-italic mt-2">
                      D-11, MIDC Satpur<br />
                      Nashik - 422007<br />
                      Maharashtra, India
                    </address>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-7 w-7 text-accent flex-shrink-0" />
                  <a href="tel:+917034248006" className="hover:text-accent transition-colors duration-300 text-primary/90">+91-7034248006</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-7 w-7 text-accent flex-shrink-0 flex items-center justify-center">
                    <WhatsAppIcon />
                  </div>
                  <a href="https://wa.me/917034248006" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300 text-primary/90">+91-7034248006</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-7 w-7 text-accent flex-shrink-0" />
                  <a href="mailto:info@mnecomponents.com" className="hover:text-accent transition-colors duration-300 text-primary/90">info@mnecomponents.com</a>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Card className="bg-card border rounded-2xl p-4 lg:p-8">
              <CardHeader>
                <CardTitle className='font-headline text-3xl text-primary'>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="space-y-2">
                    <Input id="name" placeholder="Your Name" required className="bg-input/50 h-12 text-lg focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Input id="email" type="email" placeholder="Your Email" required className="bg-input/50 h-12 text-lg focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Textarea id="message" placeholder="Your Message" rows={5} required className="bg-input/50 text-lg focus:border-accent" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground font-bold text-lg h-14 hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
        
        <FadeIn delay={400}>
          <div className="mt-16 rounded-2xl overflow-hidden border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.520461245041!2d73.74312637593257!3d19.98661602410313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebab45347693%3A0x44284d724949b863!2sMNE%20COMPONENTS%20INDIA%20PVT.LTD.!5e0!3m2!1sen!2sin!4v1722345678901!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MNE Components Location"
            ></iframe>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                <a href="https://www.google.com/maps/dir/?api=1&destination=19.9995130,73.7437065" target="_blank" rel="noopener noreferrer">
                    <Map />
                    Get Directions
                </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

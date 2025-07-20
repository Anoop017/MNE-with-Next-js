import React from 'react';
import Link from 'next/link';
import { MneLogo } from '@/components/mne-logo';
import { Mail, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#products', label: 'Products' },
  { href: '/#gallery', label: 'Showcase' },
  { href: '/#contact', label: 'Contact' },
];

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

export default function Footer() {
  return (
    <footer id="footer" className="bg-secondary border-t">
      <div className="container mx-auto max-w-screen-xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <MneLogo />
            <p className="mt-4 text-sm max-w-xs text-muted-foreground">
              Pioneering precision engineering for tomorrow's technology.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:info@mnecomponents.com" className="text-muted-foreground hover:text-accent transition-colors"><Mail size={24} /></a>
               <a href="https://wa.me/917034248006" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><WhatsAppIcon /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-primary text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
               <li>
                <Link href="/careers" className="text-muted-foreground transition-colors hover:text-accent">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-primary text-lg">Get in Touch</h3>
            <address className="mt-4 space-y-3 text-muted-foreground not-italic">
              <p>
                D-11, MIDC Satpur<br />
                Nashik - 422007<br />
                Maharashtra, India
              </p>
              <p>Phone: <a href="tel:+917034248006" className="hover:text-accent">+91-7034248006</a></p>
              <p>WhatsApp: <a href="https://wa.me/917034248006" target="_blank" rel="noopener noreferrer" className="hover:text-accent">+91-7034248006</a></p>
              <p>Email: <a href="mailto:info@mnecomponents.com" className="hover:text-accent">info@mnecomponents.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MNE Components India Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

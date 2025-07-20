"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MneLogo } from '@/components/mne-logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, ChevronDown } from 'lucide-react';
import { useActiveSection } from '@/hooks/use-active-section';

const mainNavLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
];

const productCategories = [
  'Flexible Busbars',
  'Nickel / Tin Plated Components',
  'Laser Welded Components',
  'Copper & Aluminium Cell to Cell Connectors',
  'Steel Compression Belts',
  'Switch Gear Products',
];

const slugify = (str: string) => str.toLowerCase().replace(/[\s\/&]+/g, '-').replace(/[^\w-]+/g, '');

const contactLink = { id: 'contact', label: 'Contact' };

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const allSectionIds = [...mainNavLinks.map(link => link.id), 'gallery', 'tool-room', 'quality', contactLink.id];
  const activeSection = useActiveSection(allSectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isGalleryPage = pathname.startsWith('/gallery');

  const NavLink = ({ id, label }: { id: string, label: string }) => {
    const isHomePage = pathname === '/';
    const href = isHomePage ? `#${id}` : `/#${id}`;
    
    return (
      <a 
        href={href} 
        className={cn(
          "font-headline font-medium text-lg transition-all duration-300 relative py-2",
          activeSection === id ? "text-accent" : "text-primary/70 hover:text-primary",
          "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-accent after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
          activeSection === id ? "after:scale-x-100 after:origin-bottom-left" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {label}
      </a>
    );
  };

  const desktopNavContent = (
    <nav className="hidden lg:flex items-center gap-8 text-sm">
      {mainNavLinks.map(link => <NavLink key={link.id} id={link.id} label={link.label} />)}
      
      {/* Products Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "font-headline font-medium text-lg transition-all duration-300 relative py-2 flex items-center gap-1",
              (activeSection === 'gallery' || isGalleryPage) ? "text-accent" : "text-primary/70 hover:text-primary",
              "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-accent after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
              (activeSection === 'gallery' || isGalleryPage) ? "after:scale-x-100 after:origin-bottom-left" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
            )}
          >
            Products <ChevronDown size={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-card/80 backdrop-blur-lg">
          {productCategories.map(category => (
            <DropdownMenuItem key={category} asChild>
              <Link href={`/gallery#${slugify(category)}`} className="cursor-pointer">{category}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <NavLink key={contactLink.id} id={contactLink.id} label={contactLink.label} />
    </nav>
  );

  const mobileNavContent = (
      <nav className="flex flex-col gap-6 text-2xl text-center">
        {mainNavLinks.map(link => <NavLink key={link.id} id={link.id} label={link.label} />)}

        {/* Mobile Products Accordion */}
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="products" className="border-b-0">
                <AccordionTrigger 
                  className={cn("font-headline font-medium text-2xl justify-center transition-all duration-300 relative py-2 hover:no-underline",
                  (activeSection === 'gallery' || isGalleryPage) ? "text-accent" : "text-primary/70 hover:text-primary"
                )}>
                    Products
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                    <div className="flex flex-col gap-4 items-center">
                        {productCategories.map(category => (
                            <Link 
                                key={category} 
                                href={`/gallery#${slugify(category)}`} 
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-body text-xl text-primary/70 hover:text-accent"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <NavLink key={contactLink.id} id={contactLink.id} label={contactLink.label} />

        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground font-bold" onClick={() => setMobileMenuOpen(false)}>
          <a href="#contact">Get a Quote</a>
        </Button>
      </nav>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 shadow-2xl backdrop-blur-lg border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex h-24 items-center justify-between">
          <MneLogo />
          <div className="hidden lg:flex items-center gap-6">
            {desktopNavContent}
          </div>
          <div className='hidden lg:flex items-center gap-2'>
            <Button asChild className="bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
          <div className="lg:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-8 w-8 text-accent" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-background/90 backdrop-blur-xl border-l p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-12">
                  <MneLogo />
                </div>
                {mobileNavContent}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

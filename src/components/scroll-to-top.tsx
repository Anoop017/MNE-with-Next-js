'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        size="icon"
        onClick={scrollToTop}
        className={cn(
          'h-14 w-14 rounded-full bg-primary/80 text-primary-foreground shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary',
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </Button>
    </div>
  );
};

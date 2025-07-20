import React from 'react';
import { cn } from '@/lib/utils';

export const MneLogo = ({ className, textClassName }: { className?: string, textClassName?: string }) => {
  return (
    <a href="#home" className={cn("flex items-center gap-3", className)}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-accent'>
        <path d="M4 4L12 12L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 4L12 12L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className={cn("font-headline font-bold text-2xl text-primary", textClassName)}>
        MNE
      </span>
    </a>
  );
};

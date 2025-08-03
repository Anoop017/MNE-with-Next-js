
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const MneLogo = ({ className, textClassName }: { className?: string, textClassName?: string }) => {
  return (
    <a href="#home" className={cn("flex items-center gap-1", className)}>
      <Image
        src="/logo.png"
        alt="MNE Logo"
        width={50}
        height={50}
        className="object-contain"
        priority
      />
      <span className={cn("font-headline font-bold text-2xl text-primary", textClassName)}>
        MNE Components India Pvt Ltd
      </span>
    </a>
  );
};

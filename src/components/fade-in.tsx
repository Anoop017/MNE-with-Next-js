"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
};

export const FadeIn: React.FC<FadeInProps> = ({ children, className, as: Tag = 'div', delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <Tag
      ref={domRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

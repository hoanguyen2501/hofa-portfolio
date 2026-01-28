'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
}

export function Carousel({
  children,
  className = '',
  showDots = true,
  autoplay = false,
  autoplayDelay = 5000,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);

    return () => clearInterval(intervalId);
  }, [emblaApi, autoplay, autoplayDelay]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border shadow-lg hover:bg-secondary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-foreground" />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border shadow-lg hover:bg-secondary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-foreground" />
      </button>

      {/* Dots Navigation */}
      {showDots && scrollSnaps.length > 0 && (
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? 'bg-primary w-8'
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

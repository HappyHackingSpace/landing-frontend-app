'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern workspace with laptop and coffee',
  },
  {
    src: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Team collaboration at office',
  },
  {
    src: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Digital technology concept',
  },
];

const HeroCarousel = () => {
  const t = useTranslation();

  return (
    <div className="w-full relative">
      <Carousel
        opts={{
          loop: true,
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
                    {t.carousel.slogan}
                  </h2>
                  <Button 
                    size="lg" 
                    className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t.carousel.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8" />
        <CarouselNext className="right-4 md:right-8" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel; 
'use client';
import { Carousel } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { FC, PropsWithChildren } from 'react';

interface TestimonialCarouselProps extends PropsWithChildren {}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ children }) => {
  return (
    <Carousel opts={{ loop: false }} plugins={[Autoplay({ delay: 2000, stopOnMouseEnter: true })]}>
      {children}
    </Carousel>
  );
};

export default TestimonialCarousel;

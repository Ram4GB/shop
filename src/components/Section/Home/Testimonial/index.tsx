import { CarouselContent } from '@/components/ui/carousel';
import { FC } from 'react';

import customer1 from 'public/image/mock/customers/team-member-1.jpg';
import customer2 from 'public/image/mock/customers/team-member-2.jpg';
import customer3 from 'public/image/mock/customers/team-member-3.jpg';
import customer4 from 'public/image/mock/customers/team-member-4.jpg';

import TestimonialCarousel from './TestimonialCarousel';
import TestimonialItem from './TestimonialItem';

const testimonials = [
  {
    id: 1,
    name: 'Jane Cooper',
    image: customer1,
    description:
      'Love this coffee shop! Cozy atmosphere, excellent coffee, and friendly baristas. Perfect spot to relax or catch up with friends. Highly recommend!',
    star: 5,
  },
  {
    id: 2,
    name: 'John Doe',
    image: customer2,
    description:
      'My daily go-to for coffee! Great variety, delicious pastries, and top-notch service. A neighborhood gem!',
    star: 4,
  },
  {
    id: 3,
    name: 'Jane Smith',
    image: customer3,
    description:
      'Best coffee ever! High-quality beans, charming ambiance, and perfect for coffee lovers. A must-visit!',
    star: 5,
  },
  {
    id: 4,
    name: 'Peter Parker',
    image: customer4,
    description: `Discovered this coffee shop and it's now a favorite. Beautiful interior, fantastic drinks, and welcoming staff. Ideal for a morning or afternoon break.`,
    star: 4,
  },
];

interface TestimonialProps {}

const Testimonial: FC<TestimonialProps> = () => {
  return (
    <div>
      <TestimonialCarousel>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} item={testimonial} />
          ))}
        </CarouselContent>
      </TestimonialCarousel>
    </div>
  );
};

export default Testimonial;

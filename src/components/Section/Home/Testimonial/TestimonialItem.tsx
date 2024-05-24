import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CarouselItem } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import { StaticImageData } from 'next/image';
import { ComponentProps, FC } from 'react';

interface TestimonialProps extends ComponentProps<typeof CarouselItem> {
  item: {
    id: number;
    name: string;
    image: StaticImageData;
    description: string;
    star: number;
  };
}

const TestimonialItem: FC<TestimonialProps> = ({ item, ...props }) => {
  return (
    <CarouselItem {...props}>
      <div className="flex justify-center flex-col items-center">
        <Avatar className="h-[100px] w-[100px]">
          <AvatarImage src={item.image.src} className="object-cover" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-slate-700 font-medium text-lg mb-1">{item.name}</p>
        <p className="text-center max-w-[400px] text-slate-700">{item.description}</p>

        <div className="flex gap-2 mt-2">
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
          <Star className={item.star > 4 ? 'text-yellow-400' : 'text-slate-700'} />
        </div>
      </div>
    </CarouselItem>
  );
};

export default TestimonialItem;

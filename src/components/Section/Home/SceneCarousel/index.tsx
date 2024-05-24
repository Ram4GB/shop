import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

import image1 from 'public/image/mock/image-grid/angela-bailey-_uHBJNuKyk8-unsplash.jpg';
import image2 from 'public/image/mock/image-grid/ashkan-forouzani-YAC2qNeCyCk-unsplash.jpg';
import image3 from 'public/image/mock/image-grid/clifford-VobvKmG-StA-unsplash.jpg';
import image4 from 'public/image/mock/image-grid/do-nhu-Rz6gNjm03S4-unsplash.jpg';
import image5 from 'public/image/mock/image-grid/kal-visuals-PFC2fY9LE_g-unsplash.jpg';
import image6 from 'public/image/mock/image-grid/lee-campbell-31QfYo1h32o-unsplash.jpg';
import image7 from 'public/image/mock/image-grid/steffan-mitchell-gHrgeeCCkYA-unsplash.jpg';
import image8 from 'public/image/mock/image-grid/tomas-jasovsky-d5SZqLkpIrY-unsplash.jpg';
import image9 from 'public/image/mock/image-grid/tyler-nix-YVdhzpHD7E8-unsplash.jpg';
import { HTMLAttributes } from 'react';

interface ImageCollectionProps extends HTMLAttributes<HTMLDivElement> {
  items: StaticImageData[];
  duration?: number;
  delay?: number;
  imageClassName?: (index: number) => string;
}

const ImageCollection: React.FC<ImageCollectionProps> = ({
  items = [],
  duration = 10,
  delay = 0,
  imageClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('flex flex-col animate-image-grid-translate', className)}
      style={{ '--duration': duration, '--delay': delay } as React.CSSProperties}
      {...props}
    >
      {items.map((item, index) => (
        <div key={index} className={cn('w-full relative h-[400px] mt-4', imageClassName?.(index))}>
          <Image priority src={item} alt="" fill className="object-cover w-full h-full rounded-sm overflow-hidden" />
        </div>
      ))}
      {items.map((item, index) => (
        <div key={index} className={cn('w-full relative h-[400px] mt-4', imageClassName?.(index))}>
          <Image priority src={item} alt="" fill className="object-cover w-full h-full rounded-sm overflow-hidden" />
        </div>
      ))}
    </div>
  );
};

interface SceneCarouselProps {}

const SceneCarousel: React.FC<SceneCarouselProps> = () => {
  const col1 = [image1, image2, image3];
  const col2 = [image4, image5, image6];
  const col3 = [image7, image8, image9];
  const col3Group = [col3.slice(0, col3.length / 2), col3.slice(col3.length / 2)];

  // Todo: Colum 1 sometimes randoms images

  return (
    <div className="h-screen max-h-[900px] overflow-hidden relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ImageCollection
          items={[...col1, ...col3Group.flat(), ...col2]}
          imageClassName={(index) => {
            const isCol2 = index >= col1.length + col3.length;
            const isCol31 = index < col1.length + col3Group[0].length && index >= col1.length;
            const isCol32 =
              index < col1.length + col3Group[0].length + col3Group[1].length &&
              index >= col1.length + col3Group[0].length;

            let finalClassName = '';

            if (isCol31) {
              finalClassName = 'lg:hidden';
            }

            if (isCol32) {
              finalClassName = 'md:hidden';
            }

            if (isCol2) {
              finalClassName = 'md:hidden';
            }

            return finalClassName;
          }}
        />
        <ImageCollection
          className="hidden md:flex"
          items={[...col2, ...col3Group[1]]}
          delay={1}
          imageClassName={(index) => {
            const isCol3 = index >= col2.length;

            let finalClassName = '';

            if (isCol3) {
              finalClassName = 'lg:hidden';
            }

            return finalClassName;
          }}
        />
        <ImageCollection className="hidden lg:flex" items={[...col3]} delay={2} />
      </div>
      <div className="h-20 bg-white/20 absolute w-full inset-0 backdrop-blur-lg transition-all" />
      <div className="h-20 bg-white/20 absolute w-full bottom-0 backdrop-blur-lg transition-all" />
    </div>
  );
};

export default SceneCarousel;

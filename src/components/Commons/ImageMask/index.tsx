import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface ImageMaskProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  src?: string;
}

const ImageMask: FC<ImageMaskProps> = ({ children, src, className }) => {
  return (
    // <div
    //   className={cn(styles.mask, className)}
    //   style={{
    //     maskImage: `url(${src})`,
    //     WebkitMaskImage: `url(${src})`,
    //   }}
    // >
    // { children }
    // </div>
    children
  );
};

export default ImageMask;

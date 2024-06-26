import { cn } from '@/lib/utils';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface FooterHeadingProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

const FooterHeading: FC<FooterHeadingProps> = ({ children, className, ...props }) => {
  return (
    <h3
      className={cn('text-base font-bold mb-4 text-slate-700 uppercase border-b-4 border-slate-700 w-fit', className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export default FooterHeading;

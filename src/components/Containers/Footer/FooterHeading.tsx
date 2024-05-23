import { cn } from '@/lib/utils';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface FooterHeadingProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

const FooterHeading: FC<FooterHeadingProps> = ({ children, className, ...props }) => {
  return (
    <h3 className={cn('text-lg font-semibold mb-4 text-slate-700', className)} {...props}>
      {children}
    </h3>
  );
};

export default FooterHeading;

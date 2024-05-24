import { recursive } from '@/app/layout';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const headingVariants = cva('text-slate-700 font-semibold border-b-4 border-slate-700 w-fit mx-auto', {
  variants: {
    variant: {
      h1: 'text-6xl',
      h2: 'text-4xl',
      h3: 'text-3xl',
      h4: '',
      h5: '',
      h6: '',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

const Heading: React.FC<HeadingProps> = ({ children, as: Tag, className, ...props }) => {
  return (
    <Tag
      className={cn(
        headingVariants({
          variant: Tag,
        }),
        className,
        recursive.className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;

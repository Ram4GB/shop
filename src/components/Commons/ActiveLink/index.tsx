'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, FC } from 'react';

interface ActiveLinkProps extends ComponentProps<typeof Link> {
  allowSubPath?: boolean;
  activeClassName?: string;
}

const ActiveLink: FC<ActiveLinkProps> = ({
  href = '',
  children,
  allowSubPath,
  activeClassName = 'active',
  className,
  ...props
}) => {
  const pathname = usePathname();

  const finalClassName = cn(className, {
    [activeClassName]: allowSubPath ? pathname.startsWith(href.toString()) : pathname === href.toString(),
  });

  return (
    <Link href={href} className={finalClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;

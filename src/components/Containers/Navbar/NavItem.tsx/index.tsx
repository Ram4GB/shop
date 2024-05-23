import ActiveLink from '@/components/Commons/ActiveLink';
import { cn } from '@/lib/utils';
import { ComponentProps, FC } from 'react';
import styles from './index.module.css';

interface NavItemProps extends ComponentProps<typeof ActiveLink> {}

const NavItem: FC<NavItemProps> = ({ href, children, className, ...props }) => {
  return (
    <ActiveLink activeClassName={styles.active} href={href} className={cn(className, 'text-slate-700')} {...props}>
      {children}
    </ActiveLink>
  );
};

export default NavItem;

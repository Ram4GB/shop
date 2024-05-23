import ActiveLink from '@/components/Commons/ActiveLink';
import { ComponentProps, FC } from 'react';
import styles from './index.module.css';

interface NavItemProps extends ComponentProps<typeof ActiveLink> {}

const NavItem: FC<NavItemProps> = ({ href, children, ...props }) => {
  return (
    <ActiveLink activeClassName={styles.active} href={href} {...props}>
      {children}
    </ActiveLink>
  );
};

export default NavItem;

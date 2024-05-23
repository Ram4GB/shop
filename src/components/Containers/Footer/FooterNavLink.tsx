import ActiveLink from '@/components/Commons/ActiveLink';
import { ComponentProps, FC } from 'react';

interface FooterNavLinkProps extends ComponentProps<typeof ActiveLink> {}

const FooterNavLink: FC<FooterNavLinkProps> = ({ className, children, ...props }) => {
  return (
    <ActiveLink
      className="text-base font-normal text-slate-700 hover:underline hover:underline-offset-2"
      {...props}
      href={props.href}
    >
      {children}
    </ActiveLink>
  );
};

export default FooterNavLink;

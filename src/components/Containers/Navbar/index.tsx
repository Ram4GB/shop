import NodejsDark from '@/components/Icons/Logos/NodejsDark';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { FC } from 'react';
import NavItem from './NavItem.tsx';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className=" w-full h-16 flex items-center">
          <NodejsDark className="h-6 w-fit" />
          <div className="ml-auto hidden md:flex items-center gap-4">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/products">Products</NavItem>
            <span>|</span>
            <div className="flex gap-2 items-center">
              <Link
                href="/register"
                className={buttonVariants({
                  variant: 'default',
                })}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import NodejsDark from '@/components/Icons/Logos/NodejsDark';
import { buttonVariants } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import CartButton from './CartButton';
import NavItem from './NavItem.tsx';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="bg-slate-100/75 fixed w-full h-16 inset-0 backdrop-blur-lg transition-all z-10">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="w-full flex items-center">
          <NodejsDark className="w-16 h-14 relative mix-blend-multiply" />
          <div className="ml-auto hidden md:flex items-center gap-6">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/#about-us">About Us</NavItem>
            <NavItem href="/#our-products">Our Products</NavItem>
            <span>|</span>
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className={buttonVariants({
                  variant: 'default',
                  size: 'sm',
                })}
              >
                Login <LogIn className="ml-1" />
              </Link>
              <CartButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import CartDrawer from '@/components/CartDrawer';
import NodejsDark from '@/components/Icons/Logos/NodejsDark';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import CartButton from './CartButton';
import MenuButton from './MenuButton';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem.tsx';
import { menus } from './menu';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <>
      <nav className="bg-slate-100/75 fixed w-full h-16 inset-0 backdrop-blur-lg transition-all z-10">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="w-full flex items-center">
            <Link href="/">
              <NodejsDark className="w-16 h-14 relative mix-blend-multiply" />
            </Link>
            <div className="ml-auto hidden md:flex items-center gap-6">
              {menus.map((menu) => (
                <NavItem key={menu.name} href={menu.href}>
                  {menu.name}
                </NavItem>
              ))}
              <span>|</span>
              <div className="flex items-center gap-2">
                <Link
                  href={user ? '/api/auth/logout' : '/api/auth/login'}
                  className={cn(
                    buttonVariants({
                      variant: 'default',
                      size: 'sm',
                    }),
                    'text-base',
                  )}
                >
                  {!user ? (
                    <>
                      Sign in <LogIn className="ml-1" />
                    </>
                  ) : (
                    <>Logout 🥦</>
                  )}
                </Link>
                <CartButton />
              </div>
            </div>
            <div className="ml-auto md:hidden flex gap-2">
              <CartButton showTotalQuantity={false} />
              <MenuButton />
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu />
      <CartDrawer />
    </>
  );
};

export default Navbar;

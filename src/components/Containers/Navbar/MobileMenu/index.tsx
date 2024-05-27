'use client';
import { buttonVariants } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerPortal } from '@/components/ui/drawer';
import { AppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { FC, useContext } from 'react';
import { menus } from '../menu';

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = () => {
  const { openMenu, setOpenMenu } = useContext(AppContext);

  return (
    <Drawer open={openMenu} onOpenChange={setOpenMenu} direction="right">
      <DrawerPortal>
        <DrawerContent className="flex md:hidden bg-white flex-col rounded-t-[10px] min-h-screen rounded-none w-screen lg:max-w-[400px] min-w-[350px] mt-24 fixed bottom-0 right-0">
          <div className="flex flex-col gap-2 px-4">
            <p className="p-4 text-xl font-bold">Menu</p>
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className={cn(
                  buttonVariants({
                    variant: 'link',
                  }),
                  'text-lg text-left block',
                )}
              >
                {menu.name}
              </Link>
            ))}
            <div className="flex gap-2 pl-2 pt-4">
              <p
                className={cn(
                  buttonVariants({
                    variant: 'default',
                  }),
                  'text-lg text-left flex gap-2',
                )}
              >
                <LogIn />
                Login
              </p>
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default MobileMenu;

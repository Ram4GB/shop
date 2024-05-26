'use client';
import { buttonVariants } from '@/components/ui/button';
import { AppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { FC, useContext } from 'react';

const MenuButton: FC = () => {
  const { setOpenMenu, openMenu } = useContext(AppContext);

  return (
    <p
      className={cn(
        buttonVariants({
          variant: 'default',
        }),
        'text-lg text-left flex gap-2',
      )}
      onClick={() => setOpenMenu?.(true)}
    >
      <Menu />
    </p>
  );
};

export default MenuButton;

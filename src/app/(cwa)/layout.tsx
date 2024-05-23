import WithFooter from '@/components/withFooter';
import { FC, PropsWithChildren } from 'react';
import WithNavbar from '../../components/withNavbar';

interface LayoutProps extends PropsWithChildren<{}> {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-svh">
      <WithNavbar />
      {children}
      <WithFooter />
    </div>
  );
};

export default Layout;

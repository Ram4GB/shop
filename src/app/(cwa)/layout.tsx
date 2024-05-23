import { FC, PropsWithChildren } from 'react';
import WithNavbar from '../../components/withNavbar';

interface LayoutProps extends PropsWithChildren<{}> {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <WithNavbar />
      {children}
    </>
  );
};

export default Layout;

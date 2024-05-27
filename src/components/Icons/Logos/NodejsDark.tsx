import Image from 'next/image';
import logo from 'public/logo.png';
import type { FC, HTMLAttributes } from 'react';

const NodejsDark: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={className} {...props}>
    <Image className="mix-blend-multiply w-full h-full" fill src={logo} alt="logo" />
  </div>
);

export default NodejsDark;

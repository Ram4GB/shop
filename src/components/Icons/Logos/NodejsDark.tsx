import Image from 'next/image';
import logo from 'public/next.svg';
import type { FC, HTMLAttributes } from 'react';

const NodejsDark: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={className} {...props}>
    <Image fill src={logo} alt="logo" />
  </div>
);

export default NodejsDark;

import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';
import styles from './index.module.css';

interface DescriptionContentProps extends PropsWithChildren {}

const DescriptionContent: FC<DescriptionContentProps> = ({ children }) => {
  return <div className={cn(styles['description-content'])}>{children}</div>;
};

export default DescriptionContent;

'use client';
import { Badge } from '@nextui-org/react';

type Props = {
  children: React.ReactNode;
  content?: number;
  size?: 'sm' | 'md' | 'lg';
};

function BadgeParent({ children, content, size = 'sm' }: Props) {
  return (
    <Badge
      size={size}
      className='border-none absolute -right-1 -top-1'
      color='primary'
      content={content}
    >
      {children}
    </Badge>
  );
}

export default BadgeParent;

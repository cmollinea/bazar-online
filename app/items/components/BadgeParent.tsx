'use client';
import { Badge } from '@nextui-org/react';

type Props = {
  children: React.ReactNode;
  content?: number;
};

function BadgeParent({ children, content }: Props) {
  return (
    <Badge
      size='sm'
      className='border-none absolute -right-1 -top-1'
      color='primary'
      content={content}
    >
      {children}
    </Badge>
  );
}

export default BadgeParent;

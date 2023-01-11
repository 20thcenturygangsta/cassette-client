import Image from 'next/image';
import { ReactNode } from 'react';

import { Children } from './style';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Image
        src="/assets/backgroundImg.svg"
        alt="배경 이미지"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Children>{children}</Children>
    </>
  );
};

export default Layout;

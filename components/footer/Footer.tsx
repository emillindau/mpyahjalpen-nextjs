import Image from 'next/legacy/image';
import { FooterStyle } from './Footer.styles';

export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <Image
          src="/images/we-support.png"
          height={270}
          width={270}
          alt="we support"
        />
      </div>
    </FooterStyle>
  );
};

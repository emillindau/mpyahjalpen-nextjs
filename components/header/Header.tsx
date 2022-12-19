import Image from 'next/legacy/image';
import { BannerWrapper, HeaderStyle, MobileHeaderStyle } from './Header.styles';

export const Header = () => {
  return (
    <HeaderStyle>
      <BannerWrapper>
        <Image
          priority
          src="/images/new-logo.png"
          height={234}
          width={800}
          alt="logo"
        />
      </BannerWrapper>
    </HeaderStyle>
  );
};

export const HeaderMobile = () => {
  return (
    <MobileHeaderStyle>
      <BannerWrapper>
        <Image
          priority
          src="/images/new-logo.png"
          height={234}
          width={800}
          alt="logo"
        />
      </BannerWrapper>
    </MobileHeaderStyle>
  );
};

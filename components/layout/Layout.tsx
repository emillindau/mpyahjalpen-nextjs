import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { Footer } from '../footer/Footer';
import { Header, HeaderMobile } from '../header/Header';
import { Navbar } from '../navbar/Navbar';
import {
  LayoutStyle,
  MainContent,
  SideBar,
  QRCodeWrapper,
} from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle>
      <Head>
        <meta name="og:title" content="Mpyahjälpen" />
        <meta name="description" content="2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMobile />
      <SideBar>
        <Link passHref href="https://bossan.musikhjalpen.se/mpyahjaelpen">
          <QRCodeWrapper>
            <Image
              src="/images/QR-kod.png"
              height={150}
              width={150}
              alt="QR-kod"
            />
          </QRCodeWrapper>
        </Link>
        <Navbar />
      </SideBar>
      <MainContent>
        <Header />
        <main>{children}</main>
      </MainContent>
      <Footer />
    </LayoutStyle>
  );
};

import { NavContainer, NavContent } from './Navbar.styles';
import NavbarItem from './nav-item/NavItem';

export const Navbar = () => {
  return (
    <NavContainer>
      <NavContent>
        <NavbarItem href="/" text="Start"></NavbarItem>
        <NavbarItem href="/auctions" text="Auctions"></NavbarItem>
        <NavbarItem href="/playlist" text="Playlist"></NavbarItem>
        <NavbarItem href="/cells" text="The fight"></NavbarItem>
        <NavbarItem href="/donations" text="Donations"></NavbarItem>
        <NavbarItem href="/history" text="History"></NavbarItem>
        <NavbarItem
          href="https://bossan.musikhjalpen.se/mpyahjaelpen"
          text="Bössan"
        ></NavbarItem>
      </NavContent>
    </NavContainer>
  );
};

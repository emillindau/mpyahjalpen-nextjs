//NavItem Wrapper
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import { ActiveLink, ActiveMarker, PassiveLink } from './Navitem.styles';

const ActiveNav = ({ href, text }) => {
  const router = useRouter();
  const currentRoute =
    router.asPath.split('/').length > 2
      ? `/${router.asPath.split('/')[1]}`
      : router.asPath;

  return (
    <Link href={href} passHref={true} legacyBehavior>
      {currentRoute === href ? (
        <ActiveLink className="active-link">
          {text}
          <ActiveMarker></ActiveMarker>
        </ActiveLink>
      ) : (
        <PassiveLink>{text}</PassiveLink>
      )}
    </Link>
  );
};

export default ActiveNav;

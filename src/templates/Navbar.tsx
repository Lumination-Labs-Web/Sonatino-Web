import Link from 'next/link';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Navbar = () => {
  return (
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/docs">
          <a>Docs</a>
        </Link>
      </li>
      <li>
        <Link href={AppConfig.github_link}>
          <a target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Link>
      </li>
      <li>
        <Link href={AppConfig.purchase_link}>
          <a>Purchase</a>
        </Link>
      </li>
    </NavbarTwoColumns>
  );
};

export { Navbar };

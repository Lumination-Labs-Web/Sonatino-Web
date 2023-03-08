import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
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
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };

import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const Banner = () => (
  <Section>
    <CTABanner
      title="Your next audio project awaits."
      subtitle="Get started with Sonatino today."
      button={
        <Link href={AppConfig.purchase_link}>
          <a>
            <Button>Buy on Amazon</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };

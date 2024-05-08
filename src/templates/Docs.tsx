import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Docs = ({
  latest,
  children,
}: {
  latest?: boolean;
  children: React.ReactNode;
}) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <Navbar />
      </Section>
    </Background>
    <Background color={latest ? 'bg-gray-800' : 'bg-gray-700'}>
      <Section yPadding="py-2 px-8">
        <p className="text-white text-sm text-center">
          {latest ? (
            <Link href="/docs/v2.6">
              <a>Click here for earlier boards</a>
            </Link>
          ) : (
            <Link href="/docs">
              <a>Click here for the latest documentation</a>
            </Link>
          )}
          .
        </p>
      </Section>
    </Background>
    {children}
    <Banner />
    <Footer />
  </div>
);

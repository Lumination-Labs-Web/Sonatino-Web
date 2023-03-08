import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import TextTransition, { presets } from 'react-text-transition';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Navbar } from './Navbar';

const MainFeatures = [
  'audio processing',
  'synthesizer',
  'audio player',
  'audio recorder',
  'real-time DSP',
  'sound effects',
  'internet radio',
  'audio streaming',
  'voice assistant',
];

const MinDelay = 600;
const MaxDelay = 1500;

const Hero = () => {
  const router = useRouter();
  const [featureIndex, setFeatureIndex] = useState(0);
  const [delay, setDelay] = useState((MaxDelay + MinDelay) / 2);

  useEffect(() => {
    const timer = setTimeout(() => {
      const deltaDelay = Math.random() * 200 - 100;
      setDelay(Math.max(MinDelay, Math.min(MaxDelay, delay + deltaDelay)));
      setFeatureIndex((featureIndex + 1) % MainFeatures.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [featureIndex, delay]);

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <Navbar />
      </Section>

      <Section yPadding="pb-32">
        <div className="w-3/4 sm:w-1/2 sm:mt-10 ml-auto mr-auto px-2 lg:pb-4 sm:scale-150">
          <img
            src={`${router.basePath}/assets/images/sonatino.png`}
            alt="Sonatino PCB"
            width={1200}
            height={795}
          />
        </div>
        <HeroOneButton
          title={
            <>
              {'Introducing the ultimate\n'}
              <span className="text-secondary-500 bg-primary-100">
                <TextTransition
                  inline
                  springConfig={presets.gentle}
                  style={{
                    width: '25rem',
                    justifyContent: 'center',
                    maxWidth: '100%',
                  }}
                >
                  {MainFeatures[featureIndex]}
                </TextTransition>
              </span>
              {' board.'}
            </>
          }
          description="Unlimited audio versatility in a compact form factor."
          button={
            <Link href={AppConfig.purchase_link}>
              <a>
                <Button xl>Buy on Amazon</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };

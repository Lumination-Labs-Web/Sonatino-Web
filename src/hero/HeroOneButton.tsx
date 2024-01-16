import { ReactNode } from 'react';

import Link from 'next/link';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-4xl leading-snug sm:leading-hero sm:text-5xl text-gray-900 whitespace-pre-line font-bold">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>

    {props.button}
    {/* <div className="text-xl mt-2 text-red-700 font-bold">
      Limited supply available now. More on the way.
    </div> */}
    <div className="text-xl mt-2 text-red-700 font-bold">
      Currently out of stock. New revision coming.
    </div>
    <div className="text-xl mt-2 text-gray-700 max-w-screen-sm ml-auto mr-auto">
      <b>Update - January 16, 2024</b>: Additional testing showed that the board
      would benefit from improved power circuitry (for battery and direct
      power). I&apos;m currently testing these changes and am very excited to
      make this available again soon! I appreciate your patience. It will be
      worth the wait!
    </div>
    <div className="text-gray-700">
      Use the{' '}
      <Link href="/contact">
        <a className="font-bold text-blue-800">contact form</a>
      </Link>{' '}
      to request notification when in stock.
    </div>
  </header>
);

export { HeroOneButton };

import { ReactNode } from 'react';

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
    <div className="text-xl mt-2 text-red-700 font-bold">
      Currently out of stock, but more are on the way!
    </div>
  </header>
);

export { HeroOneButton };

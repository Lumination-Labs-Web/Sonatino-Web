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

    <div className="mb-8 p-4 border border-blue-500 bg-blue-100 text-blue-700 rounded">
      <div className="text-xl font-bold text-center">
        Sonatino Featured in OpenAI Live Demo!
      </div>
      To show off their new Realtime API, OpenAI used Sonatino in their{' '}
      <a
        className="font-semibold text-blue-700"
        href="https://openai.com/12-days/"
      >
        12 Days of OpenAI
      </a>{' '}
      live demo.
      <br />
      The demo featured a plush reindeer toy (with Sonatino stuffed inside),
      programmed to listen and respond to spoken questions in real-time. Watch
      it{' '}
      <a
        href="https://youtu.be/14leJ1fg4Pw?si=Sa0rszsIh8P0VvQl&t=796"
        className="underline text-blue-700"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
      .
    </div>

    {props.button}
    <div className="text-xl mt-2 text-red-700 font-bold">
      Currently out of stock, but more are on the way!
    </div>
  </header>
);

export { HeroOneButton };

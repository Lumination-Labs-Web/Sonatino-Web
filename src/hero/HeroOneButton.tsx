import { ReactNode } from 'react';

import { List } from '../templates/List';

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
      Limited supply available now. More on the way.
    </div>
    <div className="text-xl mt-2 text-gray-700 max-w-screen-sm ml-auto mr-auto">
      <b>Revision 3.1.3 has been released!</b>
    </div>
    <div className="text-sm mt-4 max-w-screen-sm ml-auto mr-auto inline-block">
      <List
        titleClassName="text-left ml-4"
        listClassName="inline-block text-left"
        title="Changes in the latest revision include:"
        items={[
          'Improved speaker output (3.2W amp)',
          'More robust audio jack',
          'Programmable RGB LED',
          'Improved protection in power circuitry',
          'External antenna for more flexibility',
          'Improved noise performance',
          'Power off pin (for charging while off)',
          'Battery charging from VIN (in addition to USB-C)',
          'Optional battery monitoring',
        ]}
      />
    </div>
  </header>
);

export { HeroOneButton };

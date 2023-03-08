import { ReactNode } from 'react';

import className from 'classnames';

type ISectionProps = {
  title?: string;
  description?: ReactNode;
  yPadding?: string;
  children: ReactNode;
  left?: boolean;
  titleNoMargin?: boolean;
  titleClass?: string;
  id?: string;
};

const Section = (props: ISectionProps) => {
  const titleContainerClass = className({
    'mb-12': !props.titleNoMargin,
    'text-center': !props.left,
  });

  return (
    <div
      className={`max-w-screen-lg mx-auto px-4 ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
      id={props.id}
    >
      {(props.title || props.description) && (
        <div className={titleContainerClass}>
          {props.title && (
            <h2
              className={props.titleClass ?? 'text-3xl text-gray-900 font-bold'}
            >
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-10">{props.description}</div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
};

export { Section };

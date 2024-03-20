import { ReactNode } from 'react';

const List = (props: {
  title?: ReactNode;
  items: ReactNode[];
  numbered?: boolean;
  titleClassName?: string;
  listClassName?: string;
}) => {
  return (
    <>
      {props.title && (
        <h3 className={`text-md font-semibold ${props.titleClassName}`}>
          {props.title}
        </h3>
      )}
      {props.numbered ? (
        <ol className={`list-decimal ml-6 ${props.listClassName}`}>
          {props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul className={`list-disc ml-8 ${props.listClassName}`}>
          {props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export { List };

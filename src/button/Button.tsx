import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  submit?: boolean;
  disabled?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <button
      className={btnClass}
      type={props.submit ? 'submit' : undefined}
      disabled={props.disabled}
    >
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-secondary-500;
          }

          .btn-primary:hover {
            @apply bg-secondary-600;
          }

          .btn:disabled {
            @apply bg-secondary-300 cursor-not-allowed;
          }
        `}
      </style>
    </button>
  );
};

export { Button };

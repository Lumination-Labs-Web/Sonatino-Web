type InputProps = {
  inputClass?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  [key: string]: any;
  textarea?: boolean;
};

export const Input = ({
  inputClass,
  value,
  onChange,
  textarea,
  ...restProps
}: InputProps) => {
  const className = `
    form-control
    block
    px-4
    py-2
    text-xl
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    my-2
    focus:text-gray-700 focus:bg-white focus:border-primary-500 focus:outline-none
    placeholder-gray-500
    ${inputClass}
  `;

  return textarea ? (
    <textarea
      value={value}
      onChange={onChange}
      className={className}
      {...restProps}
    />
  ) : (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={className}
      {...restProps}
    />
  );
};

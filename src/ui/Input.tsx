type InputProps = {
  type: string;
  id: string;
  label: string;
  name: string;
  required?: boolean;
  inputProps?: object;
};

const Input = ({
  type,
  id,
  label,
  name,
  required = true,
  inputProps,
}: InputProps) => {
  return (
    <div className="flex justify-between items-center">
      <label htmlFor={id} className="pr-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        {...inputProps}
        className="h-10"
      ></input>
    </div>
  );
};

export default Input;

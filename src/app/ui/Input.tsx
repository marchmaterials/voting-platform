type InputProps = {
  type: string;
  id: string;
  label: string;
  name: string;
};

const Input = ({ type, id, label, name }: InputProps) => {
  return (
    <div className="flex justify-between align-center">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} className="h-10"></input>
    </div>
  );
};

export default Input;

const Input = ({ type, id, label }: InputProps) => {
  return (
    <>
      <label id={id}>{label}</label>
      <input type={type} id={id} className="h-10"></input>
    </>
  );
};

export default Input;

type InputProps = {
  type: string;
  id: string;
  label: string;
};

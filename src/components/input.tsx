type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
};

const Input = ({ rounded, label, validation }: InputProps) => {
  return (
    <>
      {` ${validation ? "input--validation" : ""}`}

      {label ? <label htmlFor={label}>{label}</label> : ""}

      <input
        id={label}
        className={`input ${rounded ? "input--rounded" : ""}`}
        type="text"
      />
      <p>Neki tekst</p>
    </>
  );
};

export default Input;

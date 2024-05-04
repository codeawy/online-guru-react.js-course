import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: InputProps) => {
  return <input {...rest} />;
};

export default Input;

import * as React from "react";
import TextField from "@mui/material/TextField";

interface InputBoxProps {
  isRequired?: boolean
  id?: string
  label: string
  defaultValue?: string
  value: string
  placeholder?: string
  onChange: (val: string, objKey?: string) => void
  objKey?: string
}
const InputBox: React.FC<InputBoxProps> = ({
  isRequired = false,
  id = 'outlined-required',
  label,
  defaultValue = '',
  value,
  placeholder,
  onChange,
  objKey
}) => {

  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, objKey)
  }

  return (
    <TextField
      required={isRequired}
      id={id}
      label={label}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  );
};

export default InputBox;

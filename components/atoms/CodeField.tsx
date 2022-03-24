import { ChangeEvent } from "react";

interface Props {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

export const CodeField = ({ value, setValue, placeholder }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      className="font-mono border rounded-md p-2 w-full focus:outline-fuchsia-300"
      value={value}
      spellCheck={false}
      onChange={handleChange}
      rows={5}
      placeholder={placeholder}
    />
  );
};

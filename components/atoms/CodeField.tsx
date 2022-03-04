import { ChangeEvent } from "react";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const CodeField = ({ value, setValue }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      className="font-mono border rounded-md p-2 w-full"
      value={value}
      spellCheck={false}
      onChange={handleChange}
      rows={5}
    />
  );
};

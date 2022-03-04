import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  padded?: boolean;
  size: number;
}

export const Header = ({ children, padded, size }: Props) => {
  const modifiers = [padded && "mb-5"].join(" ");

  switch (size) {
    case 1:
      return (
        <h1 className={`font-bold font-serif text-3xl ${modifiers}`}>
          {children}
        </h1>
      );
    default:
      console.warn(`Header size ${size} is not defined.`);
      return null;
  }
};

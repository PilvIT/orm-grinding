import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button = ({
  children,
  disabled,
  onClick,
  type = "button",
}: Props) => {
  return (
    <button
      className="bg-pink-600 text-neutral-50 rounded-md p-2 disabled:opacity-80 hover:brightness-110"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

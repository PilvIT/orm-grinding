import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CodeInline = ({ children }: Props) => {
  return <code className="font-bold font-mono">{children}</code>;
};

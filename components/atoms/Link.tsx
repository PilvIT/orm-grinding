import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
  appearance?: "button";
}

export const Link = ({ children, href, appearance }: Props) => {
  const className =
    appearance === "button"
      ? "block px-2 py-2 bg-red-200 max-w-fit rounded-md hover:brightness-110"
      : "";

  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

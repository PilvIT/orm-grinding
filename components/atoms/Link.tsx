import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
  appearance?: "button";
  shallow?: boolean;
}

export const Link = ({ children, href, appearance, shallow }: Props) => {
  let className =
    appearance === "button"
      ? "block p-2 bg-red-200 max-w-fit rounded-md hover:brightness-110"
      : "";

  return (
    <NextLink href={href} prefetch={false} shallow={shallow}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

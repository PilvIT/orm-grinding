import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  href: string;
  appearance?: "button";
  shallow?: boolean;
}

export const Link = ({
  children,
  className,
  href,
  appearance,
  shallow,
}: Props) => {
  let innerClass =
    appearance === "button"
      ? "block p-2 bg-red-200 max-w-fit rounded-md hover:brightness-110"
      : "";

  return (
    <NextLink href={href} prefetch={false} shallow={shallow}>
      <a className={`${className} ${innerClass}`}>{children}</a>
    </NextLink>
  );
};

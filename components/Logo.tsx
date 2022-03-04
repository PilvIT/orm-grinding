import NextLink from "next/link";

export const Logo = () => {
  return (
    <div className="font-logo text-xl">
      <NextLink href="/">
        <a>PilvIT Foss - ORM Grinding</a>
      </NextLink>
    </div>
  );
};

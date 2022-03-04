import NextLink from "next/link";

export const Logo = () => {
  return (
    <div className="font-logo text-xl hover:brightness-125 hover:text-red-900">
      <NextLink href="/">
        <a>PilvIT Foss - ORM Grinding</a>
      </NextLink>
    </div>
  );
};

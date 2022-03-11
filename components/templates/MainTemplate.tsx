import { Footer } from "../organisms/Footer";
import Head from "next/head";
import { Menu } from "../organisms/Menu";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const MainTemplate = ({ children }: Props) => {
  return (
    <div className="mx-5 min-h-screen">
      <Head>
        <title>ORM Grinding</title>
        <meta
          name="description"
          content="Grinding exercises to learn object-relational-mapping frameworks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <div
        className={`mt-10 md:w-10/12 lg:w-8/12 m-auto text-center min-h-[50vh]`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

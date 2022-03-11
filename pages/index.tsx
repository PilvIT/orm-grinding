import { Header } from "../components/atoms/Header";
import { Link } from "../components/atoms/Link";
import { MainTemplate } from "../components/templates/MainTemplate";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <Header size={1} padded>
        Memorize the ORM Keywords
      </Header>
      <p>
        There are many <em>object-relational mapping</em> systems which abstract
        away the SQL and database entities are treated as object-oriented
        objects. The problem developers face is to master the system. The
        concepts are similar but keywords are different. With this training
        application, developers can refresh their memory or repeat similar
        operations to learn.
      </p>

      <div className="mx-auto my-10 flex flex-col gap-5 items-center">
        <Link href="/ef-core" appearance="button">
          Entity Framework Core
        </Link>
      </div>
    </MainTemplate>
  );
};

export default Home;

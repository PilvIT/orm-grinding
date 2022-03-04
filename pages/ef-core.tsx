import { Header } from "../components/atoms/Header";
import { MainTemplate } from "../components/Templates/MainTemplate";
import { Playground } from "../components/organisms/Playground";
import { findById } from "../core/exercises/efcore/findById";
import { simpleFilter } from "../core/exercises/efcore/simpleFilter";

const EfCorePage = () => {
  return (
    <MainTemplate>
      <Header size={1} padded>
        Entity Framework Core
      </Header>

      <Playground exerciseSet={[findById, simpleFilter]} />
    </MainTemplate>
  );
};

export default EfCorePage;

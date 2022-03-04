import { Header } from "../components/atoms/Header";
import { MainTemplate } from "../components/Templates/MainTemplate";
import { Playground } from "../components/organisms/Playground";

const EfCorePage = () => {
  return (
    <MainTemplate>
      <Header size={1} padded>
        Entity Framework Core
      </Header>

      <Playground />
    </MainTemplate>
  );
};

export default EfCorePage;

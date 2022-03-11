import { useEffect, useState } from "react";
import { ExerciseSetMenu } from "../../components/molecules/ExerciseSetMenu";
import { Header } from "../../components/atoms/Header";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { Playground } from "../../components/organisms/Playground";
import { useRouter } from "next/router";

const loadSet = async (name: string) => {
  const { exercises } = await import(`../../core/exercises/efcore/${name}`);
  return exercises;
};

const EfCorePage = () => {
  const [exerciseSet, setExerciseSet] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.set) {
      loadSet(router.query.set as string).then(setExerciseSet);
    }
  }, [router.query.set]);

  console.log(exerciseSet);
  return (
    <MainTemplate>
      <Header size={1} padded>
        Entity Framework Core
      </Header>

      <ExerciseSetMenu />
      {exerciseSet.length > 0 && <Playground exerciseSet={exerciseSet} />}
    </MainTemplate>
  );
};

export default EfCorePage;

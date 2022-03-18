import type { Exercise, Randomizer } from "../../core/types";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "../atoms/Button";
import { Code } from "../atoms/Code";
import { CodeField } from "../atoms/CodeField";
import { ExerciseAlert } from "../atoms/ExerciseAlert";
import { pickOne } from "../../core/utils/pickOne";
import { randomizer } from "../../core/exercises/efcore/randomizer";

interface Props {
  exerciseSet: Array<(picker: Randomizer) => Exercise>;
}

export const Playground = ({ exerciseSet }: Props) => {
  const [exercise, setExercise] = useState<Exercise>({
    check: () => false,
    code: "",
    question: "",
  });
  const [answer, setAnswer] = useState<string>("");
  const [correct, setCorrect] = useState<boolean | undefined>(undefined);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (exercise.check(answer)) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  const handleNextExercise = () => {
    setExercise(pickOne(exerciseSet)(randomizer));
    setAnswer("");
    setCorrect(undefined);
  };

  useEffect(() => {
    setExercise(pickOne(exerciseSet)(randomizer));
  }, [exerciseSet]);

  return (
    <div className="text-left rounded-md overflow-clip bg-orange-50 min-h-[50vh] grid md:grid-cols-2">
      <div className="p-5">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <p>{exercise.question}</p>
          <CodeField value={answer} setValue={setAnswer} />

          <div className="flex flex-row-reverse justify-between items-center">
            {correct ? (
              <Button onClick={handleNextExercise}>Next Exercise</Button>
            ) : (
              <Button type="submit" disabled={answer === ""}>
                Submit
              </Button>
            )}
            <ExerciseAlert correct={correct} />
          </div>
        </form>
      </div>
      <Code code={exercise.code} lang="cs" />
    </div>
  );
};

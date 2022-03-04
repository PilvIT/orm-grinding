interface Props {
  correct: boolean | undefined;
}

export const ExerciseAlert = ({ correct }: Props) => {
  if (correct === true) {
    return (
      <p className="text-green-600" role="alert">
        Correct!
      </p>
    );
  }
  if (correct === false) {
    return (
      <p className="text-red-500" role="alert">
        Invalid answer, try again!
      </p>
    );
  }

  return null;
};

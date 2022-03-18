export const checkAnswer = (pattern: string, answer: string): boolean => {
  const regex = new RegExp(clean(pattern));
  return clean(answer).match(regex) !== null;
};

const clean = (value: string) => value.replaceAll(/\s/g, "");

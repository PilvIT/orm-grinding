const pickOne = <T>(array: Array<T>): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

export const utils = {
  pickOne,
};

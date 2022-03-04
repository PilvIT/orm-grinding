export const EntityNames = ["Car", "Printer", "Sheet"];

export const chooseEntity = (): string => {
  const index = Math.floor(Math.random() * EntityNames.length);
  return EntityNames[index];
};

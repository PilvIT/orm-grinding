import { ReactNode } from "react";

export interface Exercise {
  check: (answer: string) => boolean;
  code: string;
  question: ReactNode;
}

export enum DataType {
  Boolean = "boolean",
  Integer = "int",
  String = "string",
}

export interface Attribute {
  name: string;
  type: DataType;
}

export interface Randomizer {
  attribute: () => Attribute;
  entity: () => string;
  id: () => number;
  number: (from: number, to: number) => number;
}

export type ExerciseGenerator = (random: Randomizer) => Exercise;

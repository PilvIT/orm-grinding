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

export interface Picker {
  pickEntity: () => string;
  pickAttribute: () => Attribute;
}

export type ExerciseGenerator = (picker: Picker) => Exercise;

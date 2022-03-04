export interface Exercise {
  check: (answer: string) => boolean;
  code: string;
  question: string;
}

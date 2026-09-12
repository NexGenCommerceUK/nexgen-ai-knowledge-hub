export type AnswerMode = "demo" | "live";

export type AnswerRequest = {
  context: string;
  question: string;
};

export type AnswerData = {
  answer: string;
  mode: AnswerMode;
};

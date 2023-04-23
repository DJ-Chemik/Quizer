export interface Question {
  id: string;
  name: string;
  creationDate: Date;
  updateDate: Date;
  content: string;
  goodAnswer: string;
  wrongAnswerOne: string;
  wrongAnswerTwo: string;
  wrongAnswerThree: string;
  creatorId: string;
}

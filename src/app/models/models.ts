export interface IModulePage {
  title: string;
  component: any;
  description: string;
  icon: string;
}

export interface IState {
  code: string;
  name: string;
}

export interface ILanguage {
  code: string;
  language: string;
}

export interface IContactUs {
  name: string;
  email: string;
  phoneNumber: number;
  city: string;
  message: string;
}

export interface QAConfigModal {
  id: string;
  question: string;
  imgUrl: string;
  options: Array<AnswerModal>;
}

export interface AnswerModal {
  id: string;
  answer: string;
  isCorrectAnswer: boolean;
}

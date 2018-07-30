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
  options: QAAnswerModal[];
}

export interface QAAnswerModal {
  id: string;
  answer: string;
  isCorrectAnswer: boolean;
  selectedRow: boolean;
}

export interface CorrectWrongAnsModal {
  correctAnswer: QAConfigModal[];
  wrongAnswer: QAConfigModal[];
}

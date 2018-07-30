import {
  QAConfigModal,
  QAAnswerModal,
  CorrectWrongAnsModal
} from "../../app/models/models";

export interface HomeState {
  qaModal: QAConfigModal[];
  selectedQA: QAConfigModal;
  selectedAnswer: QAAnswerModal;
  correctWrongAns: CorrectWrongAnsModal;
}

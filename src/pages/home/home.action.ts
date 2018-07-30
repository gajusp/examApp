import { Action } from "@ngrx/store";
import { QAConfigModal, QAAnswerModal } from "../../app/models/models";

export const FetchQAData = "FETCH_QA_DATA";
export const SetQAData = "SET_QA_DATA";
export const SelectedQA = "SELECTED_QA";
export const SelectedAnswer = "SELECTED_ANSWER";

export class FetchQADataAction implements Action {
  readonly type = FetchQAData;
  constructor(public payload: string) {}
}

export class SetQADataAction implements Action {
  readonly type = SetQAData;
  constructor(public payload: QAConfigModal[]) {}
}

export class selectedQAAction implements Action {
  readonly type = SelectedQA;
  constructor(public payload: QAConfigModal) {}
}

export class selectedAnswerAction implements Action {
  readonly type = SelectedAnswer;
  constructor(public payload: QAAnswerModal) {}
}

export type All =
  | FetchQADataAction
  | SetQADataAction
  | selectedQAAction
  | selectedAnswerAction;

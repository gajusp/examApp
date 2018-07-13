import { Action } from '@ngrx/store';
import { QAConfigModal } from '../../app/models/models';

export const FetchQAData = "FETCH_QA_DATA";
export const SetQAData = "SET_QA_DATA";

export class FetchQADataAction implements Action {
  readonly type = FetchQAData;
  constructor(public payload: string) { }
}

export class SetQADataAction implements Action {
  readonly type = SetQAData;
  constructor(public payload: QAConfigModal[]) { }
}

export type All =
  | FetchQADataAction;

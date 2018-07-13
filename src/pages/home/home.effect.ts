import { Actions, Effect, ofType } from "../../../node_modules/@ngrx/effects";
import { Injector, Injectable } from '@angular/core';
import { of } from "rxjs/observable/of";
import { map, switchMap } from "rxjs/operators";
import { zip } from "rxjs/observable/zip";
import * as homeAction from "./home.action";
import { QuestionAnswerService } from "../../app/services/question-answer-service";
import { QAConfigModal } from "../../app/models/models";

@Injectable()
export class HomeEffects {
  constructor(private action$: Actions, private inject: Injector) { }

  @Effect()
  homeEff$ = this.action$.pipe(
    ofType(homeAction.FetchQAData),
    map((action: homeAction.FetchQADataAction) => action.payload),
    switchMap(qa => {
      return zip(
        of(qa),
        this.inject.get(QuestionAnswerService).getQuestionanswerDataAsync(qa)
      );
    }),
    map(qaData => {
      const qaModal = qaData[1] as QAConfigModal[];
      const qaService = this.inject.get(QuestionAnswerService);
      qaService.setQuestionAnswerData(qaModal);
      return new homeAction.SetQADataAction(qaModal);
    })
  );
}

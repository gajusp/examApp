import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ExamPage } from "./exam";
import { QuestionSectionModule } from "../shared-module/question/question-section.module";
import { QuestionAnswerService } from "../../app/services/question-answer-service";
import { ScoreReviewSectionModule } from "../shared-module/score-review/score-review.module";

@NgModule({
  declarations: [ExamPage],
  imports: [IonicPageModule.forChild(ExamPage), QuestionSectionModule, ScoreReviewSectionModule],
  providers: [QuestionAnswerService]
})
export class ExamPageModule { }

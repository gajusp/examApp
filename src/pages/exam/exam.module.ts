import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ExamPage } from "./exam";
import { QuestionSectionModule } from "../shared-module/question/question-section.module";
import { QuestionAnswerService } from "../../app/services/question-answer-service";

@NgModule({
  declarations: [ExamPage],
  imports: [IonicPageModule.forChild(ExamPage), QuestionSectionModule],
  providers: [QuestionAnswerService]
})
export class ExamPageModule {}

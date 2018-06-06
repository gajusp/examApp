import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ExamPage } from "./exam";
import { QuestionSectionModule } from "../shared-module/question/question-section.module";

@NgModule({
  declarations: [ExamPage],
  imports: [IonicPageModule.forChild(ExamPage), QuestionSectionModule]
})
export class ExamPageModule {}

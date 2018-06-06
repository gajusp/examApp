import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { QuestionSectionComponent } from "././question-section-component/question-section-component";
import { AnswerSectionModule } from "../answer/answer-section.module";

@NgModule({
  declarations: [QuestionSectionComponent],
  imports: [
    IonicPageModule.forChild(QuestionSectionComponent),
    AnswerSectionModule
  ],
  exports: [QuestionSectionComponent]
})
export class QuestionSectionModule {}

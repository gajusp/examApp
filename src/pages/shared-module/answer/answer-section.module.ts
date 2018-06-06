import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AnswerSectionComponent } from "././answer-section-component/answer-section-component";

@NgModule({
  declarations: [AnswerSectionComponent],
  imports: [IonicPageModule.forChild(AnswerSectionComponent)],
  exports: [AnswerSectionComponent]
})
export class AnswerSectionModule {}

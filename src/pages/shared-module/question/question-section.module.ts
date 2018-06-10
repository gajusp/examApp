import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { QuestionSectionComponent } from "././question-section-component/question-section-component";

@NgModule({
  declarations: [QuestionSectionComponent],
  imports: [IonicPageModule.forChild(QuestionSectionComponent)],
  exports: [QuestionSectionComponent]
})
export class QuestionSectionModule {}

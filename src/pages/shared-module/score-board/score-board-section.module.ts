import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular/umd";
import { ScoreBoardSectionComponent } from "./score-board-section-component/score-board-section.component";

@NgModule({
  declarations: [ScoreBoardSectionComponent],
  imports: [IonicPageModule.forChild(ScoreBoardSectionComponent)],
  exports: [ScoreBoardSectionComponent]
})
export class ScoreBoardSectionModule { }

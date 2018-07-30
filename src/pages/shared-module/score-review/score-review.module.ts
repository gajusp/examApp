import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ScoreReviewSectionComponent } from "./score-review-section-component/score-review-section-component";

@NgModule({
  declarations: [ScoreReviewSectionComponent],
  imports: [IonicPageModule.forChild(ScoreReviewSectionComponent)],
  exports: [ScoreReviewSectionComponent]
})
export class ScoreReviewSectionModule { }

import { Component } from "@angular/core";
import { NavController, NavParams, Navbar, AlertController } from "ionic-angular";
import { AppStoreService, QADataSelector } from "../../../../app/services/app-store.service";
/**
 * Generated class for the QuestionBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: "score-review-section-component",
  templateUrl: "score-review-section-component.html"
})
export class ScoreReviewSectionComponent {

  private scoreReviewArr = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private appStore: AppStoreService) {
    this.appStore.select(QADataSelector.getQADataState).subscribe(homeState => {
      this.scoreReviewArr = [...homeState.correctWrongAnsArr.correctAnswer, ...homeState.correctWrongAnsArr.wrongAnswer];
    });
  }
}

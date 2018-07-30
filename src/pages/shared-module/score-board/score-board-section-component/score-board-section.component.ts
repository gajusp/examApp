import { Component, Output, EventEmitter } from "@angular/core";
import { NavController, NavParams } from "ionic-angular/umd";
/**
 * Generated class for the QuestionBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: "score-board-section-component",
  templateUrl: "score-board-section.component.html"
})
export class ScoreBoardSectionComponent {
  @Output() selectedAnswerEvent = new EventEmitter<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}

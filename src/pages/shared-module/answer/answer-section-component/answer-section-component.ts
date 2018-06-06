import { Component, Input } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the QuestionBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "answer-section-component",
  templateUrl: "answer-section-component.html"
})
export class AnswerSectionComponent {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  @Input() questionInput = [];

  ionViewDidLoad() {
    console.log("ionViewDidLoad AnswerSectionPage");
  }

  onTapAnswer = () => {
    alert("answer tap");
  };
}

import { Component, Input } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the QuestionBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "question-section-component",
  templateUrl: "question-section-component.html"
})
export class QuestionSectionComponent {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  @Input() questionInput = [];

  ionViewDidLoad() {
    console.log("ionViewDidLoad QuestionSection", this.questionInput);
  }
}

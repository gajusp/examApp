import { Component, Input, Output, EventEmitter } from "@angular/core";
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
  private selectedRow: number;
  @Input() questionInput: any;
  @Output() onSelectedAnswerEvent = new EventEmitter<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onGetQuestionAnsData() {
    return this.questionInput;
  }

  onTapAnswer(answerObj, index) {
    this.onSelectedAnswerEvent.emit(answerObj);
    this.selectedRow = index;
  }
}

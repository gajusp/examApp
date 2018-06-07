import { Component, Input } from "@angular/core";

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
  @Input() questionInput: any;
  constructor() {
    console.log("ionViewDidLoad AnswerSectionPage", this.questionInput);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AnswerSectionPage");
  }

  onTapAnswer = () => {
    // console.log(
    //   "answer tap --- ",
    //   this.questionAnsService.getCurrentQuestion()
    // );
    // this.questionAnsService.selectedQuestionEvent.emit({
    //   selectedAnswer: this.questionAnsService.getCurrentQuestion()
    // });
  };
}

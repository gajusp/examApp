import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { QuestionAnswerService } from "../../app/services/question-answer-service";
import { QuestionSectionComponent } from "../shared-module/question/question-section-component/question-section-component";

/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-exam",
  templateUrl: "exam.html"
})
export class ExamPage {
  // @ViewChild(QuestionSectionComponent)
  // questionanswerComp: QuestionSectionComponent;
  private currentQuestionIndex = 0;
  showFooter = false;
  isExamStart = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionAnsService: QuestionAnswerService
  ) {
    console.log("ionViewEnter ExamPage");
  }

  ionViewDidEnter() {
    console.log("ionViewEnter ExamPage");
    this.questionAnsService.setCurrentQuestion = this.questionAnsService.getQuestionAnswerData[
      this.currentQuestionIndex
    ];
    // this.questionanswerComp.questionInput = this.questionAnsService.getCurrentQuestion;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExamPage");
    this.questionAnsService.setCurrentQuestion = this.questionAnsService.getQuestionAnswerData[
      this.currentQuestionIndex
    ];
    // this.questionanswerComp.questionInput = this.questionAnsService.getCurrentQuestion;
  }

  onStartExam = () => {
    console.log(" --- Exam Start --- ");
    this.isExamStart = true;
    this.showFooter = true;
  };

  onTapNext = () => {
    this.currentQuestionIndex++;
    console.log("--- on Next tap --- ", this.currentQuestionIndex);
    this.questionAnsService.setCurrentQuestion = this.questionAnsService.getQuestionAnswerData[
      this.currentQuestionIndex
    ];
  };
}

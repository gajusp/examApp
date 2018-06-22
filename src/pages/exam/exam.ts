import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { QuestionAnswerService } from "../../app/services/question-answer-service";

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
  private selectedAnswerObj: any;
  private correctAnswer: number;
  private wrongAnswer: number;
  showFooter = false;
  isExamStart = false;
  isAllQuestionCompleted = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionAnsService: QuestionAnswerService
  ) {
    this.correctAnswer = 0;
    this.wrongAnswer = 0;
  }

  ionViewDidEnter() {
    console.log("ionViewEnter ExamPage");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExamPage");
  }

  onStartExam = () => {
    console.log(" --- Exam Start --- ");
    this.isExamStart = true;
    this.showFooter = true;
    this.questionAnsService.currentQuestionIndex = 0;
    this.questionAnsService.setCurrentQuestion = this.questionAnsService.getQuestionAnswerData[
      this.questionAnsService.currentQuestionIndex
    ];
  };

  selectedAnswer = (selectedAnswer: any) => {
    console.log(selectedAnswer);
    this.selectedAnswerObj = selectedAnswer;
  };

  onTapNext = () => {
    // update the correct answer array.
    this.questionAnsService.updateCorrectAnswer(this.selectedAnswerObj);
    this.correctAnswer = this.questionAnsService.getCorrectAnswerLength;
    this.wrongAnswer = this.questionAnsService.getWrongAnswerLength;
    this.questionAnsService.currentQuestionIndex++;
    this.questionAnsService.setCurrentQuestion = this.questionAnsService.getQuestionAnswerData[
      this.questionAnsService.currentQuestionIndex
    ];
    if (
      this.questionAnsService.currentQuestionIndex ===
      this.questionAnsService.getQuestionAnswerData.length - 1
    ) {
      this.isAllQuestionCompleted = true;
      // reset data
      this.questionAnsService.resetData();
    }
  };
}

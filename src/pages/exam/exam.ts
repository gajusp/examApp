import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Navbar } from "ionic-angular";
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
  @ViewChild(Navbar) navBar: Navbar;
  private timerCounter = 0;
  private timerInterval = undefined;
  private selectedAnswerObj: any;
  private correctAnswer: number;
  private wrongAnswer: number;
  private isExamPasses = false;
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
    this.navBar.backButtonClick = (e: UIEvent) => {
      console.log("Back button pressed --- ");
      this.resetData();
      this.navCtrl.pop();
    };
  }

  startTimerCounter = (seconds: number) => {
    this.timerCounter = seconds || 30;
    this.timerInterval = setInterval(() => {
      this.timerCounter--;
      if (this.timerCounter === 0) {
        clearInterval(this.timerInterval);
        this.timerInterval = undefined;
        // go to next question automatically
        this.onTapNext();
      } else {
      }
    }, 1000);
  };

  onStartExam = () => {
    this.onSetInitialQuestion();
  };

  selectedAnswer = (selectedAnswer: any) => {
    this.selectedAnswerObj = selectedAnswer;
  };

  onTapNext = () => {
    this.clearTimer();
    // update the correct answer array.
    this.questionAnsService.updateCorrectAnswer(this.selectedAnswerObj);
    this.correctAnswer = this.questionAnsService.getCorrectAnswerLength;
    this.wrongAnswer = this.questionAnsService.getWrongAnswerLength;
    this.questionAnsService.currentQuestionIndex++;
    this.questionAnsService.setCurrentQuestion = this.questionAnsService.getQuestionAnswerData[
      this.questionAnsService.currentQuestionIndex
    ];
    this.startTimerCounter(30);
    if (
      this.questionAnsService.currentQuestionIndex ===
      this.questionAnsService.getQuestionAnswerData.length
    ) {
      this.clearTimer();
      this.calculatePassingPercent();
      this.isAllQuestionCompleted = true;
    }
  };

  onBackORRetry = () => {
    this.resetData();
    if (this.isExamPasses) {
      this.navCtrl.pop();
    } else {
      this.onSetInitialQuestion();
    }
  };

  onSetInitialQuestion() {
    this.isAllQuestionCompleted = false;
    this.isExamStart = true;
    this.showFooter = true;
    this.questionAnsService.currentQuestionIndex = 0;
    this.questionAnsService.setCurrentQuestion = this.questionAnsService.getQuestionAnswerData[
      this.questionAnsService.currentQuestionIndex
    ];
    this.startTimerCounter(30);
  }

  calculatePassingPercent() {
    let passingPercent = 55;
    let min_passing_percent =
      (passingPercent / 100) *
      this.questionAnsService.getQuestionAnswerData.length;
    this.isExamPasses =
      Math.round(min_passing_percent) <=
      this.questionAnsService.getCorrectAnswerLength;
  }

  resetData = () => {
    // reset data
    this.correctAnswer = 0;
    this.wrongAnswer = 0;
    this.showFooter = false;
    this.isExamStart = false;
    this.isAllQuestionCompleted = false;
    this.questionAnsService.resetData();
  };

  clearTimer = () => {
    //check interval timer
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = undefined;
    }
  };
}

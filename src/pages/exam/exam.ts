import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Navbar } from "ionic-angular";
import { QuestionAnswerService } from "../../app/services/question-answer-service";
import {
  AppStoreService,
  QADataSelector
} from "../../app/services/app-store.service";
import { QAConfigModal, QAAnswerModal } from "../../app/models/models";
import { selectedQAAction, selectedAnswerAction } from "../home/home.action";

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
  private currentQuestionIndex = 0;
  private timerCounter = 0;
  private timerInterval = undefined;
  private selectedQuestion: QAConfigModal;
  private selectedAnswerObj: QAAnswerModal;
  private correctAnswer: number;
  private wrongAnswer: number;
  private isExamPasses = false;
  private showFooter = false;
  private isExamStart = false;
  private isAllQuestionCompleted = false;
  private allQAData = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionAnsService: QuestionAnswerService,
    private appStore: AppStoreService
  ) {
    this.correctAnswer = 0;
    this.wrongAnswer = 0;

    this.appStore.select(QADataSelector.getQADataState).subscribe(homeState => {
      if (this.allQAData.length === 0) {
        this.allQAData = [...homeState.qaModal];
      }
      this.correctAnswer = homeState.correctWrongAnsArr.correctAnswer.length;
      this.wrongAnswer = homeState.correctWrongAnsArr.wrongAnswer.length;
    });
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
    this.appStore.dispatch(new selectedAnswerAction(undefined));
    if (this.allQAData.length > 0) {
      this.selectedQuestion = this.allQAData[this.currentQuestionIndex];
      this.appStore.dispatch(new selectedQAAction(this.selectedQuestion));
    }
  };

  onSelectedAnswer = (answerObj: QAAnswerModal) => {
    this.selectedAnswerObj = answerObj;
  };

  onTapNext = () => {
    this.clearTimer();
    //selected answer
    this.selectedQuestion = this.allQAData[this.currentQuestionIndex];
    this.appStore.dispatch(new selectedAnswerAction(this.selectedAnswerObj));
    // go for next question
    this.currentQuestionIndex++;
    this.appStore.dispatch(
      new selectedQAAction(this.allQAData[this.currentQuestionIndex])
    );
    this.startTimerCounter(30);
    // Result board logic
    if (this.currentQuestionIndex === this.allQAData.length) {
      this.clearTimer();
      this.calculatePassingPercent();
      this.isAllQuestionCompleted = true;
    }
  };

  onHomeORScoreboard = () => {
    if (this.isExamPasses) {
      this.navCtrl.pop();
    } else {
      // go to score board
    }
  };

  onSetInitialQuestion() {
    this.isAllQuestionCompleted = false;
    this.isExamStart = true;
    this.showFooter = true;
    this.currentQuestionIndex = 0;
    this.startTimerCounter(30);
  }

  calculatePassingPercent() {
    let passingPercent = 55;
    let min_passing_percent = (passingPercent / 100) * this.allQAData.length;
    this.isExamPasses = Math.round(min_passing_percent) <= this.correctAnswer;
  }

  resetData = () => {
    // reset data
    this.allQAData = [];
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

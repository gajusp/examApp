import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: "page-exam",
  templateUrl: "exam.html"
})
export class ExamPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  showFooter = false;
  isExamStart = false;
  questionAnswerArr = [
    {
      id: 1,
      question:
        "You have stalled in the middle of a level crossing & can't restart the engine. The train arrival bell starts",
      options: [
        {
          id: 1,
          answer: "Yes",
          isCorrect: true
        },
        {
          id: 2,
          answer: "No",
          isCorrect: false
        },
        {
          id: 3,
          answer: "None of Above",
          isCorrect: false
        }
      ]
    },
    {
      id: 2,
      question: "Turn Left",
      options: [
        {
          id: 1,
          answer: "Left Arrow",
          isCorrect: false
        },
        {
          id: 2,
          answer: "Left Arrow",
          isCorrect: true
        },
        {
          id: 3,
          answer: "None of Above",
          isCorrect: false
        }
      ]
    }
  ];
  ionViewDidLoad() {
    console.log("ionViewDidLoad ExamPage");
  }

  onStartExam = () => {
    console.log(" --- Exam Start --- ");
    this.isExamStart = true;
    this.showFooter = true;
  };
}

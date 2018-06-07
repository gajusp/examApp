import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class QuestionAnswerService {
  private questionAnswerArr = [
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
  private currentQuestionObj: any;
  selectedQuestionEvent = new EventEmitter();
  constructor() {}

  get getQuestionAnswerData(): any {
    return this.questionAnswerArr;
  }

  set setCurrentQuestion(value: any) {
    this.currentQuestionObj = value;
  }

  get getCurrentQuestion() {
    return this.currentQuestionObj;
  }
}

import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QAConfigModal } from "../models/models";

@Injectable()
export class QuestionAnswerService {
  private questionAnswerArr: QAConfigModal[];
  private currentQuestionObj: any;
  private correctAnswer = [];
  private wrongAnswer = [];
  currentQuestionIndex = 0;
  selectedQuestionEvent = new EventEmitter();
  constructor(private http: HttpClient) { }

  public setQuestionAnswerData(qaArray: QAConfigModal[]) {
    this.questionAnswerArr = qaArray;
  }

  get getQuestionAnswerData(): any {
    return [...this.questionAnswerArr];
  }

  set setCurrentQuestion(value: any) {
    this.currentQuestionObj = Object.assign({}, value);
  }

  get getCurrentQuestion() {
    return Object.assign({}, this.currentQuestionObj);
  }

  get getCorrectAnswerLength() {
    return this.correctAnswer.length;
  }

  get getWrongAnswerLength() {
    return this.wrongAnswer.length;
  }

  public getQuestionanswerDataAsync(dataPath: string) {
    return this.http.get(dataPath);
    // .subscribe(data => {
    //   this.questionAnswerArr = data;
    // });
  }

  updateCorrectAnswer(selectedAnswer: any) {
    if (selectedAnswer && selectedAnswer.isCorrect) {
      this.correctAnswer.push(this.currentQuestionObj);
    } else {
      this.wrongAnswer.push(this.currentQuestionObj);
    }
  }

  resetData() {
    this.correctAnswer = [];
    this.wrongAnswer = [];
    this.currentQuestionObj = undefined;
    this.currentQuestionIndex = 0;
    this.questionAnswerArr = [...this.questionAnswerArr];
  }
}

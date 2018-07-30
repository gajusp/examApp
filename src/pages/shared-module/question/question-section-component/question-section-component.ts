import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { QAConfigModal, QAAnswerModal } from "../../../../app/models/models";
import {
  QADataSelector,
  AppStoreService
} from "../../../../app/services/app-store.service";

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
  private selectedQA: QAConfigModal;
  @Output() selectedAnswerEvent = new EventEmitter<any>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appStore: AppStoreService
  ) {
    this.appStore.select(QADataSelector.getQADataState).subscribe(homeState => {
      this.selectedQA = homeState.selectedQA;
    });
  }

  onTapAnswer(answerObj: QAAnswerModal) {
    this.updatedPreviousSelectedRow();
    answerObj.selectedRow = true;
    this.selectedAnswerEvent.emit(answerObj);
  }

  updatedPreviousSelectedRow() {
    this.selectedQA.options.forEach((answerObj: QAAnswerModal) => {
      answerObj.selectedRow = false;
    });
  }
}

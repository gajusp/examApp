import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { QuestionBankPage } from "../question-bank/question-bank";
import { PracticePage } from "../practice/practice";
import { ExamPage } from "../exam/exam";
import { SettingPage } from "../setting/setting";
import { IModulePage } from "../../app/models/models";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls:['']
})
export class HomePage {
  showFooter = false;
  pages: IModulePage[];

  constructor(public navCtrl: NavController) {
    this.pages = [
      {
        title: "Question Bank",
        component: QuestionBankPage,
        description: "List of question & answers and meaning of road signs",
        icon: "book"
      },
      {
        title: "Practice",
        component: PracticePage,
        description: "Test your knowledge without worrying about time",
        icon: "clipboard"
      },
      {
        title: "Exam",
        component: ExamPage,
        description:
          "Time and question bound test exactly same as actual RTO test",
        icon: "document"
      },
      {
        title: "Settings",
        component: SettingPage,
        description:
          "Language selection, forms RTO office information and more",
        icon: "settings"
      }
    ];
  }

  onLoadModule(pageObj: any) {
    console.log(`${pageObj} ---  Loaded --- `);
    this.navCtrl.push(pageObj.component);
  }
}

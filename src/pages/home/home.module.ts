import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";

import { HomePage } from "./home";
import { QuestionBankPageModule } from "../question-bank/question-bank.module";
import { PracticePageModule } from "../practice/practice.module";
import { ExamPageModule } from "../exam/exam.module";
import { SettingPageModule } from "../setting/setting.module";

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicModule.forRoot(HomePage),
    QuestionBankPageModule,
    PracticePageModule,
    ExamPageModule,
    SettingPageModule
  ],
  entryComponents: []
})
export class HomeModule {}

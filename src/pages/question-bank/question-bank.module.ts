import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionBankPage } from './question-bank';

@NgModule({
  declarations: [
    QuestionBankPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionBankPage),
  ],
})
export class QuestionBankPageModule {}

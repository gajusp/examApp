import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { ExamApp } from "./app.component";
import { HomeModule } from "../pages/home/home.module";
import { QuestionAnswerService } from "./services/question-answer-service";

@NgModule({
  declarations: [ExamApp],
  imports: [BrowserModule, IonicModule.forRoot(ExamApp), HomeModule],
  bootstrap: [IonicApp],
  entryComponents: [ExamApp],
  providers: [
    StatusBar,
    SplashScreen,
    QuestionAnswerService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

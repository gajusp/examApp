import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { ExamApp } from "./app.component";
import { HomeModule } from "../pages/home/home.module";
import { QuestionAnswerService } from "./services/question-answer-service";
import { HttpClientModule } from "@angular/common/http";

import { effects } from "./app.effects";
import { reducers, metaReducers } from "./app.reducers";
import { AppStoreService } from "./services/app-store.service";
// import { environment } from "../environments/environment";

@NgModule({
  declarations: [ExamApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(ExamApp),
    HomeModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      name: "Gambit Store DevTools",
      logOnly: false //environment.production
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [ExamApp],
  providers: [
    StatusBar,
    SplashScreen,
    QuestionAnswerService,
    AppStoreService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

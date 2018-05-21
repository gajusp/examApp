import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { RTOApp } from './app.component';
import { HomeModule } from '../pages/home/home.module';

@NgModule({
  declarations: [
    RTOApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(RTOApp),
    HomeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RTOApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule { }

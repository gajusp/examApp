import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';
import { ContactUs } from './contact-us/contact-us';
import { Disclaimer } from './disclaimer/disclaimer';

@NgModule({
  declarations: [
    SettingPage,
    ContactUs,
    Disclaimer
  ],
  imports: [
    IonicPageModule.forChild(SettingPage)
  ],
  entryComponents: [ContactUs, Disclaimer]
})
export class SettingPageModule { }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IState, ILanguage } from '../../app/models/models';
import { ContactUs } from './contact-us/contact-us';
import { Disclaimer } from './disclaimer/disclaimer';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  stateList: IState[];
  selectedState: IState;
  languageList: ILanguage[];
  selectedLanguage: ILanguage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stateList = [
      { "code": "AN", "name": "Andaman and Nicobar Islands" },
      { "code": "AP", "name": "Andhra Pradesh" },
      { "code": "AR", "name": "Arunachal Pradesh" },
      { "code": "AS", "name": "Assam" },
      { "code": "BR", "name": "Bihar" },
      { "code": "CG", "name": "Chandigarh" },
      { "code": "CH", "name": "Chhattisgarh" },
      { "code": "DH", "name": "Dadra and Nagar Haveli" },
      { "code": "DD", "name": "Daman and Diu" },
      { "code": "DL", "name": "Delhi" },
      { "code": "GA", "name": "Goa" },
      { "code": "GJ", "name": "Gujarat" },
      { "code": "HR", "name": "Haryana" },
      { "code": "HP", "name": "Himachal Pradesh" },
      { "code": "JK", "name": "Jammu and Kashmir" },
      { "code": "JH", "name": "Jharkhand" },
      { "code": "KA", "name": "Karnataka" },
      { "code": "KL", "name": "Kerala" },
      { "code": "LD", "name": "Lakshadweep" },
      { "code": "MP", "name": "Madhya Pradesh" },
      { "code": "MH", "name": "Maharashtra" },
      { "code": "MN", "name": "Manipur" },
      { "code": "ML", "name": "Meghalaya" },
      { "code": "MZ", "name": "Mizoram" },
      { "code": "NL", "name": "Nagaland" },
      { "code": "OR", "name": "Odisha" },
      { "code": "PY", "name": "Puducherry" },
      { "code": "PB", "name": "Punjab" },
      { "code": "RJ", "name": "Rajasthan" },
      { "code": "SK", "name": "Sikkim" },
      { "code": "TN", "name": "Tamil Nadu" },
      { "code": "TS", "name": "Telangana" },
      { "code": "TR", "name": "Tripura" },
      { "code": "UK", "name": "Uttarakhand" },
      { "code": "UP", "name": "Uttar Pradesh" },
      { "code": "WB", "name": "West Bengal" }]

    this.languageList = [
      { code: 'marathi', language: 'मराठी' },
      { code: 'hindi', language: 'हिंदी' },
      { code: 'marathi', language: 'मराठी' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }


  onLoadContactUS() {
    this.navCtrl.push(ContactUs);
  }

  onLoadDisclaimer() {
    this.navCtrl.push(Disclaimer);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PrivacyPolicy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-privacy-policy',
  templateUrl: 'privacy-policy.html'
})
export class PrivacyPolicyPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PrivacyPolicyPage Page');
  }

}

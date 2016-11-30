import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SignUp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SignUpPage Page');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Tandc page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tandc',
  templateUrl: 'tandc.html'
})
export class TandcPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TandcPage Page');
  }

}

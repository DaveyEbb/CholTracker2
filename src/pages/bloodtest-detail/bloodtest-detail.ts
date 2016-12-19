import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BloodtestDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bloodtest-detail',
  templateUrl: 'bloodtest-detail.html'
})
export class BloodtestDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BloodtestDetailPage Page');
  }

}

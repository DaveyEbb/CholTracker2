import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BloodtestList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bloodtest-list',
  templateUrl: 'bloodtest-list.html'
})
export class BloodtestListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BloodtestListPage Page');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BillDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bill-detail',
  templateUrl: 'bill-detail.html'
})
export class BillDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BillDetailPage Page');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CreateBill page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-bill',
  templateUrl: 'create-bill.html'
})
export class CreateBillPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CreateBillPage Page');
  }

}

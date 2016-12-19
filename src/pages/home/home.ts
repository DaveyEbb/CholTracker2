import { Component } from '@angular/core';
import { NavController,
         ActionSheetController,
         Platform } from 'ionic-angular';
import { BloodtestData } from '../../providers/bloodtest-data';
import { BloodtestCreatePage } from '../bloodtest-create/bloodtest-create';
import { BloodtestDetailPage } from '../bloodtest-detail/bloodtest-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public bloodtestList: any;

  constructor(public navCtrl: NavController, public bloodtestData: BloodtestData,
    public actionCtrl: ActionSheetController, public platform: Platform) {
    this.bloodtestList = this.bloodtestData.getBloodtestList();
  }

  createBloodtest(){
    this.navCtrl.push(BloodtestCreatePage);
  }

  goToBloodtestDetail(bloodtestId){
    this.navCtrl.push(BloodtestDetailPage, {
    billId: bloodtestId
    });
  }

  moreBloodtestOptions(bloodtestId){
    let action = this.actionCtrl.create({
      title: 'Modify bloodtest results',
      buttons: [
    // We'll add the buttons here
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.bloodtestData.removeBloodtest(bloodtestId);
          }
        },
        {
          text: 'More details',
          icon: !this.platform.is('ios') ? 'play' : null,
          handler: () => {
            this.navCtrl.push(BloodtestDetailPage, {
            billId: bloodtestId
              });
          }
        },
        {
            text: 'Cancel',
            role: 'cancel',
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
        }
      ]
    });
    action.present();
  }
  

}

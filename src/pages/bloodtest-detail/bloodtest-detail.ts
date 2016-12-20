import { Component } from '@angular/core';
import { NavController,
         NavParams,
         ActionSheetController,
         Platform,
         AlertController } from 'ionic-angular';
import { BloodtestData } from '../../providers/bloodtest-data';

@Component({
  selector: 'page-bloodtest-detail',
  templateUrl: 'bloodtest-detail.html',
})

export class BloodtestDetailPage {
  // currentBloodtest: any;
  public bloodtest: any;
  
  constructor(public nav: NavController, public navParams: NavParams, 
      public platform: Platform, public actionCtrl: ActionSheetController,
      public bloodtestData: BloodtestData, public alertCtrl: AlertController) {

      this.bloodtestData.getBloodtestDetail(this.navParams.get("bloodtestId"))
        .subscribe( bloodtestSnap => { this.bloodtest = bloodtestSnap });


//  getBloodtestDetail(bloodtestId: string){
//     return this.bloodtestDetail = this.af.database.object('/userProfile/' +
//     this.userId + '/bloodtestList/' + bloodtestId);
//   }

    // this.navParams = navParams;

    // this.bloodtestData.getBloodtestDetail(this.navParams.get('bloodtestId'))
    //   .on('value', (snapshot) => {
    //     console.log(snapshot.val());
    //     this.currentBloodtest = snapshot.val();
    //     console.log("HDL: " + this.currentBloodtest.hdl);
    // });
  }
}

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as ChartJs from 'chart.js'; // 导入chart.js
import { BloodtestData } from '../../providers/bloodtest-data';

import { AngularFire,
         FirebaseListObservable,
         FirebaseObjectObservable  
       } from 'angularfire2';

@Component({
    selector: 'page-charts',
    templateUrl: 'charts.html'
})
export class ChartsPage {

    public bloodtestList: FirebaseListObservable<any>;
    userId: string;

    constructor(public nav: NavController, public bloodtestData: BloodtestData,
                public af: AngularFire) {

     
        this.nav = nav;
        
        this.af.auth.subscribe(auth => {
          if (auth) {
            this.bloodtestList = this.af.database.list('/userProfile/' +
            auth.uid + '/bloodtestList');
            this.userId = auth.uid;
            } 
        });

        this.bloodtestList = af.database.list('/userProfile/' +
            this.userId + '/bloodtestList', { preserveSnapshot: true });
            this.bloodtestList
         .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
              console.log(snapshot.key)
              console.log(snapshot.val())
           });
         })
        console.log("** this.items: ");console.log(this.bloodtestList); 
      }

    ionViewDidEnter() {

    
    // this.bloodtestData.getBloodtestList().on('value', snapshot => {
    //   let rawList = [];
    //   snapshot.forEach( snap => {
    //     rawList.push({
    //       id: snap.key,
    //       bloodtestDesc: snap.val().bloodtestDesc,
    //       testDate: snap.val().testDate,
    //       hdl: snap.val().hdl,
    //       ldl: snap.val().ldl,
    //       trigl: snap.val().trigl,
    //       totchol: snap.val().totchol
    //     });
    //   });
    //   bloodtestList = rawList;
        
      // Push HDL values into own array
      var hdlArray = [];
      var ldlArray = [];
      var triglArray = [];
      var totcholArray = [];
      var testDateArray = [];
      // for (var i=0; i<bloodtestList.length; i++) {
      //   hdlArray.push(Number(bloodtestList[i].hdl));
      //   ldlArray.push(Number(bloodtestList[i].ldl));
      //   triglArray.push(Number(bloodtestList[i].trigl));
      //   totcholArray.push(Number(bloodtestList[i].totchol));
      //   testDateArray.push(bloodtestList[i].testDate);
      //    }
      }
    }


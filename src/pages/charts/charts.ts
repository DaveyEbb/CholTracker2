import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as ChartJs from 'chart.js'; // 导入chart.js
import { BloodtestData } from '../../providers/bloodtest-data';

import { AngularFire,
         FirebaseListObservable  
       } from 'angularfire2';

@Component({
    selector: 'page-charts',
    templateUrl: 'charts.html'
})
export class ChartsPage {

    public bloodtestList: FirebaseListObservable<any>;
    userId: string;
    public bloodtestArray = [];
    

    constructor(public nav: NavController, public bloodtestData: BloodtestData,
                public af: AngularFire) {

     
        this.nav = nav;

   
        // var hdlArray = [];
        // var ldlArray = [];
        // var triglArray = [];
        // var totcholArray = [];
        // var testDateArray = [];
        
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
              console.log(">> snapshot.key: " + snapshot.key)
              console.log(">> snapshot.val(): ")
              console.log(snapshot.val())
              this.bloodtestArray.push(snapshot.val())
           });
         })
        console.log("** bloodtestArray: ");console.log(this.bloodtestArray); 
        console.log("** length of array: ");console.log(this.bloodtestArray.length);

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
      
      // for (var i=0; i<bloodtestList.length; i++) {
      //   hdlArray.push(Number(bloodtestList[i].hdl));
      //   ldlArray.push(Number(bloodtestList[i].ldl));
      //   triglArray.push(Number(bloodtestList[i].trigl));
      //   totcholArray.push(Number(bloodtestList[i].totchol));
      //   testDateArray.push(bloodtestList[i].testDate);
      //    }
      }
    }


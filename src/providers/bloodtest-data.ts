import { Injectable } from '@angular/core';
import { AngularFire,
         FirebaseListObservable,
         FirebaseObjectObservable  
       } from 'angularfire2';

@Injectable()
export class BloodtestData {
  bloodtestList: FirebaseListObservable<any>;
  bloodtestDetail: FirebaseObjectObservable<any>;
  userId: string;

  constructor(public af: AngularFire) {
    console.log('Hello BloodtestData Provider');
    this.af.auth.subscribe(auth => {
    if (auth) {
      this.bloodtestList = this.af.database.list('/userProfile/' +
      auth.uid + '/bloodtestList');
      this.userId = auth.uid;
      } 
    });
  }

  getBloodtestList(){
    return this.bloodtestList;
  }

  getBloodtestDetail(bloodtestId: string){
    return this.bloodtestDetail = this.af.database.object('/userProfile/' +
    this.userId + '/bloodtestList/' + bloodtestId);
  }

  createBloodtest(bloodtestDesc: string, hdl: number, ldl: number,
                trigl: number, totchol: number, testDate: string = null){
    return this.bloodtestList.push({
      bloodtestDesc: bloodtestDesc,
      hdl: hdl,
      ldl: ldl,
      trigl: trigl,
      totchol: totchol,
      testDate: testDate
    });
  }

  removeBloodtest(bloodtestId: string){
    return this.bloodtestList.remove(bloodtestId);
  } 

}
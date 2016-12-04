import { Injectable } from '@angular/core';
import { AngularFire,
         FirebaseListObservable,
         FirebaseObjectObservable  
       } from 'angularfire2';

@Injectable()
export class BillData {
  billList: FirebaseListObservable<any>;
  billDetail: FirebaseObjectObservable<any>;
  userId: string;

  constructor(public af: AngularFire) {
    console.log('Hello BillData Provider');
    this.af.auth.subscribe(auth => {
    if (auth) {
      this.billList = this.af.database.list('/userProfile/' +
      auth.uid + '/billList');
      this.userId = auth.uid;
      } 
    });
  }

  getBillList(){
    return this.billList;
  }

  getBill(billId: string){
    return this.billDetail = this.af.database.object('/userProfile/' +
    this.userId + '/billList/' + billId);
  }

  createBill(name: string, amount: number, dueDate: string = null){
    return this.billList.push({
      name: name,
      amount: amount,
      dueDate: dueDate,
      paid: false
    });
  }

  removeBill(billId: string){
    return this.billList.remove(billId);
  } 

  payBill(billId: string){
    return this.billList.update(billId, {
    paid: true
    });
  }


  


}

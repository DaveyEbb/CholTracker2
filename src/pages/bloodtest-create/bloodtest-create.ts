import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BloodtestData } from '../../providers/bloodtest-data';

@Component({
  selector: 'page-bloodtest-create',
  templateUrl: 'bloodtest-create.html'
})
export class BloodtestCreatePage {

  constructor(public nav: NavController, public bloodtestData: BloodtestData ) {
    this.nav = nav;
    this.bloodtestData = bloodtestData;
  }

  ionViewDidLoad() {
    console.log('Hello BloodtestCreate Page');
  }

  createBloodtest(bloodtestDesc: string, hdl: number, ldl: number, 
              trigl: number, totchol: number, testDate: string) {
    this.bloodtestData.createBloodtest(bloodtestDesc, hdl, ldl, trigl, 
                                        totchol, testDate).then( () =>
    {
      this.nav.pop();
    });
  }

}

















// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { FormBuilder, Validators } from '@angular/forms';
// import { BloodtestData } from '../../providers/bloodtest-data';

// @Component({
//   selector: 'page-bloodtest-create',
//   templateUrl: 'bloodtest-create.html'
// })
// export class BloodtestCreatePage {

//   public newBloodtestForm;
//   bloodtestDescChanged: boolean = false;
//   hdlChanged: boolean = false;
//   ldlChanged: boolean = false;
//   triglChanged: boolean = false;
//   totcholChanged: boolean = false;
//   testDateChanged: boolean = false;

//   constructor(public nav: NavController, public bloodtestData: BloodtestData,
//     public formBuilder) {

//       this.newBloodtestForm = formBuilder.group({
//         bloodtestDesc: ['', Validators.required]
//         hdl: [0, Validators.required],
//         ldl: [0, Validators.required],
//         trigl: [0, Validators.required],
//         totchol: [0, Validators.required],
//         testDate: [0, Validators.required],
//       });
//     }

//     elementChanged(input) {
//       let field = input.inputControl.name;
//       this[field + "Changed"] = true;
//     }

//   ionViewDidLoad() {
//     console.log('Hello BloodtestCreate Page');
//   }

//   createBloodtest() {
//     this.submitAttempt = true;

//     if (!this.newBloodtestForm.valid){
//       console.log(this.newBloodtestForm.value);
//     } else {
//       this.bloodtestData.createBloodtest(
//         this.newBloodtestForm.value.hdl,
//         this.newBloodtestForm.value.ldl,
//         this.newBloodtestForm.value.trigl)
//         .then( () => {
//           this.navCtrl.pop();
//         }, error => {
//           console.log(error);
//         });
//     }

//   }

// }
    
// //     createBloodtest(bloodtestDesc: string, hdl: number, ldl: number,
// //                 trigl: number, totchol: number, testDate: string = null){

    
    
    
    
    
// //     bloodtestDesc: string, hdl: number, ldl: number, 
// //               trigl: number, totchol: number, testDate: string) {
// //     this.bloodtestData.createBloodtest(bloodtestDesc, hdl, ldl, trigl, 
// //                                         totchol, testDate).then( () =>
// //     {
// //       this.nav.pop();
// //     });
// //   }

// // }


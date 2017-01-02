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
    public btArray = [];
    

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
              //console.log(">> snapshot.key: " + snapshot.key)
              //console.log(">> snapshot.val(): ")
              //console.log(snapshot.val())
              this.bloodtestArray.push(snapshot.val())
           });
         })
        //console.log("** bloodtestArray: ");console.log(this.bloodtestArray); 
        //console.log("** length of array: ");console.log(this.bloodtestArray.length);

        // Strip out duplicates
        var NewArray = [];
        var notYetPushed = false;
        var i,j;

        for (i=0; i<this.bloodtestArray.length; i++) {
	        //console.log(">> i: " + i);
	        notYetPushed = true;
 	        for (j=0; j<NewArray.length; j++) {
		          console.log(">>>> j: " + j);
		          if (NewArray.length == 0) {
			          notYetPushed = true; console.log("Not yet pushed");
		          } else {
			              //console.log(">>>> bloodtestArray[i].testDate: " + bloodtestArray[i].testDate);
			              //console.log(">>>> NewArray[j].testdate: " + NewArray[j].testDate);
			            if (this.bloodtestArray[i].testDate == NewArray[j].testDate) {
				            notYetPushed = false; //console.log("notYetPushed: " + notYetPushed);
				            //console.log(">>>> NewArray[j]: ");console.log(NewArray[j]);
			            }    
		            }
	          }
            //console.log("** notYetPushed: " + notYetPushed);
	          if (notYetPushed == true) {
		            NewArray.push(this.bloodtestArray[i]);
		            console.log("Pushed: ");console.log(this.bloodtestArray[i]);
	        }
        }
        //console.log("NewArray: ");console.log(NewArray); 
        //console.log("Length of NewArray: " + NewArray.length);
        this.bloodtestArray = NewArray;
        //console.log(this.bloodtestArray);

    }

    ionViewDidEnter() {

      var hdlArray = [];
      var ldlArray = [];
      var triglArray = [];
      var totcholArray = [];
      var testDateArray = [];
      for (var i=0; i<this.bloodtestArray.length; i++) {
        //console.log("HDL " + i + " " + bloodtestList[i].hdl);
        //console.log("i=" + i + " length:" + bloodtestList.length);
        hdlArray.push(Number(this.bloodtestArray[i].ldl));
        ldlArray.push(Number(this.bloodtestArray[i].hdl));
        triglArray.push(Number(this.bloodtestArray[i].trigl));
        totcholArray.push(Number(this.bloodtestArray[i].totchol));
        testDateArray.push(this.bloodtestArray[i].testDate);
         }

        var canvas = <HTMLCanvasElement> document.getElementById("myChart");
        var ctx = canvas.getContext("2d");  // 这里是关键, 不能写在constructor()中
        ChartJs.Line(ctx,{
            data: {
                //labels: [testDateArray[0], date2, date3, date4, date5],
                labels: testDateArray,
                datasets: [
                    {
                    label: "HDL (Good)",
            fill: false,
            lineTension: 0.1,
            borderColor: "Green",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: hdlArray,
            //data: [bloodtestList[0].hdl, bloodtestList[1].hdl, bloodtestList[2].hdl, bloodtestList[3].hdl, bloodtestList[4].hdl],
            //data: [1.8, 1.63, 1.59, 4.1, 5],
            spanGaps: false,
                },
                {
                    label: "LDL (Bad)",
            fill: true,
            lineTension: 0,
            borderColor: "Red",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: ldlArray,
            spanGaps: false,
                }, 
                {
                    label: "Triglycerides",
            fill: true,
            lineTension: 0,
            borderColor: "grey",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: triglArray,
            spanGaps: false,
                },  
                {
                    label: "Total",
            fill: true,
            lineTension: 0,
            borderColor: "blue",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: totcholArray,
            spanGaps: false,
                }  
             ]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: "time",
                        display: "true",
                        scaleLabel: {
                            labelString: 'Date'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        })
    };
    }
  


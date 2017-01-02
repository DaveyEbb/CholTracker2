import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
import { HomePage } from '../home/home';
import { ChartsPage } from '../charts/charts';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = WelcomePage;
  tab2Root: any = HomePage;
  tab3Root: any = ChartsPage;

  //constructor(public navCtrl: NavController) {}
  constructor() {}

  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}

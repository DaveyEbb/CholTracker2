import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';

import { AngularFire } from 'angularfire2';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, public af: AngularFire) {
    af.auth.subscribe( user => {
      if (user) {
        console.log("User: " + user);
        // this.rootPage = HomePage;
        this.rootPage = LandingPage;
      } else {
        this.rootPage = LandingPage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup' 
import { AuthData } from '../../providers/auth-data';

@Component({
selector: 'page-landing',
templateUrl: 'landing.html',
})

export class LandingPage {
  constructor(public navCtrl: NavController, public authData: AuthData,
  public loadingCtrl: LoadingController) {}

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToBillList(){
    this.authData.anonymousLogin().then( user => {
      this.navCtrl.push(HomePage);
    });
    let loading = this.loadingCtrl.create({
      dismissOnPageChange: true
    });
    loading.present();
  }

  goToBloodtestList(){
    this.authData.anonymousLogin().then( user => {
      this.navCtrl.push(HomePage);
    });
    let loading = this.loadingCtrl.create({
      dismissOnPageChange: true
    });
    loading.present();
  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }
}

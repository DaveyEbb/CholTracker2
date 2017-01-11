import { 
  NavController 
//  LoadingController, AlertController
 } from 'ionic-angular';
import { Component } from '@angular/core';

//import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
// import { LoginPage } from '../login/login';
import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public authData: AuthData) {}

  ionViewDidLoad() {
    console.log('Hello WelcomePage Page');
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  logOut(){
    this.authData.logoutUser();
    //this.authData.logoutUser().then(() => {
      //this.navCtrl.setRoot(LoginPage);
    //});
  }

}

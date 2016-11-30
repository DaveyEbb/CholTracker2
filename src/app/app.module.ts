import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// Importing pages
import { LandingPage } from '../pages/landing/landing';
import { BillDetailPage } from '../pages/bill-detail/bill-detail';
import { CreateBillPage } from '../pages/create-bill/create-bill';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
// Importing providers
import { AuthData } from '../providers/auth-data';
import { BillData } from '../providers/bill-data';
// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyALaAnl8KGE1ihyofSNex_bht7GBwd4xTM",
    authDomain: "cholesterol-tracker.firebaseapp.com",
    databaseURL: "https://cholesterol-tracker.firebaseio.com",
    storageBucket: "cholesterol-tracker.appspot.com",
    messagingSenderId: "505517013760"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    BillDetailPage,
    CreateBillPage,
    HomePage,
    LoginPage,
    ResetPasswordPage,
    SignupPage
  ],
imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
],
bootstrap: [IonicApp],
entryComponents: [
    MyApp,
    LandingPage,
    BillDetailPage,
    CreateBillPage,
    HomePage,
    LoginPage,
    ResetPasswordPage,
    SignupPage
],
providers: [
  [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  AuthData,
  BillData
  ]
})
export class AppModule {}
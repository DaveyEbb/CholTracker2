import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
//import firebase from 'firebase'; 
// advised by Jorge that AngularFire beta6 already has Firebase.
// Firebase is imported in the "node_modules/angularfire2/interfaces.d.ts/" file

@Injectable()
export class AuthData {
  fireAuth: any;
  constructor(public af: AngularFire) {
    af.auth.subscribe( user => {
      if (user) {
        this.fireAuth = user.auth;
        console.log(user);
      }
    });
  }

  getUser() {
    return this.fireAuth;
  }

  loginUser(newEmail: string, newPassword: string): any {
    return this.af.auth.login({
      email: newEmail,
      password: newPassword });
    }

    anonymousLogin(){
      return this.af.auth.login({
        provider: AuthProviders.Anonymous,
        method: AuthMethods.Anonymous,
      });
    }

  linkAccount(email: string, password: string): any {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    const userProfile = firebase.database().ref('/userProfile');
    return this.fireAuth.link(credential).then( (user) => {
      userProfile.child(user.uid).update({
        email: email,
      });
    }, (error) => {
        console.log("Account linking error", error);
      });
    }

    resetPassword(email: string): any {
      return firebase.auth().sendPasswordResetEmail(email);
    }

    logoutUser(): any {
      return firebase.auth().signOut();
    }



}

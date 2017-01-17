import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import firebase from 'firebase'; 
// advised by Jorge that AngularFire beta6 already has Firebase.
// Firebase is imported in the "node_modules/angularfire2/interfaces.d.ts/" file

@Injectable()
export class AuthData {
  //fireAuth: any;
  public fireAuth: any;
  public userProfile: any;

  // constructor(public af: AngularFire) {
  //   console.log("** auth-data constructor called");
  //   af.auth.subscribe( user => {
  //     if (user) {
  //       this.fireAuth = user.auth;
  //       console.log("User: ");
  //       console.log(user);
  //     } else {
  //       console.log("** authdata: no logged-in user");
  //     }
  //   });
  // }

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/userProfile');
}

  getUser() {
    return this.fireAuth;
  }

  // 
  
  loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
    // anonymousLogin(){
    //   return this.af.auth.login({
    //     provider: AuthProviders.Anonymous,
    //     method: AuthMethods.Anonymous,
    //   });
    // }

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

    // signupUser(email: string, password: string): any {
    //   return this.fireAuth.createUserWithEmailAndPassword(email, password)
    //     .then((newUser) => {
    //       this.userProfile.child(newUser.uid).set({email: email});
    //     });
    // }

    signupUser(email: string, password: string): any {
      return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => {
      //return this.af.auth.createUserWithEmailAndPassword(email, password).then((newUser) => {
        this.userProfile.child(newUser.uid).set({
          email: email
        });
      });
    }

    logoutUser(): any {
      return this.fireAuth.signOut();
        //this.af.auth.logout();
    }



}

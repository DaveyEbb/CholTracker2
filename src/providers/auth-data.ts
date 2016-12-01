import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

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
}

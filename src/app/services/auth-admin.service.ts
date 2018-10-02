import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
import { resolve } from 'path';

@Injectable()
export class AuthAdminService {

  constructor(
    public afAuth: AngularFireAuth,
    private firebase: AngularFireDatabase
  ) { }

  // login user
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( user => resolve(user),
      err => reject(err));
    })
  }

  // data user
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  // log out user
  logout() {
    return this.afAuth.auth.signOut();
  }

}

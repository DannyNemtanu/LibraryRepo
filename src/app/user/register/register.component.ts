import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';

  constructor(private router: Router) {}
  ngOnInit() {
    firebase.initializeApp(environment.firebase);
  }

  // login() {
  //   this.afAuth.auth.signInWithPopp(new auth.GoogleAuthProvider());
  // }
  // logout() {
  //   this.afAuth.auth.signOut();
  // }

  doRegister() {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          res => {
            resolve(res);
            this.router.navigate(['login']);
          },
          err => {
            reject(err);
            console.log(err);
          }
        );
    });
  }
}

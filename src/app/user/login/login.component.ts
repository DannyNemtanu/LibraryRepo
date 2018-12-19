import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email = '';
password = '';
  constructor(private router: Router) { }

  ngOnInit() {
    firebase.initializeApp(environment.firebase);
  }
  doLogin() {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          res => {
            resolve(res);
            this.router.navigate(['../reader']);
          },
          err => {
            reject('The username or password is wrong!');
          }
        );
    });
};

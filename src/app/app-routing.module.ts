import { ReaderComponent } from './reader/reader.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './user/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'reader',
    component: ReaderComponent
  }
];

@NgModule({
  imports: [
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBq02Ilw1Mj8neHxwwG9et5HS6qsmkv4MQ',
      authDomain: 'librepo-666b0.firebaseapp.com',
      databaseURL: 'https://librepo-666b0.firebaseio.com',
      projectId: 'librepo-666b0',
      storageBucket: 'librepo-666b0.appspot.com',
      messagingSenderId: '852049750117'
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

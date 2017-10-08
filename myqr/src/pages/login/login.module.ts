import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



@NgModule({
  declarations: [
    LoginPage,

  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    //AppService
  ]
})
export class LoginPageModule {}

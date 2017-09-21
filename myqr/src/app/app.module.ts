import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { ListaCargaPage } from '../pages/lista-carga/lista-carga';

import { AngularFireModule } from 'angularfire2';
//modulo para la conexion a la base de datos
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

//modulo para utlizar en barcoder
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//modulo para utilizar toast
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    ListaCargaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //inicializamos las credenciales de conexion a la base de firebase
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    //modulo necesario para la conexion
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    ListaCargaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}

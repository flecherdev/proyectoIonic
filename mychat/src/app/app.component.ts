import { Component, ViewChild } from '@angular/core';
import { Nav,  Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
//import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = LoginPage;
  
  pages: Array<{title:string, component:any}>;
  
    constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
      /*platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.show();
      });*/
      this.initializeApp();
      this.pages = [{
        title: 'Login', component: LoginPage
      }];
    }

    initializeApp(){
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  
    openPage(page){
      this.nav.setRoot(page.component);
    }
 
}

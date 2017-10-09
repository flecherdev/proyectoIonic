import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
//import { LoginPage } from '../login/login';
import { PrincipalPage } from '../principal/principal';
import { Pps4aPage } from '../pps4a/pps4a';
import { Pps4bPage } from '../pps4b/pps4b';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //usuario:string;
  //foto:string;

  tab1Root = PrincipalPage;
  tab2Root = Pps4aPage;
  tab3Root = Pps4bPage;
  //tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  

  constructor(public navCrlt:NavController, public navParams:NavParams) {
     //this.navCrlt.setRoot(Pps4aPage,{usuario:this.navParams.get('usuario')});
    // this.usuario = this.navParams.get("usuario");
     //console.log("enta tabs "+this.usuario);
  }


  
}

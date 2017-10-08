import { Component } from '@angular/core';

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


  tab1Root = PrincipalPage;
  tab2Root = Pps4aPage;
  tab3Root = Pps4bPage;
  //tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;

  constructor() {

  }
}

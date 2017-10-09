import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { Pps4aPage } from '../pps4a/pps4a';
import { Pps4bPage } from '../pps4b/pps4b';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  rootPage:any = TabsPage;
  nombre:string;
  foto:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = this.navParams.get("usuario");
    this.foto = this.navParams.get("foto");
    console.log("estoy en principal: " + this.nombre + " " + this.foto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  pps4a(){
    this.navCtrl.push(Pps4aPage,{usuario:this.nombre,foto:this.foto});
  }

  pps4b(){
    this.navCtrl.push(Pps4bPage,{usuario:this.nombre,foto:this.foto});
  }


}

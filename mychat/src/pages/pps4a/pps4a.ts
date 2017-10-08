import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pps4aPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pps4a',
  templateUrl: 'pps4a.html',
})
export class Pps4aPage {

  item :any [];
  mensaje:string;
  evioMensaje:string;
  usuario:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = this.navParams.get("usuario");
  }

  agregarItem(){
    this.evioMensaje = this.mensaje;
    console.log("contenido de "+this.evioMensaje);
  }

  mensage(){
    
  }
  
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireDatabase } from 'angularfire2/database';

import { MensajeItem } from '../../models/mensaje-lista/mensaje-list.interface';
/**
 * Generated class for the Pps4bPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pps4b',
  templateUrl: 'pps4b.html',
})
export class Pps4bPage {

  item :any [];
  mensaje:string;
  evioMensaje:string;
  mensajesLista: MensajeItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  agregarItem(){
    this.evioMensaje = this.mensaje;
    console.log("contenido de "+this.evioMensaje);
  }

  mensajesSala(){
    //this.mensajesLista = this.
  }
  
}

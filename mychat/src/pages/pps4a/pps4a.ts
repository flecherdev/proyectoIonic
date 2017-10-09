import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioItem } from '../../models/usuarios-list/usuarios-list.interface';

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
  nombre:string;
  foto:string;
  usuario:UsuarioItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = this.navParams.get('usuario');
    this.foto = this.navParams.get('foto');
    console.log("estoy en pps4a "+this.nombre);
 
  }

  agregarItem(){
    this.evioMensaje = this.nombre + " - " +this.mensaje;
  }

  mensage(){
    
  }
  
}

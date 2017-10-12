import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioItem } from '../../models/usuarios-list/usuarios-list.interface';
import { MensajesChatProvider } from '../../providers/mensajes-chat/mensajes-chat';
import { FirebaseListObservable } from 'angularfire2/database';

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
export class Pps4bPage implements OnInit{

  mensaje:string;
  nombre:string;
  foto:string;
  mensajeLista:MensajeItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menProv:MensajesChatProvider) {
    this.nombre = this.navParams.get('usuario');
    this.foto = this.navParams.get('foto');
   
    console.log("estoy en pps4b "+this.nombre);
  }

  agregarItem(){
    console.log("------------ en agregar item ------------");
    console.log(this.nombre+"-"+this.foto+"-"+this.mensaje);
    //this.evioMensaje = this.nombre + " - " +this.mensaje;
    this.menProv.agregarChat(this.nombre,this.foto,this.mensaje,"pps4b");
  }

  
  ngOnInit(){
    this.menProv.traerMensajesSala("pps4b")
    .subscribe(mensajes => {
      this.mensajeLista = mensajes
      console.log(mensajes);
    } ); 
    console.log("estoy en ngOnInit ");

    console.log(this.mensajeLista);
  }
}

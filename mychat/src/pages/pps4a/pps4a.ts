import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioItem } from '../../models/usuarios-list/usuarios-list.interface';
import { MensajesChatProvider } from '../../providers/mensajes-chat/mensajes-chat';
import { MensajeItem } from '../../models/mensaje-lista/mensaje-list.interface';
import { FirebaseListObservable } from 'angularfire2/database';

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
export class Pps4aPage implements OnInit{
  
  item :any [];
  mensaje:string;
  evioMensaje:string;
  nombre:string;
  foto:string;
  usuario:UsuarioItem;
  miMensaje:MensajeItem;
  mensajeLista: MensajeItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menProv:MensajesChatProvider) {
    this.nombre = this.navParams.get('usuario');
    this.foto = this.navParams.get('foto');
    
    console.log("estoy en pps4a "+this.nombre);
    //this.mensajeLista$ = this.menProv.traerMensajesSala("pps4a").subscribe();
    
    
  }

  agregarItem(){
    this.miMensaje.nombre = this.nombre;
    this.miMensaje.foto = this.foto;
    this.miMensaje.mensaje =this.mensaje;
    this.miMensaje.sala = "pps4a";
    //this.evioMensaje = this.nombre + " - " +this.mensaje;
    //this.menProv.agregarChat(this.miMensaje);
  }

  mensageSala(){
    
  }

  ngOnInit(){
    this.menProv.traerMensajesSala("pps4a")
                .subscribe(mensajes => {this.mensajeLista = mensajes} ); 
                console.log("estoy en ngOnInit ");
                console.log(this.mensajeLista);
  }
  
}

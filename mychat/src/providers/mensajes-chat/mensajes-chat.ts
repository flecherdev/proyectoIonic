import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { MensajeItem } from '../../models/mensaje-lista/mensaje-list.interface';

import 'rxjs/add/operator/map';

/*
  Generated class for the MensajesChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MensajesChatProvider {

  mensajeList: MensajeItem[];
  mensajeListRef$: FirebaseListObservable<MensajeItem[]>;

  constructor(public http: Http,public datos: AngularFireDatabase) {
    console.log('Hello MensajesChatProvider Provider');
    this.mensajeListRef$ = this.datos.list('mensajes-chat');
    
    this.datos.list('mensajes-chat').subscribe(mensaje =>{
      this.mensajeList = mensaje;
    });

  }

  traerMensajesSala(sala){
    let mensajes: MensajeItem[];
    this.mensajeList.forEach(mensaje => {
      if(mensaje.sala == sala){
        mensajes.push(mensaje);
      }
    });

    return mensajes;
  }

  agregarChat(mensaje: MensajeItem):boolean{
    try {
      this.mensajeListRef$.push({
        nombre: mensaje.nombre,
        foto: mensaje.foto,
        mensaje: mensaje.mensaje,
        sale:mensaje.sala
      });

      return true;
      
    } catch (error) {
      console.log(error);  
      return false;  
    }
  }

}

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

  miMen = {} as MensajeItem;
  mensajeList : MensajeItem[];
  mensajes: FirebaseListObservable<MensajeItem[]>;
  mensajeRef$: FirebaseListObservable<MensajeItem[]>;

  constructor(public datos: AngularFireDatabase) {
   // console.log('Hello MensajesChatProvider Provider');
   // this.mensajeListRef$ = this.datos.list('mensaje-chat');
    this.mensajeRef$ = this.datos.list('mensaje-chat');
  }

  traerMensajesSala(sala){
    try {
      this.mensajes = this.datos.list('/mensaje-chat',{
        query:{
          orderByChild:'sala',
          equalTo:sala
        }
      }) as FirebaseListObservable<MensajeItem[]>;

      
    } catch (error) {
      console.log(error);
    }

    return this.mensajes;
  }

  traerTodos(){

  }


  agregarChat(nombre,foto,mensaje,sala){

    let date = new Date();
    console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
    let horaActual:string = date.getHours()+":"+date.getMinutes();
    try {
      this.mensajeRef$.push({
        nombre: nombre,
        foto: foto,
        mensaje: mensaje,
        sala:sala,
        hora:horaActual
      });

      return true;
      
    } catch (error) {
      console.log(error);  
      return false;  
    }
  }

}

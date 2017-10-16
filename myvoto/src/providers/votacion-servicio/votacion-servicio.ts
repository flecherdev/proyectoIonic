import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { VotacionItem } from '../../models/votacion-list/votacion-list.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';



@Injectable()
export class VotacionServicioProvider {

  //Atributos de instancia 
  miVoto = {} as VotacionItem[];
  miListaVoto : FirebaseListObservable<VotacionItem[]>;
  miListaVotoRef$ : FirebaseListObservable<VotacionItem[]>;
  misTemas: FirebaseListObservable<any[]>;
  lista:Array<any>;

  constructor(private datos:AngularFireDatabase, private altCtrl: AlertController) {
    this.miListaVotoRef$ = this.datos.list('votacion');  
    this.miListaVotoRef$.subscribe(datos => {this.lista = datos}); 
  }

  traerVotacionPorNombre(nombre){
    try {
      this.miListaVoto = this.datos.list('/votacion',{
        query:{
          orderByChild:'nombre',
          equalTo:nombre
        }
      }) as FirebaseListObservable<VotacionItem[]>;

      
    } catch (error) {
      console.log(error);
    }

    return this.miListaVoto;
  }


  compararNombreYVotacion(nombre,votacion,estado){
    let entro = false;
    this.traerVotacionPorNombre(nombre).forEach(vot => {
      if(vot.values().next().value.votacion == votacion){

      }
      
    });
    
    
  }

  traerTemas(){
    this.misTemas = this.datos.list('/temas');
    return this.misTemas;
  }

  agregar(nombre,estado,votacion){
    
        let date = new Date();
        console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
        let horaActual:string = date.getHours()+":"+date.getMinutes();
        try {
          this.miListaVotoRef$.push({
            nombre: nombre,
            estado: estado,
            votacion: votacion
          });
          
          return true;
          
        } catch (error) {
          console.log(error);  
          return false;  
        }
      }

  presentAlert(titulo,mensaje) {
    const alert = this.altCtrl.create({
      title: titulo,
      subTitle: mensaje,
       buttons: ['Aceptar']
      });
      alert.present();
    }

}

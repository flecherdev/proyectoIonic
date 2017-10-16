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
  miListaVotoRefMatafuego$: FirebaseListObservable<VotacionItem[]>;
  miListaVotosRefAdvertencias$: FirebaseListObservable<VotacionItem[]>;
  misTemas: FirebaseListObservable<any[]>;
  lista:Array<any>;
  

  constructor(private datos:AngularFireDatabase, private altCtrl: AlertController) {
    this.miListaVotoRef$ = this.datos.list('votacion');  
    this.miListaVotoRef$.subscribe(datos => {this.lista = datos}); 
  }

  traerVotacionPorNombre(nombre):Array<VotacionItem>{
    let listaPorNombre:Array<VotacionItem>;
    try {
      this.miListaVoto = this.datos.list('/votacion',{
        query:{
          orderByChild:'nombre',
          equalTo:nombre
        }
      }) as FirebaseListObservable<VotacionItem[]>;
    
    this.miListaVoto.subscribe(datos => {listaPorNombre = datos} );
      
    } catch (error) {
      console.log(error);
    }

    return listaPorNombre;
  }


  compararNombreYVotacion(nombre,votacion,estado){
    let ban = false;
    this.lista.forEach(vot => {
      
      if(vot.votacion == votacion && vot.nombre == nombre){
        console.log("-------- La votacion ya se realizo -----------");
        ban = true;
        return;
      }
      
    });

    if(!ban){
      console.log("AGREGAR BOTACION");
      this.agregar(estado,nombre,votacion);
      return;
    }else{
      console.log("NO SE AGREGA VOTACION");
    }
    
  }

  traerTemas(){
    this.misTemas = this.datos.list('/temas');
    return this.misTemas;
  }

  agregar(estado,nombre,votacion){

        let date = new Date();
        console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
        let horaActual:string = date.getHours()+":"+date.getMinutes();
        try {
          this.miListaVotoRef$.push({
            estado: estado,
            nombre: nombre,
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

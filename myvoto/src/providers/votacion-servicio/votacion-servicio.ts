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
  listaMatafuego:Array<any>;
  listaAdvertencia:Array<any>;

  constructor(private datos:AngularFireDatabase, private altCtrl: AlertController) {
    this.miListaVotoRef$ = this.datos.list('votacion');  
    this.miListaVotoRefMatafuego$ = this.datos.list('votacion-matafuegos');
    this.miListaVotosRefAdvertencias$ = this.datos.list('votacion-advertencia');
    this.miListaVotoRef$.subscribe(datos => {this.lista = datos}); 
    this.miListaVotoRefMatafuego$.subscribe(datos => {this.listaMatafuego = datos});
    this.miListaVotosRefAdvertencias$.subscribe(datos => {this.listaAdvertencia = datos});
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

  traerPlantas(){
    return this.miListaVotoRef$;
  }

  traerMatafuegos(){
    return this.miListaVotoRefMatafuego$;
  }

  traerAdvertencias(){
    return this.miListaVotosRefAdvertencias$;
  }

  compararNombreYVotacion(nombre,votacion,estado){
    let ban = false;

    switch (votacion) {
      case "Colocar plantas":
      this.lista.forEach(vot => {
        
        if(vot.votacion == votacion && vot.nombre == nombre){
          console.log("-------- La votacion ya se realizo -----------");
          ban = true;
          return;
        }
        
      });
        break;
      case "Colocar matafuegos":
      this.listaMatafuego.forEach(vot => {
        
        if(vot.votacion == votacion && vot.nombre == nombre){
          console.log("-------- La votacion ya se realizo -----------");
          ban = true;
          return;
        }
        
      });
        break;
      case "Colocar señales de advertencia":
      this.listaAdvertencia.forEach(vot => {
        
        if(vot.votacion == votacion && vot.nombre == nombre){
          console.log("-------- La votacion ya se realizo -----------");
          ban = true;
          return;
        }
        
      });
       break;
      default:
        break;
    }
    

    if(!ban){
      console.log("AGREGAR BOTACION");
      this.agregar(estado,nombre,votacion);
      return;
    }else{
      console.log("NO SE AGREGA VOTACION");
      this.presentAlert("Advertencia!!!","Ya emitio su voto para este tema")
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
    switch (votacion) {
      case "Colocar plantas":
        try {
          this.miListaVotoRef$.push({
            estado: estado,
            nombre: nombre,
            votacion: votacion
          });
        } catch (error) {
          console.log(error);    
        }
        break;
      case "Colocar matafuegos":
        try {
          this.miListaVotoRefMatafuego$.push({
            estado: estado,
            nombre: nombre,
            votacion: votacion
          });
        } catch (error) {
          console.log(error);    
        }
        break;
      case "Colocar señales de advertencia":
        try {
          this.miListaVotosRefAdvertencias$.push({
            estado: estado,
            nombre: nombre,
            votacion: votacion
          });
        } catch (error) {
          console.log(error);    
        }
        break;

      default:
        console.log("ninguna opcion definida :(");
        break;
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

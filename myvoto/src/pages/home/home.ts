import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VotacionItem } from '../../models/votacion-list/votacion-list.interface';
import { VotacionServicioProvider } from '../../providers/votacion-servicio/votacion-servicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  nombre:string;
  foto:string
  temas:any[];

  constructor(public navCtrl: NavController,public votProv: VotacionServicioProvider, public navParams: NavParams) {
    this.nombre = this.navParams.get('usuario');
    this.foto = this.navParams.get('foto');
  }

  votoPositivo(voto){
    console.log("Estoy en postivo");
    console.log(voto.tema);
    this.votProv.traerPorNombreYVoto(this.nombre,voto.tema);
  }

  votoNegativo(voto){
    console.log("Estoy en negativo");
    console.log(voto.tema);
  }

  ngOnInit(){
    this.votProv.traerTemas().subscribe(tema => {
      this.temas = tema;
    });
  }

}

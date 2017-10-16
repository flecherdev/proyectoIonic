import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VotacionItem } from '../../models/votacion-list/votacion-list.interface';
import { VotacionServicioProvider } from '../../providers/votacion-servicio/votacion-servicio';

import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the EstadoVotacionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estado-votacion',
  templateUrl: 'estado-votacion.html',
})
export class EstadoVotacionPage {

  lista:Array<any>;
  listaMatafuego:Array<any>;
  listaAdvertencia:Array<any>;

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController, public navParams: NavParams, public votProv: VotacionServicioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadoVotacionPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Filtrar por Tema',
      buttons: [
        {
          text: 'Plantas',
          role: 'destructive',
          handler: () => {
            console.log('estoy en plantas');
            this.votProv.traerPlantas().subscribe(plantas => {
              this.lista = plantas;
              console.log(plantas);
            });
          }
        },{
          text: 'Matafuegos',
          handler: () => {
            console.log('estoy en matafuegos');
            this.votProv.traerMatafuegos().subscribe(matafuego => {
              this.lista = matafuego;
              console.log(matafuego);
            });
          }
        },{
          text: 'Advertencias',
          role: 'cancel',
          handler: () => {
            console.log('estoy en advertencias');
            this.votProv.traerAdvertencias().subscribe(advertencias => {
              this.lista = advertencias;
              console.log(advertencias);
            });
          }
        }
      ]
    });
    actionSheet.present();
  }


}

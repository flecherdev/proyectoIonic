import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Codigos } from '../../models/codigos-list/codigos-list.interface';
//mi alert
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-lista-carga',
  templateUrl: 'lista-carga.html',
})
export class ListaCargaPage {

  codigosListRef$ : FirebaseListObservable<Codigos[]>;
  cost:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, private database:AngularFireDatabase) {
    this.codigosListRef$ = this.database.list('codigos-lista');
  
    console.log(this.cost.toString());
    //this.codigosListRef$ = this.database.list('codigos-lista');
    //console.log(this.codigosListRef$);
  }


  contar(){
    this.codigosListRef$.forEach(dato => {
      this.cost+= dato.values().next().value.valor
    });
    //this.presentValor(this.cost.toString());
  }

  presentValor(text:string) {
    const alert = this.alertCtrl.create({
      title: 'Exito',
      subTitle: text,
      buttons: ['Aceptar']
    });
    alert.present();
  }
}

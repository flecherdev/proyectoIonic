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

  lista:Array<any>;
  codigosListRef$ : FirebaseListObservable<Codigos[]>;
  total:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, private database:AngularFireDatabase) {
    this.codigosListRef$ = this.database.list('codigos-lista');
    this.codigosListRef$.subscribe(datos => {
      this.lista = datos;
    });    
    this.contar();
  }

  contar(){
    this.lista.forEach(codigo => {
      console.log(codigo.valor);
      this.total += codigo.valor;
    });
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

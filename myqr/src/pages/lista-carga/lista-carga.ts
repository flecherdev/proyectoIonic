import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaCargaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-carga',
  templateUrl: 'lista-carga.html',
})
export class ListaCargaPage {

  public codigos = [{clave:"2786f4877b9091dcad7f35751bfcf5d5ea712b2f",valor:100},
             {clave:"ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172",valor:50},
             {clave:"8c95def646b6127282ed50454b73240300dccabc",valor:10}];

  cont = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.codigos.forEach(cod => {
      this.cont += cod.valor;
    });
  }

  ionViewDidLoad() {
    console.log(this.codigos);
  }

}

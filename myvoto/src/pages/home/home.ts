import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  votoPositivo(){
    console.log("Estoy en postivo");
  }

  votoNegativo(){
    console.log("Estoy en negativo");
  }

}

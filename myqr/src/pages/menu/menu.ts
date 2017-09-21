import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { ListaCargaPage } from '../lista-carga/lista-carga';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  scanData : {};
  options :BarcodeScannerOptions;
  dato = "";

  codigos = [{clave:"2786f4877b9091dcad7f35751bfcf5d5ea712b2f",valor:100},
             {clave:"ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172",valor:50},
             {clave:"8c95def646b6127282ed50454b73240300dccabc",valor:10}];
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner
              ,private toast: Toast) {}

  async scan(){
    this.options = {
        prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        console.log(barcodeData);
        this.scanData = barcodeData;
        this.navParams.data = barcodeData;
        this.verificarCodigos(barcodeData.text);
    }, (err) => {
        console.log("Error occured : " + err);
    });         
  }   
  
  verificarCodigos(datosBar:string){
    this.codigos.forEach(codigo => {
      if(codigo.clave == datosBar){
        //indica que el codigo se encuentra y se realiza la carga
        this.toast.show('Se realizo la carga', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      return;
      }

      this.toast.show('El codigo ya fue registrado', '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );

    });
  }

  mostrar(){
    this.codigos.forEach(codigo =>{
      console.log(codigo.clave +" "+codigo.valor);
    });
  }

  listaCarga(){
    //this.navCtrl.setRoot(ListaCargaPage,this.navParams);
    this.navCtrl.push(ListaCargaPage,this.codigos);
  }
  

}

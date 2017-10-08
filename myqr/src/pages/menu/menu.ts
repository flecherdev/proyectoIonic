import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { ToastController } from 'ionic-angular';
import { ListaCargaPage } from '../lista-carga/lista-carga';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Codigos } from '../../models/codigos-list/codigos-list.interface';

//mi alert
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  scanData : {};
  options :BarcodeScannerOptions;
  condicion:boolean;
  dato:string;
  codigosListRef$ : FirebaseListObservable<Codigos[]>;
  codigosCargaRef$ : FirebaseListObservable<Codigos[]>;

  valor : FirebaseObjectObservable<Codigos[]> ;
  codigoItem = {} as Codigos;


  codigoDeBusqueda : Codigos;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner
              ,private toast: Toast, private database: AngularFireDatabase, private alertCtrl:AlertController) {
                this.codigosListRef$ = this.database.list('codigos-lista');
                this.codigosCargaRef$ = this.database.list('codigos');
                this.valor = this.database.object('estado');
              }
  // Mofificacion de codigos y estados
  
  


  async scan(){
    this.options = {
        prompt : "Escanea el QR"
    }
    this.barcodeScanner.scan(this.options).then(barcodeData => {
   
        this.scanData = barcodeData;
        this.navParams.data = barcodeData;
        this.verificarCodigos(barcodeData.text.trim())
 
    }, (err) => {
        console.log("Sucedio un error : " + err);
    });         
  }   
  
  verificarCodigos(datosBar:string){
    //this.presentValor(datosBar);
    var cod2:Codigos;
    var cod1:Codigos;
    var ingreso:boolean=false;
    var codigoDeBusqueda = this.traerUnCodigo(datosBar.trim());
    var codigoUsuario = this.traerUnCodigoUsuario(datosBar.trim());

    
      codigoDeBusqueda.forEach(codigo1 =>{
        codigoUsuario.forEach(codigo2 => {
          console.log(codigo2.lendatosBarg);
          if(typeof codigo2[0] !== 'undefined'){
            if (codigo1.values().next().value.clave == codigo2.values().next().value.clave) {
              cod1=codigo1.values().next().value.clave
              cod2= codigo2.values().next().value.clave;
              //ingreso = true;
            }
          }else{
            cod1 = codigo1.values().next().value;
            this.agregarCodigo(cod1);
            
          }
        });
      });
    
     
  }
 /* mostrar(){
    this.codigos.forEach(codigo =>{
      console.log(codigo.clave +" "+codigo.valor);
    });
  }*/

  listaCarga(){ //utilizar despues
    //this.navCtrl.setRoot(ListaCargaPage,this.navParams);
    this.navCtrl.push(ListaCargaPage);
  }
  
  traerUnCodigo(codigo):any{
  
    let codigoBusqueda : FirebaseListObservable<Codigos[]>;
  
    try {
      codigoBusqueda = this.database.list('/codigos', {
        query: {
          orderByChild: 'clave',
          equalTo: codigo
        }
      });
    } catch (error) {
      console.log(error);
      return false;
    }
    

    return codigoBusqueda;
  }

  traerUnCodigoUsuario(codigo):any{
    let codigoBusqueda : FirebaseListObservable<Codigos[]>;
 
    try {
      codigoBusqueda = this.database.list('/codigos-lista',{
        query: {
          orderByChild: 'clave',
          equalTo: codigo
        }
      });
      this.presentValor("El codigo ya se encuentra cargado");
    } catch (error) {
      console.log("Error: "+error);

    }
    
      return codigoBusqueda;
    }

    verificarUsuario(codigo):boolean{
      let codigoBusqueda : FirebaseListObservable<Codigos[]>;
   
      try {
        codigoBusqueda = this.database.list('/codigos-lista',{
          query: {
            orderByChild: 'clave',
            equalTo: codigo
          }
        });
        //this.presentValor("El codigo ya se encuentra cargado");
      } catch (error) {
        console.log("Error: "+error);
  
      }
      
        return codigoBusqueda._isScalar;
      }

  // mis alert

  presentAlert() {
    const alert = this.alertCtrl.create({
      title: 'Problema',
      subTitle: 'El codigo ya fue utilizado',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  presentOK() {
    const alert = this.alertCtrl.create({
      title: 'Exito',
      subTitle: 'Se realizo la carga',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  presentValor(text:string) {
    const alert = this.alertCtrl.create({
      title: 'Exito',
      subTitle: text,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  igual
  agregarCodigo(codigos: Codigos):boolean{
    //console.log(shoppingItem);
    try {
      this.codigosListRef$.push({
        clave: codigos.clave,
        valor: Number(codigos.valor)
      });
      this.presentValor("Se agrego el codigo");
      //Reser de shoppingItem
    this.codigoItem = {} as Codigos;
      return true;
    } catch (error) {
      return false;
    }
    //Volver a la pagina de ShoppingList
    //this.navCtrl.pop();
  }


  modificar(){
    
  }

  /*function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }*/

}

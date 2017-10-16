import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { ToastController } from 'ionic-angular';
import { ListaCargaPage } from '../lista-carga/lista-carga';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
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

  codigoItem = {} as Codigos;
  codigoDeBusqueda : Codigos;

  listaCodigo:Array<any>;
  listaCodigoCargado:Array<any>;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner
              ,private toast: Toast, private database: AngularFireDatabase, private alertCtrl:AlertController) {
                this.codigosListRef$ = this.database.list('codigos-lista');
                this.codigosCargaRef$ = this.database.list('codigos');
                this.codigosListRef$.subscribe(datos => {this.listaCodigo = datos});
                this.codigosCargaRef$.subscribe(datos => {this.listaCodigoCargado = datos});
              }
 
  async scan(){
    this.options = {
        prompt : "Escanea el QR"
    }
    this.barcodeScanner.scan(this.options).then(barcodeData => {
   
        this.scanData = barcodeData;
        this.navParams.data = barcodeData;
        this.verificarCodigos(barcodeData.text.trim());
 
    }, (err) => {
        console.log("Sucedio un error : " + err);
    });         
  }   
  
  verificarCodigos(datosBar:string){
    let ban = false;
    let exist = false;
    let codigoAgregar: Codigos;

    if(this.elCodigoExiste(datosBar)){ //existe o no en codigos para cargar
      exist = true;
      this.listaCodigo.forEach(codigo => {
        if(codigo.clave == datosBar){
          ban = true;
          return;
        }
      });
    }else{

    }
    
    if(exist){
      if(!ban){
        console.log("------------ Se agrega el codigo -----------");
        this.agregarCodigo(this.traerUnCodigo(datosBar));
       this.presentValor("se agrega codigo ");
      }else{
        console.log("------------ No se agrega el codigo --------------");
        this.presentValor("La carga se realizo con anterioridad ");
      }
    }
     
  }

  listaCarga(){ //utilizar despues
    //this.navCtrl.setRoot(ListaCargaPage,this.navParams);
    this.navCtrl.push(ListaCargaPage);
  }
  
  traerUnCodigo(codigo):Codigos{ // funciona con test
  
    let codigoBusqueda : Codigos;
    
    this.listaCodigoCargado.forEach( micodigo => {
      if(micodigo.clave == codigo){
        codigoBusqueda = micodigo;
       // this.presentValor("el codigo se traer: "+micodigo.clave);
        return;
      }
    });
    //this.presentValor("El codigo:"+ codigo.clave);
    return codigoBusqueda;
  }

  elCodigoExiste(micodigo):boolean{ // funciona con test
    let ban = false;

    this.listaCodigoCargado.forEach(codigo => {
      if(codigo.clave == micodigo ){
        ban = true;
        //this.presentValor("El codigo existe:"+codigo.clave);
        return;
      }
    });

    if(ban){
      console.log("------------- El codigo existe en la lista ----------------");
      //this.presentValor("El codigo existe: ");
    }else{
      console.log("------------- El codigo no existe -------------------------");
      this.miToast("El codigo no existe ");
    }

    return ban;
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

  
  agregarCodigo(codigos: Codigos):boolean{
    //console.log(shoppingItem);
    try {
      this.codigosListRef$.push({
        clave: codigos.clave,
        valor: Number(codigos.valor)
      });
      //this.presentValor("Se agrego el codigo");
      //Reser de shoppingItem
    this.codigoItem = {} as Codigos;
      return true;
    } catch (error) {
      return false;
    }

  }


  modificar(){
    
  }

  miToast(mensaje){
    this.toast.show(mensaje, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import { PercucionPage } from '../percucion/percucion';
import { VientoPage } from '../viento/viento';

import { ToastController } from 'ionic-angular';

/**
 * Generated class for the CuerdaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuerda',
  templateUrl: 'cuerda.html',
})
export class CuerdaPage {

  listaTrack:Array<any>;

  grabar:boolean=false;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController ,public navParams: NavParams,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadComplex('uno', 'assets/piano/1.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('dos', 'assets/piano/2.wav', 1, 1, 0);
    this.nativeAudio.preloadComplex('tres', 'assets/piano/3.wav', 1, 1, 0);
    this.nativeAudio.preloadComplex('cuatro', 'assets/piano/4.wav', 1, 1, 0);
    this.nativeAudio.preloadComplex('cinco', 'assets/piano/5.wav', 1, 1, 0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuerdaPage');
  }

  uno(){
    this.nativeAudio.play('uno');
    if(this.grabar){
      this.listaTrack.push("uno");
  
    }

  }

  dos(){
    this.nativeAudio.play('dos');
    if(this.grabar){
      this.listaTrack.push("dos");
    }
  }

  tres(){
    this.nativeAudio.play('tres');
    if(this.grabar){
      this.listaTrack.push("tres");
    }
  }

  cuatro(){
    this.nativeAudio.play('cuatro');
    if(this.grabar){
      this.listaTrack.push("cuatro");
    }
  }

  cinco(){
    this.nativeAudio.play('cinco');
  }

  // ------------------------- Navegacion ---------------------// 
  irViento(){
    this.navCtrl.setRoot(VientoPage);
  }

  irPercucion(){
    this.navCtrl.setRoot(PercucionPage);
  }

  miGrabacion(){
    this.listaTrack = [];
    this.grabar = true;
    this.presentToast("Comienza la grabacion");
  }

  deterGrabacion(){
    console.log(this.listaTrack);
    this.grabar=false;
    this.presentToast("Se detuvo la grabacion");
  }

  reproducirGrabacion(){

    this.listaTrack.forEach(dato => {
      this.nativeAudio.play(dato);    
      console.log("ingreso al for "+dato); 
      this.sleep(2);
    });
    this.presentToast("Reproduccion exitosa");
  }
 
  sleep(seconds) 
  {
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
  }

  presentToast(mensaje) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  /*delay(ms:number){
    return new Promise(resolve => setTimeout(resolve,ms));
  }*/
}

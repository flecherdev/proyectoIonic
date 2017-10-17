import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import { CuerdaPage } from '../cuerda/cuerda';
import { PercucionPage } from '../percucion/percucion';

import { ToastController } from 'ionic-angular';
/**
 * Generated class for the VientoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viento',
  templateUrl: 'viento.html',
})
export class VientoPage {

  listaTrack:Array<any>;
  
  grabar:boolean=false;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController ,public navParams: NavParams,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('viento1', 'assets/viento/1.wav');
    this.nativeAudio.preloadSimple('viento2', 'assets/viento/2.wav');
    this.nativeAudio.preloadSimple('viento3', 'assets/viento/3.wav');
    this.nativeAudio.preloadSimple('viento4', 'assets/viento/4.wav');
    this.nativeAudio.preloadSimple('viento5', 'assets/viento/5.wav');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VientoPage');
  }

  uno(){
    this.nativeAudio.play('viento1');
    if(this.grabar){
      this.listaTrack.push("viento1");
    }
  }

  dos(){
    this.nativeAudio.play('viento2');
    if(this.grabar){
      this.listaTrack.push("viento2");
    }
  }

  tres(){
    this.nativeAudio.play('viento3');
    if(this.grabar){
      this.listaTrack.push("viento3");
    }
  }

  cuatro(){
    this.nativeAudio.play('viento4');
    if(this.grabar){
      this.listaTrack.push("viento4");
    }
  }

  cinco(){
    this.nativeAudio.play('viento5');
    if(this.grabar){
      this.listaTrack.push("viento5");
    }
  }


  irCuerda(){
    this.navCtrl.setRoot(CuerdaPage);
  }

  irPercucion(){
    this.navCtrl.setRoot(PercucionPage);
  }

  // ------------ Grabacion de sonido ----------------//

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
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import { CuerdaPage } from '../cuerda/cuerda';
import { VientoPage } from '../viento/viento';

import { ToastController } from 'ionic-angular';

/**
 * Generated class for the PercucionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-percucion',
  templateUrl: 'percucion.html',
})
export class PercucionPage {

  listaTrack:Array<any>;
  
  grabar:boolean=false;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController  ,public navParams: NavParams,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('percucion1', 'assets/percucion/1.wav');
    this.nativeAudio.preloadSimple('percucion2', 'assets/percucion/2.mp3');
    this.nativeAudio.preloadSimple('percucion3', 'assets/percucion/3.wav');
    this.nativeAudio.preloadSimple('percucion4', 'assets/percucion/4.wav');
    this.nativeAudio.preloadSimple('percucion5', 'assets/percucion/5.wav');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PercucionPage');
  }

  uno(){
    this.nativeAudio.play('percucion1');
    if(this.grabar){
      this.listaTrack.push("percucion1");
    }
  }

  dos(){
    this.nativeAudio.play('percucion2');
    if(this.grabar){
      this.listaTrack.push("percucion2");
    }
  }

  tres(){
    this.nativeAudio.play('percucion3');
    if(this.grabar){
      this.listaTrack.push("percucion3");
    }
  }

  cuatro(){
    this.nativeAudio.play('percucion4');
    if(this.grabar){
      this.listaTrack.push("percucion4");
    }
  }

  cinco(){
    this.nativeAudio.play('percucion5');
    if(this.grabar){
      this.listaTrack.push("percucion5");
    }
  }

  // ------------------------- Navegacion ---------------------// 
  irViento(){
    this.navCtrl.setRoot(VientoPage);
  }

  irCuerda(){
    this.navCtrl.setRoot(CuerdaPage);
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

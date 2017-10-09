import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeAudio: NativeAudio) {
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
  }

  dos(){
    this.nativeAudio.play('viento2');
  }

  tres(){
    this.nativeAudio.play('viento3');
  }

  cuatro(){
    this.nativeAudio.play('viento4');
  }

  cinco(){
    this.nativeAudio.play('viento5');
  }

}

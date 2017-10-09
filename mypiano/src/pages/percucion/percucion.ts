import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeAudio: NativeAudio) {
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
  }

  dos(){
    this.nativeAudio.play('percucion2');
  }

  tres(){
    this.nativeAudio.play('percucion3');
  }

  cuatro(){
    this.nativeAudio.play('percucion4');
  }

  cinco(){
    this.nativeAudio.play('percucion5');
  }
}

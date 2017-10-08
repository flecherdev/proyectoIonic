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
    this.nativeAudio.preloadSimple('uno', 'assets/percucion/1.wav');
    this.nativeAudio.preloadSimple('dos', 'assets/percucion/2.mp3');
    this.nativeAudio.preloadSimple('tres', 'assets/percucion/3.wav');
    this.nativeAudio.preloadSimple('cuatro', 'assets/percucion/4.wav');
    this.nativeAudio.preloadSimple('cinco', 'assets/percucion/5.wav');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PercucionPage');
  }

  uno(){
    this.nativeAudio.play("uno");
  }

  dos(){
    this.nativeAudio.play("dos");
  }

  tres(){
    this.nativeAudio.play("tres");
  }

  cuatro(){
    this.nativeAudio.play("cuatro");
  }

  cinco(){
    this.nativeAudio.play("cinco");
  }
}

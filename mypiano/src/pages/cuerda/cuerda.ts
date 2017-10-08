import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('uno', 'assets/piano/1.mp3');
    this.nativeAudio.preloadSimple('dos', 'assets/piano/2.wav');
    this.nativeAudio.preloadSimple('tres', 'assets/piano/3.wav');
    this.nativeAudio.preloadSimple('cuatro', 'assets/piano/4.wav');
    this.nativeAudio.preloadSimple('cinco', 'assets/piano/5.wav');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuerdaPage');
  }

  uno(){
    this.nativeAudio.play('uno');
  }

  dos(){
    this.nativeAudio.play('dos');
  }

  tres(){
    this.nativeAudio.play('tres');
  }

  cuatro(){
    this.nativeAudio.play('cuatro');
  }

  cinco(){
    this.nativeAudio.play('cinco');
  }

}

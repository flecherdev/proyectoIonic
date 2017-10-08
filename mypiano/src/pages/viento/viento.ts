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
    this.nativeAudio.preloadSimple('uno', 'assets/viento/1.wav');
    this.nativeAudio.preloadSimple('dos', 'assets/viento/2.wav');
    this.nativeAudio.preloadSimple('tres', 'assets/viento/3.wav');
    this.nativeAudio.preloadSimple('cuatro', 'assets/viento/4.wav');
    this.nativeAudio.preloadSimple('cinco', 'assets/viento/5.wav');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VientoPage');
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

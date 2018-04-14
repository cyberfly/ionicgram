import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  image_uri: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private file: File, private transfer: FileTransfer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}

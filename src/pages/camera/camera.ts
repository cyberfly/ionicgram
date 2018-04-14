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

  //open camera and take picture

  takePicture() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.image_uri = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

}

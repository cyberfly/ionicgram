import { MediaServiceProvider } from './../../providers/media-service/media-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public mediaServiceProvider: MediaServiceProvider) {

  }

}

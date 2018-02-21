import { MediaServiceProvider } from './../../providers/media-service/media-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  medias: any;

  constructor(public navCtrl: NavController, public mediaServiceProvider: MediaServiceProvider) {
    
    //call the function to get media list from API
    this.getMediaList();
  }

  getMediaList()
  {
    console.log('try to get media list from API');
  }

}

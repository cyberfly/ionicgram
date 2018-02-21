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
    console.log('try to get media list from API, this.medias -->', this.medias);

    this.mediaServiceProvider.getMediaList().subscribe(data => {

      console.log('Fetched media list data -->' , data);

      //assign fetched data to 

      this.medias = data;

      console.log('this.medias -->', this.medias);

    });

  }

  //pull to refresh

  doRefresh(refresher) {
    console.log('Begin fetching latest media', refresher);

    //call the mediaServiceProvider function to get latest media list from API
    
    this.mediaServiceProvider.getMediaList().subscribe(data => {

      //assign fetched data to 

      this.medias = data;

      //hide loader pull to refresh  

      refresher.complete();

    });

  }

  //go to show media detail page

  showMediaDetail(event, media)
  {
    console.log('navigate to show-detail page with media parameter -->', media);
  }

}

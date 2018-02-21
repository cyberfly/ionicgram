import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MediaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MediaServiceProvider Provider');
  }

  //get list of uploaded media from API

  getMediaList()
  {
    let api_url = 'http://restapi.jomphp.com/wp-json/wp/v2/media';
    return this.http.get(api_url);
  }

  //get single media detail from API

  getMediaDetail()
  {

  }

  //upload media into server using API

  storeMedia()
  {

  }

}

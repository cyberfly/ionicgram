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

  getMedia()
  {

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

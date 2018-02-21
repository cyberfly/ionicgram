import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MediaDetailPage } from './media-detail';

@NgModule({
  declarations: [
    MediaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MediaDetailPage),
  ],
})
export class MediaDetailPageModule {}

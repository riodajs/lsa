import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { YoutubeService } from '../../providers/youtube-service';

import { VideosPage } from '../videos/videos';
@Component({
  selector: 'page-diccionario',
  templateUrl: 'diccionario.html'
})
export class DiccionarioPage {
  public playlist: any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public vS: YoutubeService) {
    this.playlist = [];
  }

  goToVideos(playlist){
    this.navCtrl.push(VideosPage, { playlist : playlist });
  }

  ionViewDidLoad(){
      this.vS.getPlaylistList().subscribe( playlisName => {
          playlisName.items.map(data =>{
            this.playlist.push(data);
          });
      });
      
  }
}

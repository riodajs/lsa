import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YoutubeService } from '../../providers/youtube-service';

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  public playlist: any;
  public videos: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public vS: YoutubeService,
    private youtube: YoutubeVideoPlayer
  ) {
    this.playlist = this.navParams.get('playlist');
    console.log(this.playlist);
    this.videos = [];
  }

  ionViewDidLoad() {
    this.vS.getVideosList(this.playlist.id).subscribe(data =>{
      data.items.map(data => {
        this.videos.push(data);
      });
      console.log(this.videos);
    });
    console.log('ionViewDidLoad Videos');
  }
  vPlay(videoId){
    console.log(videoId);
    this.youtube.openVideo(videoId);
  }

}

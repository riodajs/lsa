import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class YoutubeService {
  results: any = [];
  url = 'https://www.googleapis.com/youtube/v3/';
  query = 'playlists?part=snippet&channelId=UCc8-_WE4hDAZoIHZSvpwr1Q&maxResults=30';
  apiKey = '&key=Your API Key';
  plquery = "playlistItems?part=snippet&maxResults=10&playlistId=";
  constructor(public http: Http) {
    console.log('Hello YoutubeService Provider');
  }
  getPlaylistList(){
     return this.http.get(this.url + this.query + this.apiKey )
            .map(res => res.json());
  } 

  getVideosList(playlists){
    return this.http.get(this.url + this.plquery + playlists + this.apiKey)
            .map(res => res.json());
  }

}

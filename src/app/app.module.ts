import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { AboutPage } from '../pages/about/about';
import { DiccionarioPage } from '../pages/diccionario/diccionario';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { VideosPage } from '../pages/videos/videos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YoutubeService } from '../providers/youtube-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DiccionarioPage,
    HomePage,
    TabsPage,
    VideosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DiccionarioPage,
    HomePage,
    TabsPage,
    VideosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeService,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

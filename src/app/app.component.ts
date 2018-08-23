import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      console.log("local", localStorage.getItem('firstTimeLoad'));

      if(localStorage.getItem('firstTimeLoad') == undefined) {
        localStorage.setItem('firstTimeLoad', 'TRUE')
       this.rootPage = HomePage; 
    }
    else{
        this.rootPage = TabsPage;
    }
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


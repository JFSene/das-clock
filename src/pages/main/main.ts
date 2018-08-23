import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  checkinOne:string;
  checkoutOne:string;
  checkinTwo:string;
  checkoutTwo:string;

  currentDate:any;
  formattedDate:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setInterval(() => {
      this.getFormattedDate();
    }, 1000);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  getFormattedDate(){
    var dateObj = new Date()
    var hours = dateObj.getHours().toString()
    var minutes = dateObj.getMinutes().toString()
    minutes = (minutes.length === 2) ? minutes : `0${minutes}`;
    var seconds = dateObj.getSeconds().toString()
    seconds = (seconds.length ===2) ? seconds : `0${seconds}`

    this.formattedDate = `${hours}:${minutes}:${seconds}`;
  }

  showEntryTime() {
    console.log(this.formattedDate);
    if (this.checkinOne === undefined)
      this.checkinOne = this.formattedDate;
    else if (this.checkinOne && this.checkoutOne === undefined)
    this.checkoutOne = this.formattedDate;
    else if (this.checkinOne && this.checkoutOne && this.checkinTwo === undefined)
    this.checkinTwo = this.formattedDate;
    else if (this.checkinOne && this.checkoutOne && this.checkinTwo && this.checkoutTwo === undefined)
    this.checkoutTwo = this.formattedDate;
  }
}

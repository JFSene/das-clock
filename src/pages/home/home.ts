import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1}),
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1}),
      ])))
    ])
  ]
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
skipMsg: string = "Skip";
state: string = 'x';
                  //mo dCtrl: ModalController
  constructor(public navCtrl: NavController) {
  }

  skip() {
    //push to new page
    this.navCtrl.setRoot(TabsPage);


      //Present new Page
    //let presentModal = this.modCrtl.create(MainPage);
    //presentModal.present();
  }

  slideChanged() {
    if (this.slides.isEnd())
    this.skipMsg = "OK. Entendi!";
    else
    this.skipMsg = "Skip";
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
    this.state = 'rightSwipe';
    else 
    this.state = 'leftSwipe'
  }

  animationDone() {
    this.state = 'x';
  }
}

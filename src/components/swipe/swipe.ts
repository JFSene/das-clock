import { Component } from '@angular/core';

/**
 * Generated class for the SwipeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'swipe',
  templateUrl: 'swipe.html'
})
export class SwipeComponent {

  text: string;

  constructor() {
    console.log('Hello SwipeComponent Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'page-gestos',
  templateUrl: 'gestos.html'
})
export class gestos {
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  constructor() {

  }
  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }
}

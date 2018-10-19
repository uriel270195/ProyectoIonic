import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
  tutorial(){
    window.location.href='https://ionicframework.com/docs/intro/installation/';
  }
}

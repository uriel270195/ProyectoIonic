import { Component } from '@angular/core';

@Component({
  selector: 'page-iconos',
  templateUrl: 'iconos.html'
})
export class Iconos {
  // use the home icon
  myIcon: string = "home";
  constructor() {

  }
  icons(){
    window.location.href='https://ionicframework.com/docs/ionicons/';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'fecha-hora',
  templateUrl: 'fecha-hora.html'
})
export class fechaHora {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor() {

  }
}

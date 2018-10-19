import { Component } from '@angular/core';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ListPage } from '../list/list';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
import { HojasDeAccionPage } from '../hojas-de-accion/hojas-de-accion';
import { MenuController, NavController } from 'ionic-angular';

@Component({
  selector: 'menu-toggle',
  templateUrl: 'menu-toggle.html'
})
export class IndexToggle {
  pages: Array<{title: string, component: any}>;
  constructor(
    public menu: MenuController,
    public navctrl: NavController
  ) {
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Iniciar Sesion', component: InicioSesionPage }, 
      { title: 'Hojas de acción', component: HojasDeAccionPage }     
    ];
  }
  openPage(page) {
    // navigate to the new page if it is not the current page
    this.navctrl.setRoot(page.component);
  }
}

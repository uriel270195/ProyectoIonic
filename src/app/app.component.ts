import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { HojasDeAccionPage } from '../pages/hojas-de-accion/hojas-de-accion';
import { listaAlertas } from '../pages/list-alertas/lista-alertas';
import { insignias } from '../pages/insignias/insignias';
import { botones } from '../pages/botones/botones';
import { tarjetas } from '../pages/tarjetas/tarjetas';
import { checkbox } from '../pages/checkbox/checkbox';
import { fechaHora } from '../pages/fecha-hora/fecha-hora';
import { fab } from '../pages/fab/fab';
import { gestos } from '../pages/gestos/gestos';
import { Cuadricula } from '../pages/cuadricula/cuadricula';
import { Iconos } from '../pages/iconos/iconos';
import { Geotab } from '../pages/geotab/geotab';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = Geotab;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Iniciar Sesion', component: InicioSesionPage }, 
      { title: 'Hojas de acción', component: HojasDeAccionPage },
      { title: 'Tipos de alertas', component: listaAlertas },
      { title: 'Insignias', component: insignias },
      { title: 'Botones', component: botones },
      { title: 'Tarjetas', component: tarjetas},
      { title: 'Cajas de Selección', component: checkbox},
      { title: 'Fecha y Hora', component: fechaHora},
      { title: 'FAB', component: fab},
      { title: 'Gestos', component: gestos},
      { title: 'Cuadricula', component: Cuadricula},
      { title: 'Iconos', component: Iconos},
      { title: 'Geotab', component: Geotab}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

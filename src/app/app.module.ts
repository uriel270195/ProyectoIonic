import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { HojasDeAccionPage } from '../pages/hojas-de-accion/hojas-de-accion';
import { loginService } from '../services/login.service';
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
//import { IndexToggle } from '../pages/menu-toggle/menu-toggle';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    InicioSesionPage,
    HojasDeAccionPage,
    listaAlertas,
    insignias,
    botones,
    tarjetas,
    checkbox,
    fechaHora,
    fab,
    gestos,
    Cuadricula,
    Iconos,
    Geotab
    //IndexToggle
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    InicioSesionPage,
    HojasDeAccionPage,
    listaAlertas,
    insignias,
    botones,
    tarjetas,
    checkbox,
    fechaHora,
    fab,
    gestos,
    Cuadricula,
    Iconos,
    Geotab
    //IndexToggle
  ],
  providers: [
    StatusBar,
    SplashScreen,
    loginService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

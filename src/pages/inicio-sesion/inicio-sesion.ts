import { Component, OnInit, OnDestroy } from '@angular/core';
import { loginService } from '../../services/login.service';
import { NavController, MenuController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'inicio-sesion-ionic',
  templateUrl: 'inicio-sesion.html'
})
export class InicioSesionPage implements OnInit, OnDestroy{
  user: string;
  pass: string;
  constructor(public _log: loginService,public navctrl: NavController,public menu: MenuController){}
    ngOnDestroy(){}
    ngOnInit(){}
    Acceder(){
      this.menu.close();
      (this.user==null || this.user=='')?
        alert('Ingresa Usuario'):
      (this.pass==null || this.pass=='')?
        alert('Ingresa Contraseña'):
      this._log.login(this.user,this.pass) ? 
        this.navctrl.setRoot(HelloIonicPage) : 
        alert('Usuario o contraseña incorrecta');
    }
}

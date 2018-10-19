import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'lista-alertas',
  templateUrl: 'lista-alertas.html'
})
export class listaAlertas {
  testOpen: boolean;
  datoOutput: string;
  constructor(public alertCtrl: AlertController) {}
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Este es el titulo',
      subTitle: 'Este es el contenido',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertBasic() {
    alert('Esta es una alerta basica');
  }
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Logeo',
      message: "Introduce un nombre para este nuevo álbum que tanto te gusta agregar",
      inputs: [
        {
          name: 'Titulo',
          placeholder: 'Titulo'
        },
        {
          name: 'Mensaje',
          placeholder: 'Mensaje'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log(`Mensaje: ${data.Mensaje}`);
          this.datoOutput=data.Titulo;
          }
        }
      ]
    });
    prompt.present();
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Este es un alert de prueba',
      message: '¿Te gustan los videojuegos?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            console.log('si clicked');
            this.datoOutput='seleccionaste si';
          }
        },
        {
          text: 'NO',
          handler: () => {
            console.log('no clicked');
            this.datoOutput='seleccionaste no';
          }
        }
      ]
    });
    confirm.present();
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Seleccione un color');
    alert.addInput({
      type: 'radio',
      label: 'Azul',
      value: 'azul',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Verde',
      value: 'verde'
    });
    alert.addInput({
      type: 'radio',
      label: 'Rojo',
      value: 'rojo'
    });
    alert.addInput({
      type: 'radio',
      label: 'Amarillo',
      value: 'amarillo'
    });
    alert.addInput({
      type: 'radio',
      label: 'Morado',
      value: 'morado'
    });
    alert.addInput({
      type: 'radio',
      label: 'Blanco',
      value: 'blanco'
    });
    alert.addInput({
      type: 'radio',
      label: 'Negro',
      value: 'negro'
    });
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testOpen = false;
        this.datoOutput=data;
      }
    });

    alert.present().then(() => {
      this.testOpen = true;
    });
  }
  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('¿Que paises haz visitado?');

    alert.addInput({
      type: 'checkbox',
      label: 'Mexico',
      value: 'mx',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'España',
      value: 'es'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Estados Unidos',
      value: 'us'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testOpen = false;
        this.datoOutput=data;
      }
    });
    alert.present();
  }
}

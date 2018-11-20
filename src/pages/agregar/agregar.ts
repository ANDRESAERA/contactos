import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TitleCasePipe } from '@angular/common';


/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  contactos = [];
  nombre= '';
  tel = '';
  correo = '';
  fb = '';
  tw = '';
  in= '';
  inicio= HomePage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos = this.navParams.get ('contactos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }
  clickagregar(){
    if(this.nombre.length>0 && this.tel.length>0){
      this.contactos.push(
        {
        nombre: this.nombre,
        telefono: this.tel,
        mail: this.correo,
        facebook: this.fb,
        twitter: this.tw,
        instagram: this.in
      
    });
    this.navCtrl.pop();

    }
    else{


    const alert = this.alertCtrl.create({
      title: 'Oops!',
      subTitle: 'El contacto debe de tener telefono y nombre',
      buttons: ['OK']
    });
    alert.present();
  }
}
      
    

  

}

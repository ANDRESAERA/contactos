import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {
  imagen= '';
  mail= '';
  fb = '';
  tw = '';
  in = '';
  tel = '';
  nombre = '';
  



  constructor(public navCtrl: NavController, public navParams: NavParams) {  
    this.imagen = this.navParams.get ('imagen');
    this.mail = this.navParams.get ('mail');
    this.nombre = this.navParams.get ('nombre');
    this.fb = this.navParams.get ('facebook');
    this.tw = this.navParams.get ('twitter');
    this.in = this.navParams.get ('instagram');
    this.tel = this.navParams.get ('telefono');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');
  }

}

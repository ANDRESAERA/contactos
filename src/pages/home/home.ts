import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DatosPage } from '../datos/datos';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  datos= DatosPage;
  agregar= AgregarPage;

  contacto =  [
  {imagen:"../assets/imgs/256_1.png",nombre: 'Andres Ramirez' ,telefono:'(33) 39480366',mail:'aramireza078@gmail.com',facebook:'Andres.ram',twitter:'@Andres.ram',instagram:'Andres.ram'},
  {imagen:"../assets/imgs/256_1.png",nombre: 'Neplorio Ruiz' ,telefono:'(33) 6465166323',mail:'Neplorio078@gmail.com',facebook:'nep.lorio',twitter:'@nep.lorio',instagram:'nep.lorio'},
  {imagen:"../assets/imgs/256_1.png",nombre: 'Andres Cardenas' ,telefono:'(33) 11962808',mail:'acardenas078@gmail.com',facebook:'Andres.cr',twitter:'@Andres.cr',instagram:'Andres.cr'}]

  constructor(public navCtrl: NavController ) {

  }
  clickcontacto(p){
    this.navCtrl.push(this.datos, p);
    
  }
  clicknuevo(){
    this.navCtrl.push(this.agregar,{contactos: this.contacto});
    
  }

}

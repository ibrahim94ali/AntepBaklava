import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Tarihtekinigoster} from '../tarihtekinigoster/tarihtekinigoster';


@Component({
  selector: 'tarihsec',
  templateUrl: 'tarihsec.html'
})
export class TarihSec {

      tarih: Date;

  constructor(public navCtrl: NavController) {

  }

  onClick(){
    this.navCtrl.push(Tarihtekinigoster,this.tarih);
  }
}

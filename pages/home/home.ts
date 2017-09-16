import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tursec } from '../tursec/tursec';
import { Alindilar } from '../alindilar/alindilar';
import { Tarihtekinigoster} from '../tarihtekinigoster/tarihtekinigoster';
import { EkleyiSec } from '../ekleyi-sec/ekleyi-sec';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = EkleyiSec;
  tab2Root = Tarihtekinigoster;
  tab3Root = Tursec;
  tab4Root = Alindilar;

     gun = new Date().getDate();
     ay = '0' + (new Date().getMonth() + 1);
     yil = new Date().getFullYear();
    tarih = this.yil +'-'+ this.ay +'-'+ this.gun;

  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){

  }
}
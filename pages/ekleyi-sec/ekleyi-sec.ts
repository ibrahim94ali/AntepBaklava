import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dukanamalekle } from '../dukanamalekle/dukanamalekle';
import { MusteriEkle } from '../musteriekle/musteriekle';

@Component({
  selector: 'page-ekleyi-sec',
  templateUrl: 'ekleyi-sec.html',
})
export class EkleyiSec {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  onClick1(dukanyeri){
    if(dukanyeri === 'gv'){
    this.navCtrl.push(Dukanamalekle, "Gv");
    }
    else{
     this.navCtrl.push(Dukanamalekle, "Ohrid");
    }
  }
  onClick2(){
    this.navCtrl.push(MusteriEkle);
  }

}

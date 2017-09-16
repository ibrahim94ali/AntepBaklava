import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { TarihSec } from '../tarihsec/tarihsec';
import {Tarihtekinigoster} from '../tarihtekinigoster/tarihtekinigoster';
import { TarihtekiTumDukkan } from '../tarihtekitumdukkan/tarihtekitumdukkan';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'tursec',
  templateUrl: 'tursec.html'
})
export class Tursec {

  tarih : Date;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

     //console.log();
  }
  
  belirliTarih(){
    this.navCtrl.push(TarihSec);    
  }
  tumIsmarlamalar(){
     this.navCtrl.push(Tarihtekinigoster, '0000-00-00');
  }
  tumDukkan(dukkanadi){
    if(dukkanadi === 'Gv'){
     this.navCtrl.push(TarihtekiTumDukkan, "Gv");
    }
    else
      {
    this.navCtrl.push(TarihtekiTumDukkan, "Ohrid");
      }
  }
    
   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  presentPopoverDate(myEvent){
    let popover = this.popoverCtrl.create(TarihSec);
    popover.present({
      ev: myEvent
    });
  }
}
  
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { TurdenListe } from '../turdenliste/turdenliste';

@Component({
  selector: "popover",
  template: `
    <ion-list>
      <ion-list-header>Baklava Modelleri</ion-list-header>
      <button ion-item (click)="itemSelected('Aymali')">Aymali</button>
      <button ion-item (click)="itemSelected('Burma')">Burma</button>
       <button ion-item (click)="itemSelected('Buyuk Aymali')">Büyük Aymali </button>
      <button ion-item (click)="itemSelected('Cokoladna Dolma')">Çokoladna Dolma </button>
      <button ion-item (click)="itemSelected('Dolma')">Dolma </button>
      <button ion-item (click)="itemSelected('Dolma Kadayif')">Dolma Kadayif </button>
      <button ion-item (click)="itemSelected('Havuc')">Havuç</button>
      <button ion-item (click)="itemSelected('Kadayif')">Kadayif</button>
      <button ion-item (click)="itemSelected('Milka')">Milka</button>
      <button ion-item (click)="itemSelected('Pasa')">Paşa</button>
      <button ion-item (click)="itemSelected('Sarma')">Sarma</button>
      <button ion-item (click)="itemSelected('Sutlu Nuriye')">Sütlü Nuriye</button>  
      <button ion-item (click)="itemSelected('Sekerpare')">Şekerpare</button>  
      <button ion-item (click)="itemSelected('Trilece')">Trileçe</button>
      <button ion-item (click)="itemSelected('Visna')">Vişna</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {}

  
  itemSelected(item){
      if(item === 'Dolma')
      this.navCtrl.push(TurdenListe, {
        value: 'Dolma'
      });
      else if( item === 'Sarma')
       this.navCtrl.push(TurdenListe, {
        value: 'Sarma'
      });
      else if( item === 'Burma')
       this.navCtrl.push(TurdenListe, {
        value: 'Burma'
      });
      else if( item === 'Aymali')
       this.navCtrl.push(TurdenListe, {
        value: 'Aymali'
      });
      else if( item === 'Visna')
       this.navCtrl.push(TurdenListe, {
        value: 'Visna'
      });
      else if( item === 'Pasa')
       this.navCtrl.push(TurdenListe, {
        value: 'Pasa'
      });
      else if( item === 'Cokoladna Dolma')
       this.navCtrl.push(TurdenListe, {
        value: 'Cokoladna Dolma'
      });
      else if( item === 'Milka')
       this.navCtrl.push(TurdenListe, {
        value: 'Milka'
      });
      else if( item === 'Kadayif')
       this.navCtrl.push(TurdenListe, {
        value: 'Kadayif'
      });
      else if( item === 'Dolma Kadayif')
       this.navCtrl.push(TurdenListe, {
        value: 'Dolma Kadayif'
      });
      else if( item === 'Sekerpare')
       this.navCtrl.push(TurdenListe, {
        value: 'Sekerpare'
      });
      else if( item === 'Havuc')
       this.navCtrl.push(TurdenListe, {
        value: 'Havuc'
      });
      else if( item === 'Buyuk Aymali')
       this.navCtrl.push(TurdenListe, {
        value: 'Buyuk Aymali'
      });
      else if( item === 'Sutlu Nuriye')
       this.navCtrl.push(TurdenListe, {
        value: 'Sutlu Nuriye'
      });
       else
        this.navCtrl.push(TurdenListe, {
        value: 'Trilece'
      });
  }

}

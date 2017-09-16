import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage'; 

@Component({
  selector: 'page-tarihtekitumdukkan',
  templateUrl: 'tarihtekitumdukkan.html',
})
export class TarihtekiTumDukkan{

    DukkanGvList = [];
    DukkanOhList = [];
    dukkanGvSayi = 0;
    dukkanOhSayi = 0;
    aldatay: any;
    dukkangv = false;

  constructor(public navCtrl: NavController, private storage: Storage,  public navParams: NavParams, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController) {
   this.aldatay = navParams.data;
  }

  ionViewDidLoad(){
  }

taken(costumer){
      this.storage.forEach((value, key) => {
      if(value.tarih === costumer.tarih && costumer.isim === value.isim){
        value.alindi = true;
        this.storage.set(key, value);
    }});
    this.presentToast();
    this.navCtrl.popToRoot();
  }

  delete(costumer){
      this.storage.forEach((value, key) => {
      if(value.tarih === costumer.tarih && costumer.isim === value.isim){
        this.storage.remove(key);
      }
    });
    this.presentToast();
    this.navCtrl.popToRoot();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'İşlem tamamlandı.',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  presentActionSheet(costumer) {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'İşlem Seçin',
     enableBackdropDismiss: true,
     buttons: [
       {
         text: 'Yapıldı',
         role: 'destructive',
         icon: "checkbox-outline",
         handler: () => {
           this.taken(costumer);
         }
       },
        {
         text: 'Sil',
         role: 'destructive',
         icon: "trash",
         handler: () => {
           this.delete(costumer);
         }
       },
       {
         text: 'İptal',
         role: 'cancel',
         handler: () => {
         }
       }
     ]
   });

   actionSheet.present();
 }

 ionViewDidEnter(){   
     this.DukkanGvList = [];
     this.DukkanOhList = [];
     this.dukkanGvSayi = 0;
     this.dukkanOhSayi = 0;
     this.dukkangv = false;

     if(this.aldatay === "Gv"){
        this.dukkangv = true;
      this.storage.forEach( (value) => {
        if(value.alindi === false && value.isim === "DukkanGv"){
        this.DukkanGvList.push(value);
        this.dukkanGvSayi += value.Dolma + value.Sarma + value.Burma + value.Aymali + value.Visna + value.Pasa + value.CokoladnaDolma + value.Milka + value.Kadayif + value.DolmaKadayif + value.Sekerpare + value.Havuc + value.BuyukAymali + value.SutluNuriye + value.Trilece;
      }
      }).then(() => {
        this.DukkanGvList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
      });
     }
    if(this.aldatay === "Ohrid"){
      this.dukkangv = false;
       this.storage.forEach( (value) => {
        if(value.alindi === false && value.isim === "DukkanOh"){
          this.DukkanOhList.push(value);
        this.dukkanOhSayi += value.Dolma + value.Sarma + value.Burma + value.Aymali + value.Visna + value.Pasa + value.CokoladnaDolma + value.Milka + value.Kadayif + value.DolmaKadayif + value.Sekerpare + value.Havuc + value.BuyukAymali + value.SutluNuriye + value.Trilece;
        }
      }).then(() => {
        this.DukkanOhList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
      });
  }
  }
}
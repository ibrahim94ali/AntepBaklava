import { Component } from '@angular/core';
import { NavController, NavParams, ToastController,ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'tarihtekinigoster',
  templateUrl: 'tarihtekinigoster.html'
})
export class Tarihtekinigoster {

    IsmarlamaListesi = [];
    DukkanGvListesi = [];
    DukkanOhListesi = [];
    Baslik : String;
    aldatay : any;
    ismarlamaSayi = 0;
    dukkanGvSayi = 0;
    dukkanOhSayi = 0;
    dukanida = false;

    getTarih : Date;

     gun = new Date().getDate();
     ay = '0' + (new Date().getMonth() + 1);
     yil = new Date().getFullYear();
    buguntarih = this.yil +'-'+ this.ay +'-'+ this.gun;

  constructor(public navCtrl: NavController, private storage: Storage,  public toastCtrl: ToastController, public navParams: NavParams ,public actionSheetCtrl: ActionSheetController) {
    this.aldatay = navParams.data;
  }

  ionViewDidLoad(){}

  taken(costumer){
    if(costumer.isim != "DukkanGv" && costumer.isim != "DukkanOh"){
    this.storage.forEach((value, key) => {
      if((value.isim === costumer.isim) && (value.baklavaturu === costumer.baklavaturu)){
        value.alindi = true;
        this.storage.set(key, value);
      }
    });
    }
    else{ //dukkan
      this.storage.forEach((value, key) => {
      if((value.isim === costumer.isim && value.tarih === costumer.tarih)){
        value.alindi = true;
        this.storage.set(key, value);
      }
    });

    }
    this.presentToast();
    this.navCtrl.setRoot(this.navCtrl.getActive().component, this.buguntarih);
    this.navCtrl.setRoot(this.navCtrl.getActive().component, this.buguntarih);
}
  delete(costumer){
    if(costumer.isim != "DukkanGv" && costumer.isim != "DukkanOh"){
    this.storage.forEach((value, key) => {
      if((value.isim === costumer.isim) && (value.baklavaturu === costumer.baklavaturu)){
        this.storage.remove(key);
      }
    });
    }
    else{
      this.storage.forEach((value, key) => {
      if( value.isim ===costumer.isim && value.tarih === costumer.tarih){
        this.storage.remove(key);
      }
    });

    }
    this.presentToast();
    this.navCtrl.setRoot(this.navCtrl.getActive().component,this.buguntarih);
    this.navCtrl.setRoot(this.navCtrl.getActive().component,this.buguntarih);

  }

  kauciya(costumer){
    this.storage.forEach((value, key) => {
      if((value.isim === costumer.isim) && (value.baklavaturu === costumer.baklavaturu)){
        value.kauciya = true;
        this.storage.set(key, value);
      }
    }).then(() => {
       this.taken(costumer);
    });
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
         text: 'Alındı (kauciyayle)',
         role: 'destructive',
         icon: "checkbox-outline",
         handler: () => {
           this.taken(costumer);
         }
       },
         {
         text: 'Alındı (kauciyasız)',
         role: 'destructive',
         icon: "swap",
         handler: () => {
           this.kauciya(costumer);
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

 presentActionSheetdukkan(costumer) {
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


    this.IsmarlamaListesi = [];
    this.DukkanGvListesi = [];
    this.DukkanOhListesi = [];
    this.Baslik = "";
    this.ismarlamaSayi = 0;
    this.dukkanGvSayi = 0;
    this.dukkanOhSayi = 0;
    this.dukanida = false;

    if(this.aldatay != '0000-00-00'){ //belirli tarihi goster

      if(this.buguntarih === this.aldatay){
        this.Baslik = "Bugün";
      }
      else{
        this.Baslik = this.aldatay;
      }
      this.dukanida = true;
      this.getTarih = this.aldatay;
      this.storage.forEach( (value) => {
      if(value.alindi === false && value.tarih === this.getTarih){
        if(value.isim != "DukkanGv" && value.isim != "DukkanOh"){
          this.IsmarlamaListesi.push(value);
          this.ismarlamaSayi++;
          }
        else if(value.isim === "DukkanGv"){
          this.DukkanGvListesi.push(value);
          this.dukkanGvSayi += value.Dolma + value.Sarma + value.Burma + value.Aymali + value.Visna + value.Pasa + value.CokoladnaDolma + value.Milka + value.Kadayif + value.DolmaKadayif + value.Sekerpare + value.Havuc + value.BuyukAymali + value.SutluNuriye + value.Trilece;
          }
        else{
          this.DukkanOhListesi.push(value);
          this.dukkanOhSayi += value.Dolma + value.Sarma + value.Burma + value.Aymali + value.Visna + value.Pasa + value.CokoladnaDolma + value.Milka + value.Kadayif + value.DolmaKadayif + value.Sekerpare + value.Havuc + value.BuyukAymali + value.SutluNuriye + value.Trilece;
        }
      }
      
      }).then(() => {
      this.IsmarlamaListesi.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
      this.DukkanGvListesi.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
      this.DukkanOhListesi.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
});
    }
    else{ //tumunu goster
      this.Baslik = "Tümü";
      this.storage.forEach( (value) => {

        if(value.alindi === false && value.isim != "DukkanGv" && value.isim != "DukkanOh"){
        this.IsmarlamaListesi.push(value);
        this.ismarlamaSayi++;
        }
      }).then(() => {
         this.IsmarlamaListesi.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
      });
      
}
}
}
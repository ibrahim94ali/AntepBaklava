import { Component} from '@angular/core';
import { NavController, ActionSheetController, ToastController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'alindilar',
  templateUrl: 'alindilar.html',
})
export class Alindilar {

    IsmarlamaListesi = [];
    DukkanGvListesi = [];
    DukkanOhListesi = [];
    ismarlamaSayi = 0;
    dukkanGvSayi = 0;
    dukkanOhSayi = 0;
    butonkoy=false;

  constructor(public navCtrl: NavController, private storage: Storage, public alertCtrl: AlertController, public toastCtrl: ToastController, private localNotifications: LocalNotifications, public actionSheetCtrl: ActionSheetController) {
  }

    ionViewDidEnter(){
        this.IsmarlamaListesi = [];
    this.DukkanGvListesi = [];
    this.DukkanOhListesi = [];
    this.ismarlamaSayi = 0;
    this.dukkanGvSayi = 0;
    this.dukkanOhSayi = 0;
    this.butonkoy=false;
    this.storage.forEach( (value) => {
        if(value.alindi === true && value.isim != "DukkanGv" && value.isim != "DukkanOh"){
          this.butonkoy = true;
        this.IsmarlamaListesi.push(value);
        this.ismarlamaSayi++;
        }
        else if(value.alindi === true && value.isim === "DukkanGv"){
          this.butonkoy = true;
          this.DukkanGvListesi.push(value);
          this.dukkanGvSayi += value.Dolma + value.Sarma + value.Burma + value.Aymali + value.Visna + value.Pasa + value.CokoladnaDolma + value.Milka + value.Kadayif + value.DolmaKadayif + value.Sekerpare + value.Havuc + value.BuyukAymali + value.SutluNuriye + value.Trilece;
        }
        else if(value.alindi === true && value.isim === "DukkanOh"){
          this.butonkoy = true;
          this.DukkanOhListesi.push(value);
          this.dukkanOhSayi += value.Dolma + value.Sarma + value.Burma + value.Aymali + value.Visna + value.Pasa + value.CokoladnaDolma + value.Milka + value.Kadayif + value.DolmaKadayif + value.Sekerpare + value.Havuc + value.BuyukAymali + value.SutluNuriye + value.Trilece;

        }
        else{}
      }).then(() => {

      this.IsmarlamaListesi.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
      this.DukkanGvListesi.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
      this.DukkanOhListesi.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);

      });

      this.sendNotification();
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
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Kayıt silindi',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  presentActionSheet(costumer) {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Kayıt Sil',
     enableBackdropDismiss: true,
     buttons: [
       {
         text: 'Temizle',
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

  deleteAll(){
     this.storage.forEach((value, key) => {
      if( value.alindi ===true){
        this.storage.remove(key);
      }
    });
    this.presentToast();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    this.navCtrl.setRoot(this.navCtrl.getActive().component);

  }
  
   sendNotification(){
    let saat = new Date().setHours(8,0,0,0);
    let saat2 = new Date().setHours(9,0,0,0);
    this.localNotifications.schedule({
      id : 1,
      title: "Antep Baklava",
      text: "Bugün yapmanız gerekenler için tıklayın",
      every: "day",
      at : saat,
      led : "008000"
    });
    this.localNotifications.schedule({
      id : 2,
      title: "Antep Baklava",
      text: "Bugün yapmanız gerekenler için tıklayın",
      every: "day",
      at : saat2,
      led : "008000"
    });
  }

   showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Bütün alınmış veriler silinsin mi?',
      message: 'Sadece alınmışlar silinecek.',
      buttons: [
        {
          text: 'İptal',
          handler: () => {
          }
        },
        {
          text: 'Sİl',
          handler: () => {
            this.deleteAll();
          }
        }
      ]
    });
    confirm.present();
  }

}
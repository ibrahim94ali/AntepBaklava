import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'musteriekle',
  templateUrl: 'musteriekle.html'
})
export class MusteriEkle {

     costumer = {
      isim: "",
      baklavaturu:"",
      alindi: false,
      kauciya: false,
      tarih: ""
    }

  constructor(public navCtrl: NavController,public toastCtrl: ToastController, private storage: Storage, public alertCtrl: AlertController) {

  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'İşlem tamamlandı.',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  setData(){
    if(this.costumer.isim === "" || this.costumer.baklavaturu === "" || this.costumer.tarih === "")
    {
      this.showAlert();
      return;
    }
    this.storage.length().then(result =>{
      result++;
      this.storage.set(this.costumer.tarih + this.costumer.isim + String(result), this.costumer);
    });

    this.presentToast();
    this.navCtrl.popToRoot();
  }

   showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Eksik bilgi!',
      subTitle: 'Lütfen her bilgiyi eksiksiz giriniz.',
      buttons: ['OK']
    });
    alert.present();
  }
}

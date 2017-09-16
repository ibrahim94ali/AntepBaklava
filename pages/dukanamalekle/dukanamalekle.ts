import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-dukanamalekle',
  templateUrl: 'dukanamalekle.html',
})
export class Dukanamalekle {

  sayiDolma: number;
  sayiSarma: number;
  sayiBurma: number;
  sayiAymali: number;
  sayiVisna: number;
  sayiPasa: number;
  sayiCokoladnaDolma: number;
  sayiMilka: number;
  sayiKadayif: number;
  sayiDolmaKadayif: number;
  sayiSekerpare: number;
  sayiHavuc: number;
  sayiBuyukAymali: number;
  sayiSutluNuriye: number;
  sayiTrilece: number;
  aldatay: any;

  dukkan = {
    isim : "Dukkan",
    Dolma : 0,
    Sarma : 0,
    Burma : 0,
    Aymali : 0,
    Visna : 0,
    Pasa : 0,
    CokoladnaDolma : 0,
    Milka : 0,
    Kadayif : 0,
    DolmaKadayif : 0,
    Sekerpare : 0,
    Havuc : 0,
    BuyukAymali : 0,
    SutluNuriye : 0,
    Trilece : 0,
    tarih : "",
    alindi : false
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, private storage: Storage) {
    this.aldatay = navParams.data;  
  }

  ionViewDidEnter(){}
   
   presentToast() {
    let toast = this.toastCtrl.create({
      message: 'İşlem tamamlandı.',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  kaydetplekleri(){
     if(this.sayiDolma >= 0){
    this.dukkan.Dolma = this.sayiDolma;
    }
    if(this.sayiSarma >= 0){
    this.dukkan.Sarma = this.sayiSarma;
    }
    if(this.sayiBurma >= 0){
    this.dukkan.Burma = this.sayiBurma;
    }
    if(this.sayiAymali >= 0){
    this.dukkan.Aymali = this.sayiAymali;
    }
    if(this.sayiVisna >= 0){
    this.dukkan.Visna = this.sayiVisna;
    }
    if(this.sayiPasa >= 0){
    this.dukkan.Pasa = this.sayiPasa;
    }
    if(this.sayiCokoladnaDolma >= 0){
    this.dukkan.CokoladnaDolma = this.sayiCokoladnaDolma;
    }
    if(this.sayiMilka >= 0){
    this.dukkan.Milka = this.sayiMilka;
    }
    if(this.sayiKadayif >= 0){
    this.dukkan.Kadayif = this.sayiKadayif;
    }
    if(this.sayiDolmaKadayif >= 0){
    this.dukkan.DolmaKadayif = this.sayiDolmaKadayif;
    }
    if(this.sayiSekerpare >= 0){
    this.dukkan.Sekerpare = this.sayiSekerpare;
    }
    if(this.sayiHavuc >= 0){
    this.dukkan.Havuc = this.sayiHavuc;
    }
    if(this.sayiBuyukAymali >= 0){
    this.dukkan.BuyukAymali = this.sayiBuyukAymali;
    }
    if(this.sayiSutluNuriye >= 0){
    this.dukkan.SutluNuriye = this.sayiSutluNuriye;
    }
    if(this.sayiTrilece >= 0){
    this.dukkan.Trilece = this.sayiTrilece;
    }

  }

  setData(){

    this.kaydetplekleri();

    if(this.aldatay === "Gv"){
      this.dukkan.isim = "DukkanGv";
      this.storage.set("DukkanGv" + this.dukkan.tarih, this.dukkan);
    }
    else{
      this.dukkan.isim = "DukkanOh";
      this.storage.set("DukkanOh" + this.dukkan.tarih, this.dukkan);
    }



    this.presentToast();
    this.navCtrl.popToRoot();
  }
   showConfirm() {
    this.kaydetplekleri();
    if(this.dukkan.tarih === ""){
      this.showAlert();
      return;
    }
    let butunmesaj = "";
    let toplam = 0;
     if(this.sayiAymali > 0){
    butunmesaj += this.sayiAymali + ": Aymali <br/> ";
    }
    if(this.sayiBurma > 0){
    butunmesaj += this.sayiBurma + ": Burma <br/> ";
    }
  if(this.sayiBuyukAymali > 0){
    butunmesaj += this.sayiBuyukAymali + ": Büyük Aymali <br/> ";
    }
    if(this.sayiCokoladnaDolma > 0){
    butunmesaj += this.sayiCokoladnaDolma + ": Çokoladna Dolma <br/>";
    }
    if(this.sayiDolma > 0){
    butunmesaj += this.sayiDolma + ": Dolma <br/> ";
    }
      if(this.sayiDolmaKadayif > 0){
    butunmesaj += this.sayiDolmaKadayif + ": Dolma Kadayif <br/>";
    }
  if(this.sayiHavuc > 0){
   butunmesaj += this.sayiHavuc + ": Havuç <br/>";
    }
    if(this.sayiKadayif > 0){
   butunmesaj += this.sayiKadayif + ": Kadayif <br/>";
    }
   if(this.sayiMilka > 0){
    butunmesaj += this.sayiMilka + ": Milka <br/>";
    }
    if(this.sayiPasa > 0){
    butunmesaj += this.sayiPasa + ": Paşa <br/>";
    }
    if(this.sayiSarma > 0){
     butunmesaj += this.sayiSarma + ": Sarma <br/>";
    }
      if(this.sayiSutluNuriye > 0){
    butunmesaj += this.sayiSutluNuriye + ": Sütlü Nuriye <br/>";
    }
    if(this.sayiSekerpare > 0){
    butunmesaj += this.sayiSekerpare + ": Şekerpare <br/>";
    }
    if(this.sayiTrilece > 0){
    butunmesaj += this.sayiTrilece + ": Trileçe <br/>";
    }
     if(this.sayiVisna > 0){
    butunmesaj += this.sayiVisna + ": Vişna <br/>";
    }
    butunmesaj += "------------------------------------------<br/>";
    
    toplam =  this.dukkan.Aymali + this.dukkan.Burma + this.dukkan.BuyukAymali + this.dukkan.CokoladnaDolma + this.dukkan.Dolma + this.dukkan.DolmaKadayif + this.dukkan.Havuc + this.dukkan.Kadayif + this.dukkan.Milka + this.dukkan.Pasa + this.dukkan.Sarma + this.dukkan.Sekerpare + this.dukkan.SutluNuriye + this.dukkan.Trilece + this.dukkan.Visna
    butunmesaj +=  toplam + ": Toplam ";

    let confirm = this.alertCtrl.create({
      title: 'Seçtikleriniz:',
      message: butunmesaj,
      buttons: [
        {
          text: 'İptal',
          handler: () => {
          }
        },
        {
          text: 'Kaydet',
          handler: () => {
            this.setData();
          }
        }
      ]
    });
    confirm.present();
  }
   showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Eksik bilgi!',
      subTitle: 'Lütfen tarihi giriniz.',
      buttons: ['OK']
    });
    alert.present();
  }
}
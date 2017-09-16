import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage'; 

@Component({
  selector: 'turdenliste',
  templateUrl: 'turdenliste.html'
})
export class TurdenListe {
  tur: any;
  sayi = 0;

  ProductList = [];
  constructor(public navCtrl: NavController, private storage: Storage, public toastCtrl: ToastController , public navParams: NavParams, public actionSheetCtrl: ActionSheetController ) {
    this.tur = this.navParams.get('value');
  }

  taken(costumer){
    this.storage.forEach((value, key) => {
      if((value.isim === costumer.isim) && (value.baklavaturu === costumer.baklavaturu)){
        value.alindi = true;
        this.storage.set(key, value);
      }
    });
    this.presentToast();
    this.navCtrl.popToRoot();
}
  delete(costumer){
    this.storage.forEach((value, key) => {
      if((value.isim === costumer.isim) && (value.baklavaturu === costumer.baklavaturu)){
        this.storage.remove(key);
      }
    });
    this.presentToast();
    this.navCtrl.popToRoot();

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

 ionViewDidEnter(){
  this.sayi = 0;
  this.ProductList = [];
    if(this.tur === 'Dolma'){
    this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Dolma' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
    }
    else if(this.tur ==='Sarma'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Sarma' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Burma'){
        this.storage.forEach( (value) => {
        if(value.baklavaturu === 'Burma' && value.alindi === false){
          this.ProductList.push(value);
          this.sayi++;
        }
      }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
     }
      else if(this.tur ==='Aymali'){
        this.storage.forEach( (value) => {
        if(value.baklavaturu === 'Aymali' && value.alindi === false){
          this.ProductList.push(value);
          this.sayi++;
        }
    }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
    }
      else if(this.tur ==='Visna'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Visna' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Pasa'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Pasa' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Cokoladna Dolma'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Cokoladna Dolma' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Milka'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Milka' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Kadayif'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Kadayif' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Dolma Kadayif'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Dolma Kadayif' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Sekerpare'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Sekerpare' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Havuc'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Havuc' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Buyuk Aymali'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Buyuk Aymali' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
     this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      else if(this.tur ==='Sutlu Nuriye'){
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Sutlu Nuriye' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
    this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
  }
      
    else{
      this.storage.forEach( (value) => {
      if(value.baklavaturu === 'Trilece' && value.alindi === false){
        this.ProductList.push(value);
        this.sayi++;
      }
  }).then(() => {
    this.ProductList.sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0);
  });
    }
}
}
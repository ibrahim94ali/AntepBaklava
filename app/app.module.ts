import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MusteriEkle } from '../pages/musteriekle/musteriekle';
import { Tursec} from '../pages/tursec/tursec';
import { TurdenListe } from '../pages/turdenliste/turdenliste';
import { Alindilar } from '../pages/alindilar/alindilar';
import { Tarihtekinigoster } from '../pages/tarihtekinigoster/tarihtekinigoster';
import { TarihSec } from '../pages/tarihsec/tarihsec';
import { Dukanamalekle} from '../pages/dukanamalekle/dukanamalekle';
import { TarihtekiTumDukkan } from '../pages/tarihtekitumdukkan/tarihtekitumdukkan';
import { EkleyiSec } from '../pages/ekleyi-sec/ekleyi-sec';
import { PopoverPage } from '../pages/popover/popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tursec,
    TurdenListe,
    MusteriEkle,
    Alindilar,
    Tarihtekinigoster,
    TarihSec,
    Dukanamalekle,
    TarihtekiTumDukkan,
    EkleyiSec,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Tursec,
    TurdenListe,
    MusteriEkle,
    Alindilar,
    Tarihtekinigoster,
    TarihSec,
    Dukanamalekle,
    TarihtekiTumDukkan,
    EkleyiSec,
    PopoverPage
  ],
  providers: [
    StatusBar,  
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}

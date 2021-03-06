import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Network } from '@ionic-native/network';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilPage } from '../pages/profil/profil';
import { DoctorsmapPage } from '../pages/doctorsmap/doctorsmap';
import { SpecialtiesPage } from '../pages/specialties/specialties';
import { NewDoctorPage } from '../pages/new-doctor/new-doctor';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DoctorServiceProvider } from '../providers/doctor-service/doctor-service';




// Initialize Firebase
export const FirbaseConfig = {
  apiKey: "AIzaSyAj8exnvvhtahHonajqWc94bse2P69k-KE",
  authDomain: "doctordb-77398.firebaseapp.com",
  databaseURL: "https://doctordb-77398.firebaseio.com",
  projectId: "doctordb-77398",
  storageBucket: "doctordb-77398.appspot.com",
  messagingSenderId: "1067058480645"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SpecialtiesPage,
    ProfilPage,
    DoctorsmapPage,
    NewDoctorPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirbaseConfig),
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilPage,
    DoctorsmapPage,
    SpecialtiesPage,
    NewDoctorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DoctorServiceProvider,
    CallNumber,
    SMS,
    SocialSharing,
    Network,
    InAppBrowser
  ]
})
export class AppModule {}

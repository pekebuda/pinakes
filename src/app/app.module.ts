import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Pinakes } from './app.component';

import { HomePage } from '../pages/home/home.component';
import { LibraryPage } from '../pages/library/library.component';
import { AboutPage } from '../pages/about/about.component';
import { ContactPage } from '../pages/contact/contact.component';
import { TabsPage } from '../pages/tabs/tabs.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@NgModule({
  declarations: [
    Pinakes,
    HomePage,
    LibraryPage,
    ContactPage,
    AboutPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Pinakes)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Pinakes,
    HomePage,
    LibraryPage,
    ContactPage,
    AboutPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class PinakesModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';

import { App } from './app.component';

import { HomePage } from '../pages/home/home.component';
import { TabsPage } from '../pages/tabs/tabs.component';
import { LibraryPage } from '../pages/library/library.component';
import { BookComponent } from '../pages/library/book.component';
import { AboutPage } from '../pages/about/about.component';
import { ContactPage } from '../pages/contact/contact.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BookService } from '../services/book.service';



@NgModule({
  declarations: [
    App,
    TabsPage,
    HomePage,
    LibraryPage,
    BookComponent,
    ContactPage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    TabsPage,
    HomePage,
    LibraryPage,
    BookComponent,
    ContactPage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BookService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class Pinakes {}

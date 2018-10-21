import { NgModule, ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicErrorHandler, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';

import { HomePage } from './pages/home/home.component';
import { TabsPage } from './pages/tabs/tabs.component';
import { LibraryPage } from './pages/library/library.component';
import { BookComponent } from './pages/library/book.component';
import { AboutPage } from './pages/about/about.component';
import { ContactPage } from './pages/contact/contact.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BookService } from './services/book.service';




@NgModule({
  imports: [
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    App,
    TabsPage,
    HomePage,
    LibraryPage,
    BookComponent,
    ContactPage,
    AboutPage,
  ],
  bootstrap: [App],
  entryComponents: [],
  providers: [
    StatusBar,
    SplashScreen,
    BookService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ]
})
export class Pinakes {}

import { NgModule, ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { App } from './app.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  imports: [
    BrowserModule
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [
    App,
  ],
  bootstrap: [
    App
  ],
  entryComponents: [],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: ErrorHandler},
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ]
})
export class Pinakes {}

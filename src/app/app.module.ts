import { NgModule, ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';




@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRouterModule,
  ],
  declarations: [
    AppComponent,
  ],
  exports: [],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: ErrorHandler},
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  entryComponents: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

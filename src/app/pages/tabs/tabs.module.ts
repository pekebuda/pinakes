import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.component';
import { HomePage } from '../home/home.component';
import { LibraryPage } from '../library/library.component';
import { ContactPage } from '../contact/contact.component';
import { AboutPage } from '../about/about.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TabsRoutingModule,
  ],
  declarations: [
    TabsPage,
    HomePage,
    LibraryPage,
    ContactPage,
    AboutPage
  ],
  exports: []
})
export class TabsModule {}

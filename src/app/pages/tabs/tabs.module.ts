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
import { BookComponent } from '../library/book.component';
import { BookService } from '../../services/book.service';




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
    AboutPage,
    BookComponent
  ],
  providers: [
    BookService
  ],
  entryComponents: [
    BookComponent
  ],
  exports: [],
})
export class TabsModule {}

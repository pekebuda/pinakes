import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TabsRouterModule } from './tabs-router.module';
import { TabsComponent } from './tabs.component';
import { HomeComponent } from '../home/home.component';
import { LibraryComponent } from '../library/library.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { BookComponent } from '../library/book.component';
import { BookService } from '../../services/book.service';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TabsRouterModule,
  ],
  declarations: [
    TabsComponent,
    HomeComponent,
    LibraryComponent,
    ContactComponent,
    AboutComponent,
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

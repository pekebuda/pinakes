import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TabsRouterModule } from './tabs-router.module';
import { TabsComponent } from './tabs.component';
import { HomeComponent } from '../home/home.component';
import { LibraryComponent } from '../library/library.component';
import { BookComponent } from '../library/book.component';
import { SettingsComponent } from '../settings/settings.component';
import { BookService } from '../../services/book.service';
import { GroupByPropertyInitialPipe } from '../../pipes/group-by-property-initial.pipe';




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
    BookComponent,
    SettingsComponent,
    GroupByPropertyInitialPipe,
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

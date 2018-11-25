import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsComponent } from '../tabs/tabs.component';
import { HomeComponent } from '../home/home.component';
import { LibraryComponent } from '../library/library.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';



const ROUTES: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        outlet: 'home'
      },
      {
        path: 'library',
        component: LibraryComponent,
        outlet: 'library'
      },
      {
        path: 'about',
        component: AboutComponent,
        outlet: 'about'
      },
      {
        path: 'contact',
        component: ContactComponent,
        outlet: 'contact'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full',
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class TabsRouterModule {}

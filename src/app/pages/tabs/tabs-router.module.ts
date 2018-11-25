import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from '../tabs/tabs.component';
import { HomePage } from '../home/home.component';
import { LibraryPage } from '../library/library.component';
import { AboutPage } from '../about/about.component';
import { ContactPage } from '../contact/contact.component';



const ROUTES: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePage,
        outlet: 'home'
      },
      {
        path: 'library',
        component: LibraryPage,
        outlet: 'library'
      },
      {
        path: 'about',
        component: AboutPage,
        outlet: 'about'
      },
      {
        path: 'contact',
        component: ContactPage,
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

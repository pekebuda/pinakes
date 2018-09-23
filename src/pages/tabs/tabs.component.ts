import { Component } from '@angular/core';

import { AboutPage } from '../about/about.component';
import { ContactPage } from '../contact/contact.component';
import { HomePage } from '../home/home.component';




@Component({
  templateUrl: 'tabs.component.html'
})



export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

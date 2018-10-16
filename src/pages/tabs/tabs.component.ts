import { Component } from '@angular/core';

import { HomePage } from '../home/home.component';
import { LibraryPage } from '../library/library.component';
import { ContactPage } from '../contact/contact.component';
import { AboutPage } from '../about/about.component';




@Component({
  templateUrl: './tabs.component.html'
})
export class TabsPage {

  firstTabRoot = HomePage;
  secondTabRoot = LibraryPage;
  thirdTabRoot = ContactPage
  forthTabRoot = AboutPage;

  constructor () {}
}

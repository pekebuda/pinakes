import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from '../home/home.component';
import { LibraryPage } from '../library/library.component';
import { ContactPage } from '../contact/contact.component';
import { AboutPage } from '../about/about.component';




@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsPage {

  constructor () {}
}

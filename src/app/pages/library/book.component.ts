import { Component, OnInit, Input } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Book } from '../../../models/book';




@Component({
  selector: 'book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {

  @Input() book: Book = null;

  constructor(public viewCtrl: ViewController, private params: NavParams) {
    this.book = this.params.data.book;
  }

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

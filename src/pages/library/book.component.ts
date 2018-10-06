import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../models/book';




@Component({
  selector: 'book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
  @Input() book: Book = null;

  constructor() { }

  ngOnInit() { }
}

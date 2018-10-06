import { Component, OnInit } from '@angular/core';
import { List } from 'ionic-angular';

import { Book } from '../../models/book';
import { BOOKS } from '../../mock/books'




@Component({
  selector: 'library',
  templateUrl: './library.component.html',
})
export class LibraryPage implements OnInit {

  books: Book[] = BOOKS;
  selectedBook: Book = null;

  constructor() { }

  ngOnInit() { }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}

import { Component, OnInit } from '@angular/core';
import { List } from 'ionic-angular';

import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';




@Component({
  selector: 'library',
  templateUrl: './library.component.html',
})
export class LibraryPage implements OnInit {

  books: Book[];
  selectedBook: Book = null;

  constructor (private bookService: BookService) { }

  ngOnInit() {
    this.retrieveBooks();
  }

  retrieveBooks(): void {
    this.books = this.bookService.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}

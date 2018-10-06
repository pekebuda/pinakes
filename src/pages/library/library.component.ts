import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BOOKS } from '../../mock/books'



@Component({
  selector: 'library',
  templateUrl: './library.component.html',
})
export class LibraryPage implements OnInit {

  books: Book[] = BOOKS;
  selectedBook: Book;

  constructor() { }

  ngOnInit() { }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}

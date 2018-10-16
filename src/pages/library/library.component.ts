import { Component, OnInit } from '@angular/core';
import { List, ModalController } from 'ionic-angular';

import { BookService } from '../../services/book.service';
import { BookComponent } from './book.component';
import { Book } from '../../models/book';




@Component({
  selector: 'library',
  templateUrl: './library.component.html',
})
export class LibraryPage implements OnInit {

  books: Book[];
  selectedBook: Book = null;

  constructor (public modalCtrl: ModalController, private bookSrv: BookService) {}

  ngOnInit() {
    this.retrieveBooks();
  }

  retrieveBooks(): void {
    this.books = this.bookSrv.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    let bookDetailModal = this.modalCtrl.create(BookComponent, {book: book});
    bookDetailModal.present();
  }
}

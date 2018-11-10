import { Component, OnInit } from '@angular/core';

import { List, ModalController } from '@ionic/angular';

import { BookService } from '../../services/book.service';
import { BookComponent } from './book.component';
import { Book } from '../../../models/book';




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

  async onSelect(book: Book) {
    this.selectedBook = book;
    let bookDetailModal = await this.modalCtrl.create({component: BookComponent, componentProps: book});
    return await bookDetailModal.present();
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book } from '../../models/book';
import { BOOKS } from '../../mock/books';




@Injectable()
export class BookService {

  constructor () {}

  getBooks(): Book[] {
    return BOOKS;
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from '../models/book';
import { BOOKS } from '../mock/books';




@Injectable()
export class BookService {

  constructor () {}

  getBooks(): Book[] {
    return BOOKS;
  }
}

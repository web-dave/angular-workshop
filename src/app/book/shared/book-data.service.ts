import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookDataService {
  private readonly baseUrl = 'http://localhost:4730/books';

  constructor(
    private http: Http
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json());
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get(`${this.baseUrl}/${isbn}`)
      .map(response => response.json());
  }

  updateBook(isbn: string, book: Object) {
    return this.http.patch(`${this.baseUrl}/${isbn}`, book)
      .map(response => response.json());
  }

  createBook(book: Object) {
    return this.http.post(this.baseUrl, book)
      .map(response => response.json());
  }
}

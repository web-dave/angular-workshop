import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Book, BookDataService } from '../shared';

@Component({
  selector: 'dp-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy {

  book: Book;
  book$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: BookDataService
  ) { }

  ngOnInit() {
    this.book$ = this.route.params
      .map(params => params['isbn'])
      .switchMap(isbn => this.service.getBookByIsbn(isbn))
      .subscribe(book => this.book = book);
  }

  ngOnDestroy() {
    this.book$.unsubscribe();
  }

  onSubmit(bookPartial: Object) {
    this.service.updateBook(this.book.isbn, bookPartial)
      .subscribe(() => alert('Book Updated'));
  }

}

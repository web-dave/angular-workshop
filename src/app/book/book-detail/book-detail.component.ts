import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Book, BookDataService } from '../shared';

@Component({
  selector: 'dp-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  book: Book;
  book$: Subscription;
  params$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: BookDataService
  ) { }

  ngOnInit() {
    this.book$ = this.route.params
      .map(params => params['isbn'])
      .distinctUntilChanged()
      .switchMap(isbn => this.service.getBookByIsbn(isbn))
      .subscribe(book => this.book = book);
  }

  ngOnDestroy() {
    this.book$.unsubscribe();
  }

}

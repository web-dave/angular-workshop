import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';

import {
  Book,
  BookDataService
} from '../shared';

import { Subscription } from 'rxjs';

@Component({
  selector: 'dp-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubscription: Subscription;

  constructor(
    private bookData: BookDataService
  ) { }

  ngOnInit() {
    this.bookSubscription = this.bookData.getBooks()
      .subscribe(
        books => this.books = books
      );
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}

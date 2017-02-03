import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookComponent } from './book.component';

import { routing } from './book.routing';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

import {
  BookDataService,
  ConfirmCandeactivateGuardService,
  JsonAsDefaultRequestOptionsService
} from './shared';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent,
  ],
  providers: [
    BookDataService,
    ConfirmCandeactivateGuardService,
    { provide: RequestOptions, useClass: JsonAsDefaultRequestOptionsService }
  ]
})
export class BookModule { }

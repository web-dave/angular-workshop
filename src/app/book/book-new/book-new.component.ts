import { isbnValidator } from './../shared/isbn-validator';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { BookDataService, isbnValidator } from '../shared';
import { Book } from '../shared/book'

@Component({
  selector: 'dp-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  form: FormGroup;
  book = {
    title: ''
  };
  constructor(
    private formBuilder: FormBuilder,
    private service: BookDataService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [this.book.title, Validators.compose([Validators.required, Validators.minLength(6)])],
      isbn: ['', isbnValidator],
      publisher: this.formBuilder.group({
        name: ['',Validators.required],
        url: ['',Validators.required]
      })
    });
  }

  onSubmit() {
    this.service.createBook(this.form.value)
      .subscribe(() => alert('Book created!'));
  }
}

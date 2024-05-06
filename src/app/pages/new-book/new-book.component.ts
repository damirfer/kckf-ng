import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBook } from 'src/app/models/IBook';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      publication_year: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const newBook: IBook = {
        id: Math.floor(Math.random() * 10) + 1,
        title: this.bookForm.value.title,
        author: this.bookForm.value.author,
        genre: this.bookForm.value.genre,
        publication_year: this.bookForm.value.publication_year,
      };

      console.log(newBook);
    }
  }
}

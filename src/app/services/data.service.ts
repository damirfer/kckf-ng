import { Injectable } from '@angular/core';
import { IBook } from '../models/IBook';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: IBook[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      publication_year: 1925,
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      publication_year: 1960,
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      genre: 'Science Fiction',
      publication_year: 1949,
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      publication_year: 1813,
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Fiction',
      publication_year: 1951,
    },
  ];

  constructor() {}

  getBooks(): IBook[] {
    return this.data
  }

  getBookById(id: number): IBook | undefined {
    return this.data.find((book) => book.id == id)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuote } from '../models/IQuote';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuote(): Observable<IQuote> {
    return this.httpClient.get<IQuote>('https://api.quotable.io/random');
  }
}

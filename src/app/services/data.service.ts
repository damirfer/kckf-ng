import { Injectable } from '@angular/core';
import { IMovie } from '../models/IMovie';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: IMovie[] = [
    {
      id: 1,
      movie: 'The Matrix',
      theater: 'Screen 1',
      ticketsAvailable: 120,
      ticketPrice: 10.5,
      showDate: 'May 10, 2024',
      showTime: '10:00 AM',
    },
    {
      id: 3,
      movie: 'Inception',
      theater: 'Screen 2',
      ticketsAvailable: 90,
      ticketPrice: 11.0,
      showDate: 'May 10, 2024',
      showTime: '01:30 PM',
    },
    {
      id: 2,
      movie: 'Interstellar',
      theater: 'Screen 3',
      ticketsAvailable: 100,
      ticketPrice: 9.75,
      showDate: 'May 10, 2024',
      showTime: '04:45 PM',
    },
    {
      id: 5,
      movie: 'The Dark Knight',
      theater: 'Screen 4',
      ticketsAvailable: 80,
      ticketPrice: 12.0,
      showDate: 'May 10, 2024',
      showTime: '08:15 PM',
    },
    {
      id: 4,
      movie: 'Avatar',
      theater: 'Screen 5',
      ticketsAvailable: 18,
      ticketPrice: 10.0,
      showDate: 'May 10, 2024',
      showTime: '10:30 PM',
    },
  ];
  constructor() {}

  getAllMovies(): IMovie[] {
    return this.data;
  }

  getMovieById(id: number): IMovie {
    return this.data.find((movie) => movie.id === id) as IMovie;
  }
}

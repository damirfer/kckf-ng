import { Component } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent {
  movie: IMovie = {
    id: 0,
    movie: '',
    theater: '',
    ticketsAvailable: 0,
    ticketPrice: 0,
    showDate: '',
    showTime: '',
  };

  constructor(private dataService: DataService) {
    this.movie = this.dataService.getMovieById(1);
  }

  onSubmit(formData: IMovie) {
    console.log(formData);
    // Perform submission logic here
  }
}

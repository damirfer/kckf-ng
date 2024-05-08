import { Component } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: IMovie[] = [];
  showTable: boolean = true;

  constructor(private dataService: DataService) {
    this.movies = this.dataService.getAllMovies();
  }
}

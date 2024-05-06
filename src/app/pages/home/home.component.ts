import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/models/IBook';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bookList: IBook[] = []
  constructor(private dataService: DataService, private router: Router){
    this.bookList = dataService.getBooks();
  }

  public navigateToNew(): void {
    this.router.navigate(['/new'])
  }
}

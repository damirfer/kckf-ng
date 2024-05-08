import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/models/IBook';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  id: string = '';
  book!: IBook

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.book = this.dataService.getBookById(Number(this.id)) as IBook;
    });
  }
}

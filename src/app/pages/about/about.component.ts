import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IQuote } from 'src/app/models/IQuote';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnDestroy{
  quote!: IQuote;
  sub!: Subscription

  //second way to get data from service
  quote$ = this.dataService.getRandomQuote();
  
  constructor(private dataService: DataService) {
    this.sub = this.dataService.getRandomQuote().subscribe((quote) => {
      this.quote = quote;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

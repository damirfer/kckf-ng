import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CenturyPipe } from './pipes/century.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewBookComponent,
    BookDetailsComponent,
    CenturyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
